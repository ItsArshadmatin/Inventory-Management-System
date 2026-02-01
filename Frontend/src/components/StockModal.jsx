import React, { useState } from 'react';

const StockModal = ({ show, onClose, product, actionType, onConfirm }) => {
    const [quantity, setQuantity] = useState(1);
    const [reason, setReason] = useState('');

    if (!show || !product) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm(product.id, parseInt(quantity), actionType, reason);
        setQuantity(1);
        setReason('');
    };

    return (
        <>
            <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className={`modal-header ${actionType === 'IN' ? 'bg-success' : 'bg-danger'} text-white`}>
                            <h5 className="modal-title">
                                {actionType === 'IN' ? '📥 Add Stock' : '📤 Remove Stock'}: {product.name}
                            </h5>
                            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Quantity</label>
                                    <input
                                        type="number"
                                        min="1"
                                        className="form-control"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Reason (Optional)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        placeholder="e.g. Purchase, Sale, Damaged"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                                <button type="submit" className={`btn ${actionType === 'IN' ? 'btn-success' : 'btn-danger'}`}>
                                    Confirm {actionType === 'IN' ? 'Add' : 'Remove'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StockModal;
