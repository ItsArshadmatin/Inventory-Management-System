import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import DashboardStats from './components/DashboardStats';
import InventoryTable from './components/InventoryTable';
import StockModal from './components/StockModal';
import CreateProductModal from './components/CreateProductModal';
import CategoryManagerModal from './components/CategoryManagerModal';
import TransactionHistoryModal from './components/TransactionHistoryModal';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

// Backend URL
const API_BASE_URL = "https://inventory-management-system-p6oa.onrender.com";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Stock Modal State
  const [stockModal, setStockModal] = useState({ show: false, product: null, type: 'IN' });

  // Create Product Modal State
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Category Manager Modal State
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  // Transaction History Modal State
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [prodRes, catRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/products`),
        fetch(`${API_BASE_URL}/api/categories`)
      ]);

      const prodData = await prodRes.json();
      const catData = await catRes.json();

      setProducts(prodData);
      setCategories(catData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Stock Modal Helpers
  const openStockModal = (product, type) => {
    setStockModal({ show: true, product, type });
  };

  const closeStockModal = () => {
    setStockModal({ ...stockModal, show: false });
  };

  const handleStockAction = async (productId, quantity, type, reason) => {
    const endpoint = type === 'IN' ? `${API_BASE_URL}/api/stock/in` : `${API_BASE_URL}/api/stock/out`;
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity, reason })
      });

      if (res.ok) {
        await fetchData(); // simple refresh
        closeStockModal();
        MySwal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Stock updated successfully',
          timer: 1500,
          showConfirmButton: false
        });
      } else {
        const err = await res.text();
        MySwal.fire({
          icon: 'error',
          title: 'Error',
          text: err
        });
      }
    } catch (error) {
      console.error("Stock update failed:", error);
      MySwal.fire({
        icon: 'error',
        title: 'Connection Failed',
        text: 'Failed to connect to server'
      });
    }
  };

  // Create Product Helper
  const handleCreateProduct = async (newProduct) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });

      if (res.ok) {
        await fetchData(); // refresh list
        setShowCreateModal(false);
        MySwal.fire({
          icon: 'success',
          title: 'Product Created!',
          text: 'Your new product has been added.',
          timer: 1500,
          showConfirmButton: false
        });
      } else {
        const err = await res.text();
        MySwal.fire({
          icon: 'error',
          title: 'Creation Failed',
          text: err
        });
      }
    } catch (error) {
      console.error("Create product failed:", error);
      MySwal.fire({
        icon: 'error',
        title: 'Connection Failed',
        text: 'Failed to connect to server'
      });
    }
  };

  // Add Category Helper
  const handleAddCategory = async (newCategory) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCategory)
      });

      if (res.ok) {
        await fetchData(); // refresh categories list
        MySwal.fire({
          icon: 'success',
          title: 'Category Added!',
          timer: 1500,
          showConfirmButton: false
        });
      } else {
        const err = await res.text();
        MySwal.fire({
          icon: 'error',
          title: 'Error',
          text: err
        });
      }
    } catch (error) {
      console.error("Create category failed:", error);
      MySwal.fire({
        icon: 'error',
        title: 'Connection Failed',
        text: 'Failed to connect to server'
      });
    }
  };

  // Delete Category Helper
  const handleDeleteCategory = async (id) => {
    const result = await MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/categories/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        await fetchData(); // refresh categories list
        MySwal.fire(
          'Deleted!',
          'Category has been deleted.',
          'success'
        );
      } else {
        MySwal.fire({
          icon: 'error',
          title: 'Failed',
          text: 'Failed to delete category.'
        });
      }
    } catch (error) {
      console.error("Delete category failed:", error);
      MySwal.fire({
        icon: 'error',
        title: 'Connection Failed',
        text: 'Failed to connect to server'
      });
    }
  };

  // Low Stock Alert Popup
  const handleShowLowStock = () => {
    const lowStockItems = products.filter(p => p.stockQuantity < 5);

    if (lowStockItems.length === 0) {
      MySwal.fire({
        icon: 'info',
        title: 'Good News!',
        text: 'No products are low on stock.',
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    const listHtml = `
      <ul style="text-align: left; list-style-type: none; padding: 0;">
        ${lowStockItems.map(p => `
          <li style="margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
            <span>${p.name}</span>
            <span style="font-weight: bold; color: #dc3545;">${p.stockQuantity} left</span>
          </li>
        `).join('')}
      </ul>
    `;

    MySwal.fire({
      title: '⚠️ Low Stock Alert',
      html: listHtml,
      icon: 'warning',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="container-fluid pb-5 px-4">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <DashboardStats
              products={products}
              onLowStockClick={handleShowLowStock}
            />

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">Inventory Items</h4>
              <div>
                <button
                  className="btn btn-info text-white me-2"
                  onClick={() => setShowHistoryModal(true)}
                >
                  🕒 History
                </button>
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => setShowCategoryModal(true)}
                >
                  📂 Manage Categories
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowCreateModal(true)}
                >
                  + Add New Product
                </button>
              </div>
            </div>

            <InventoryTable
              products={products}
              onAddStock={(p) => openStockModal(p, 'IN')}
              onRemoveStock={(p) => openStockModal(p, 'OUT')}
            />
          </>
        )}
      </div>

      <StockModal
        show={stockModal.show}
        product={stockModal.product}
        actionType={stockModal.type}
        onClose={closeStockModal}
        onConfirm={handleStockAction}
      />

      <CreateProductModal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onConfirm={handleCreateProduct}
        categories={categories}
      />

      <CategoryManagerModal
        show={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        categories={categories}
        onAddCategory={handleAddCategory}
        onDeleteCategory={handleDeleteCategory}
      />

      <TransactionHistoryModal
        show={showHistoryModal}
        onClose={() => setShowHistoryModal(false)}
      />
    </div>
  );
}

export default App;
