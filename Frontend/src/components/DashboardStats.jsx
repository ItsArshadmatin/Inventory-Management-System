import React from 'react';

const DashboardStats = ({ products, onLowStockClick }) => {
    const totalProducts = products.length;
    const totalStock = products.reduce((sum, p) => sum + p.stockQuantity, 0);
    const lowStockCount = products.filter(p => p.stockQuantity < 5).length;

    return (
        <div className="row mb-4">
            <div className="col-md-4">
                <div className="card text-white bg-success mb-3">
                    <div className="card-header">Total Products</div>
                    <div className="card-body">
                        <h5 className="card-title display-4">{totalProducts}</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-white bg-info mb-3">
                    <div className="card-header">Total Stock Items</div>
                    <div className="card-body">
                        <h5 className="card-title display-4">{totalStock}</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div
                    className="card text-white bg-warning mb-3"
                    style={{ cursor: 'pointer' }}
                    onClick={onLowStockClick}
                    title="Click to see low stock items"
                >
                    <div className="card-header">Low Stock Alerts ⚠️</div>
                    <div className="card-body">
                        <h5 className="card-title display-4">{lowStockCount}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;
