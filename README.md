# 🛒 Forever E-commerce Platform

Welcome to **Forever** — a modern, scalable, full-stack e-commerce platform built with performance, aesthetics, and functionality in mind.  
Explore a smooth shopping experience for users, a robust admin dashboard for sellers, and secure payment options integrated seamlessly.

---

## 🚀 Live URLs

| Platform | URL |
|---------|-----|
| 🧑‍💻 Frontend (User View) | [Forever Storefront](https://forever-frontend-iota-nine.vercel.app/) |
| 🛠️ Admin Panel | [Forever Admin](https://forever-admin-pi-azure.vercel.app/) |
| 🌐 Backend API | [Forever Backend API](https://forever-backend-phi-nine.vercel.app/) |

---

## 🧰 Tech Stack

### 🧩 Backend – [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)

- 🔐 **Authentication**: `bcrypt`, `jsonwebtoken`, `validator`
- ☁️ **Image Upload**: `cloudinary`, `multer`
- 🧮 **Database**: `mongoose` (MongoDB)
- 🌍 **CORS Enabled**: `cors`
- 💳 **Payment Gateways**: `stripe`, `razorpay`
- 📦 **Other Utilities**: `dotenv`, `nodemon`

> 📁 Repo Structure: RESTful APIs with robust error handling, secure token-based authentication, and support for file uploads.

---

### 🎨 Frontend – [React](https://reactjs.org/) + [Tailwind CSS](https://tailwindcss.com/)

- ⚛️ **React v19** with functional components and hooks
- 🧾 **Routing**: `react-router-dom@7`
- 📡 **API Calls**: `axios`
- 🔔 **Notifications**: `react-toastify`
- 💅 **Styling**: `Tailwind CSS v4` with `@tailwindcss/vite`

> 💡 Intuitive UI with real-time feedback, responsive design, and loading states.

---

### 🛡️ Admin Panel – [React](https://reactjs.org/) + Tailwind

- 📊 **Dashboard UI**: `lucide-react`, `react-icons`
- ⚙️ **Routing**: `react-router-dom`
- 🔔 **Toasts**: `react-toastify`
- 🎯 **Admin Operations**: Add/edit/delete products, manage users, track orders

> ⚡ Optimized interface with modern icons and rich feedback for a seamless admin experience.

---

## 💳 Payment Integration

- ✅ **Cash on Delivery (COD)**
- 💳 **Stripe Payment Gateway** – Fully integrated for secure online transactions
- 💰 Razorpay setup included and ready for integration

---

## 📸 Features

- 🛍️ Browse & filter products
- 🔒 Secure user login/signup
- 🧺 Add to cart, manage quantities
- 📦 Place orders with status tracking
- 👨‍💼 Admin: Manage products, orders, users
- 📁 Upload product images
- 💸 Integrated payments: Stripe + COD
- 🌗 Light/Dark styling with Tailwind utility classes

---

## 🏗️ Project Structure

```

📁 root
├── 🖥️ backend
│   ├── ⚙️ config
│   ├── 📂 controllers
│   ├── 🧩 middleware
│   ├── 🗃️ models
│   ├── 🚏 routes
│   └── 🧾 server.js
├── 🌐 frontend (User App)
│   └── 📁 src
│       ├── 🎨 assets
│       ├── 🌐 context
│       ├── 🧩 components
│       ├── 📄 pages
│       ├── ⚛️ App.jsx
│       ├── 🖌️ index.css
│       └── 🚀 main.jsx
├── 🛠️ admin (Dashboard App)
│   └── 📁 src
│       ├── 🎨 assets
│       ├── 🧩 components
│       ├── 📄 pages
│       ├── ⚛️ App.jsx
│       ├── 🖌️ index.css
│       └── 🚀 main.jsx


````

---

## 📦 Installation & Setup (Dev Mode)

### 1. Backend

```bash
cd backend
npm install
npm run dev
````

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Admin Panel

```bash
cd admin
npm install
npm run dev
```

---

## 📮 API Base URL

```
https://forever-backend-phi-nine.vercel.app/
```

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

---

## 🧑‍🎨 Developed By

**Ronak Kedia**
Made with ❤️ for modern e-commerce website.

```
