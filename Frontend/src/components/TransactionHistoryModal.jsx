import React, { useEffect, useState } from 'react';

const API_BASE_URL = "https://inventory-management-system-p6oa.onrender.com";

const TransactionHistoryModal = ({ show, onClose }) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (show) {
            fetchTransactions();
        }
    }, [show]);

    const fetchTransactions = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/transactions`);
            if (res.ok) {
                const data = await res.json();
                setTransactions(data);
            } else {
                console.error("Failed to fetch transactions");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    if (!show) return null;

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header bg-dark text-white">
                        <h5 className="modal-title">🕒 Transaction History</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {loading ? (
                            <div className="text-center py-4">
                                <div className="spinner-border text-secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="table-responsive" style={{ maxHeight: '500px' }}>
                                <table className="table table-hover table-striped">
                                    <thead className="table-light sticky-top">
                                        <tr>
                                            <th>Date</th>
                                            <th>Type</th>
                                            <th>Product</th>
                                            <th>Qty</th>
                                            <th>Reason</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.map(t => (
                                            <tr key={t.id}>
                                                <td>{new Date(t.date).toLocaleString()}</td>
                                                <td>
                                                    <span className={`badge ${t.type === 'IN' ? 'bg-success' : 'bg-danger'}`}>
                                                        {t.type}
                                                    </span>
                                                </td>
                                                <td className="fw-bold">{t.product?.name || `Product #${t.productId}`}</td>
                                                <td>{t.quantity}</td>
                                                <td className="text-muted fst-italic">{t.reason || '-'}</td>
                                            </tr>
                                        ))}
                                        {transactions.length === 0 && (
                                            <tr>
                                                <td colSpan="5" className="text-center py-3">No transactions found.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistoryModal;
