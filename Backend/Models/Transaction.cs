using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Transaction
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public Product? Product { get; set; }

    // "IN" or "OUT"
    public string Type { get; set; } = string.Empty; 

    public int Quantity { get; set; }
    public DateTime Date { get; set; } = DateTime.UtcNow;
    public string? Reason { get; set; }
}
