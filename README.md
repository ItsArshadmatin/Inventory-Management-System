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
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dc5ee210-d654-4781-8b68-0ddc5b408783" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e5c56085-f8fc-4439-b478-13cbbc8ab2bb" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/331421e6-6b21-40a7-b43d-17d134f622c3" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/311137be-eaed-4f2d-82d7-196598e2f9d2" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/19e1fa4b-ef36-4091-91a1-f0e9a7d7795f" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e707acfb-1ff4-4dc2-8c54-8791f7878a67" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/672dfe6b-5610-43ef-8d9d-06753ec0bff1" />







