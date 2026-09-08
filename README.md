# 📝 MyPastes

A simple and responsive **Paste Manager** built with React. Create, view, edit, search, copy, and delete text pastes with data persisted in the browser using `localStorage`.

## 🚀 Live Demo

**Live:** `https://mypastes.vercel.app`

## 📸 Features

* ✨ Create new pastes
* 👀 View individual pastes
* ✏️ Edit existing pastes
* 🗑️ Delete pastes
* 📋 Copy paste content to clipboard
* 🔍 Search pastes by title
* 💾 Persistent data using `localStorage`
* ✅ Form validation with React Hook Form
* 📱 Fully responsive design
* 🎨 Clean and modern UI with Tailwind CSS
* 🔗 Dynamic routing for individual pastes
* 🔔 Toast notifications for user actions

## 🛠️ Tech Stack

* **React** – UI development
* **React Router DOM** – Client-side routing
* **Redux Toolkit** – State management
* **React Hook Form** – Form handling and validation
* **Tailwind CSS** – Styling and responsive design
* **Lucide React** – Icons
* **React Hot Toast** – Notifications
* **LocalStorage** – Client-side data persistence
* **Vite** – Development and build tool

## 📂 Project Structure

```text
src/
├── components/
│   ├── ActionButton.jsx
│   ├── Navbar.jsx
│   └── PasteCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── AllPastes.jsx
│   └── Paste.jsx
│
├── redux/
│   ├── store.js
│   └── features/
│       └── pasteSlice.js
│
├── App.jsx
├── main.jsx
└── index.css
```

> The exact folder structure may vary depending on your project organization.

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/sritam-behera-716/Mypastes.git
```

Navigate to the project directory:

```bash
cd mypastes
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

The UI uses Tailwind CSS responsive utilities to adapt layouts, spacing, typography, and paste cards based on screen size.

---

Made with ❤️ using React.
