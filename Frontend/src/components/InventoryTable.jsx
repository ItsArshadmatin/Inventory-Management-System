import React from 'react';

const InventoryTable = ({ products, onAddStock, onRemoveStock }) => {
    return (
        <div className="card shadow-sm">
            <div className="card-header bg-white">
                <h5 className="mb-0">Current Inventory</h5>
            </div>
            <div className="table-responsive">
                <table className="table table-hover mb-0">
                    <thead className="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td className="fw-bold">{product.name}</td>
                                <td>
                                    <span className="badge bg-secondary">{product.category?.name || '-'}</span>
                                </td>
                                <td>₹{product.price.toFixed(2)}</td>
                                <td>
                                    <span className={`badge ${product.stockQuantity < 5 ? 'bg-danger' : 'bg-success'}`}>
                                        {product.stockQuantity}
                                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-sm btn-outline-success me-2"
                                        onClick={() => onAddStock(product)}
                                    >
                                        + Add
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => onRemoveStock(product)}
                                    >
                                        - Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {products.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center py-4">
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InventoryTable;
