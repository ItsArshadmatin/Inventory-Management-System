import React, { useState } from 'react';

const CategoryManagerModal = ({ show, onClose, categories, onAddCategory, onDeleteCategory }) => {
    const [newCategoryName, setNewCategoryName] = useState('');

    if (!show) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newCategoryName.trim()) {
            onAddCategory({ name: newCategoryName });
            setNewCategoryName('');
        }
    };

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-secondary text-white">
                        <h5 className="modal-title">📂 Manage Categories</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {/* Add New Category Form */}
                        <form onSubmit={handleSubmit} className="mb-4">
                            <label className="form-label fw-bold">Add New Category</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                    placeholder="Category Name (e.g. Books)"
                                    required
                                />
                                <button type="submit" className="btn btn-success" disabled={!newCategoryName.trim()}>
                                    + Add
                                </button>
                            </div>
                        </form>

                        <hr />

                        {/* List Existing Categories */}
                        <h6 className="fw-bold mb-3">Existing Categories</h6>
                        <div className="list-group" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {categories.length === 0 ? (
                                <div className="text-center text-muted py-3">No categories found.</div>
                            ) : (
                                categories.map(cat => (
                                    <div key={cat.id} className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>{cat.name}</span>
                                        <div>
                                            <span className="badge bg-light text-dark rounded-pill me-2">ID: {cat.id}</span>
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => onDeleteCategory(cat.id)}
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryManagerModal;
