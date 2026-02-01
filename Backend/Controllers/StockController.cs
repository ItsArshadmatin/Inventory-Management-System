using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StockController : ControllerBase
{
    private readonly AppDbContext _context;

    public StockController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("in")]
    public async Task<IActionResult> AddStock([FromBody] Transaction transaction)
    {
        if (transaction.Quantity <= 0) return BadRequest("Quantity must be positive");

        var product = await _context.Products.FindAsync(transaction.ProductId);
        if (product == null) return NotFound("Product not found");

        // Update product stock
        product.StockQuantity += transaction.Quantity;

        // Log transaction
        transaction.Type = "IN";
        transaction.Date = DateTime.UtcNow;
        _context.Transactions.Add(transaction);

        await _context.SaveChangesAsync();
        return Ok(new { Message = "Stock added successfully", NewStock = product.StockQuantity });
    }

    [HttpPost("out")]
    public async Task<IActionResult> RemoveStock([FromBody] Transaction transaction)
    {
        if (transaction.Quantity <= 0) return BadRequest("Quantity must be positive");

        var product = await _context.Products.FindAsync(transaction.ProductId);
        if (product == null) return NotFound("Product not found");

        if (product.StockQuantity < transaction.Quantity)
        {
            return BadRequest("Insufficient stock");
        }

        // Update product stock
        product.StockQuantity -= transaction.Quantity;

        // Log transaction
        transaction.Type = "OUT";
        transaction.Date = DateTime.UtcNow;
        _context.Transactions.Add(transaction);

        await _context.SaveChangesAsync();
        return Ok(new { Message = "Stock removed successfully", NewStock = product.StockQuantity });
    }
}
