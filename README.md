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
<img width="1920" height="1013" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/7d3fbf9c-6b41-481a-9269-230037cbbf40" />


<img width="1920" height="1013" alt="Screenshot (21)" src="https://github.com/user-attachments/assets/2d6ea665-6866-408a-bbeb-3b8bb9e780d3" />


<img width="1920" height="1012" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/e7254005-1b98-4b28-b73e-5b49930bc124" />


<img width="1920" height="1012" alt="Screenshot (23)" src="https://github.com/user-attachments/assets/e4dc2e05-811c-4820-84df-1b84b6cba2b4" />


<img width="1920" height="1008" alt="Screenshot (24)" src="https://github.com/user-attachments/assets/c3ead5e6-e634-426a-a537-6f6a18211e57" />


<img width="1920" height="1012" alt="Screenshot (25)" src="https://github.com/user-attachments/assets/bf4f92f3-03ee-4b47-8d89-a4098a08573d" />


<img width="1920" height="1000" alt="Screenshot (26)" src="https://github.com/user-attachments/assets/b9691b61-f5dd-487c-9f4b-3799eb6a01cc" />




