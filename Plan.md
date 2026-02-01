# Project: Simple Inventory Management System (IMS)
**Goal:** Build a full-stack app to track products, categories, and stock history.
**Tech Stack:** ASP.NET Core (C#), MySQL, React.

## 🏗️ Phase 1: The Foundation (Database)
We need a place to store data. We will use 3 simple tables:
1.  **Categories:** e.g., "Electronics", "Furniture".
2.  **Products:** e.g., "Laptop", "Chair" (Linked to Category).
3.  **Transactions:** A history log. Every time stock goes IN or OUT, we save a record here (Date, Type, Quantity, Reason).

## 🧠 Phase 2: The Brain (Backend API - ASP.NET Core)
We will create a C# Web API to handle the logic.
* **Setup:** Create a new .NET Web API project.
* **Data Layer:** Use "Entity Framework Core" (EF Core) to talk to MySQL.
* **Endpoints:**
    * `GET /api/products` (List all items)
    * `POST /api/products` (Create new item)
    * `POST /api/stock/in` (Add stock -> Updates Product Qty -> Logs Transaction)
    * `POST /api/stock/out` (Remove stock -> Updates Product Qty -> Logs Transaction)

## 🎨 Phase 3: The Face (Frontend - React)
A clean dashboard to manage everything.
* **Dashboard:** Shows total products and low-stock alerts.
* **Inventory List:** A table showing Product Name, Category, Current Stock, and Price.
* **Actions:** Buttons to "Add Stock (+)" or "Remove Stock (-)" which open a simple popup.

## 🚀 Phase 4: Polish & Deployment
* Connect the React frontend to the .NET backend.
* Test the "Stock Out" validation (prevent selling stock we don't have).