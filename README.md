# Inventory Management System (IMS)

A modern full-stack inventory management application designed to track products, categories, and stock history efficiently.

## 🚀 Features

-   **Dashboard Overview**: Real-time stats on total products, total stock value, and low stock alerts.
-   **Product Management**: Create and manage products with price, stock, and categories.
-   **Stock Operations**: Dedicated "Stock In" and "Stock Out" actions with transaction logging.
-   **Interactive Alerts**: 
    -   **Low Stock**: Clickable dashboard alert to view products running low (< 5 items).
    -   **Delete Confirmation**: Safe deletion with "Are you sure?" popups.
    -   **Success/Error Feedback**: Beautiful animated notifications using SweetAlert2.
-   **Category Management**: dynamic system to add or remove product categories.
-   **Transaction History**: Complete audit log of all inventory movements.
-   **Localization**: Built with Indian Rupee (₹) currency support.

## 🛠️ Tech Stack

-   **Backend**: ASP.NET Core 9.0 Web API, Entity Framework Core
-   **Frontend**: React 19 (Vite), Bootstrap 5, SweetAlert2
-   **Database**: In-Memory / MySQL compatible

## 📦 How to Run

### Prerequisites
-   .NET 9.0 SDK
-   Node.js & npm

### 1. Start the Backend
```bash
cd Backend
dotnet run
```
_Server runs at: http://localhost:5079_

### 2. Start the Frontend
```bash
cd Frontend
npm install  # (Only need to run this once)
npm run dev
```
_App runs at: http://localhost:5173_

## 📸 Screenshots

_(You can drag and drop screenshots here inside the README on GitHub)_
