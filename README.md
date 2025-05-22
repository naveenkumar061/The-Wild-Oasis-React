# The Wild Oasis

A React-based web application featuring user authentication, dashboard, bookings, cabins, user management, and settings — built with modern tools like React Router, React Query, Supabase, and styled-components.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Authentication Flow](#authentication-flow)

---

## Project Overview

The Wild Oasis is a full-featured web app providing a seamless user experience for managing bookings, cabins, user accounts, and settings. The app uses client-side routing with protected routes to secure content for authenticated users only.

---

## Features

- User registration, login, logout, and profile management via Supabase authentication
- Protected routes guarded with authentication checks
- Dashboard with customizable filters and real-time data updates
- Bookings management including detailed booking views and check-ins
- User and cabin administration
- Global dark mode support
- Responsive design with consistent UI using styled-components

---

## Tech Stack

- React 18+ with JSX
- React Router v6 for routing
- React Query for data fetching and caching
- Supabase for backend authentication and storage
- Styled-components for CSS-in-JS styling
- React Hot Toast for notifications
- React Error Boundary for error handling

---

## Getting Started

### Prerequisites

- Node.js (v16+) and npm/yarn installed
- Supabase project set up with authentication and storage

### Installation

```bash
git clone <your-repo-url>
cd your-repo
npm install
```

### Running Locally

npm run dev

### Project Structure

---

/src — main source folder

/pages — React components for each route (Dashboard, Bookings, Users, etc.)

/features — feature-specific components and hooks

/ui — reusable UI components (Header, Sidebar, AppLayout)

/context — React contexts (e.g., DarkModeContext)

/services — API and Supabase service functions

/styles — global and shared CSS styles

---

### Key Components

---

App.jsx
Sets up React Router with protected and public routes, wraps the app with React Query and dark mode context providers.

ProtectedRoute.jsx
Guards routes to ensure only authenticated users can access certain pages, shows a spinner while authentication status is loading.

AppLayout.jsx
Main app shell layout including Header, Sidebar, and the main content area where routes render.

Dashboard.jsx
Renders the dashboard page with a header containing title and filters, plus the main dashboard content layout.

Authentication Flow
User signs up or logs in via Supabase auth methods (signup, login)

Current user state is managed with a custom useUser hook using React Query

ProtectedRoute redirects unauthenticated users to the login page

User profile updates (password, avatar, full name) handled via Supabase API

---
