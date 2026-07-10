# Frontend Developer Task
This repository contains the frontend implementation of a responsive web application based on a provided Figma design. The goal of this project was to translate the design mockups into clean, functional code while maintaining absolute design fidelity.

## Design Implementation
A major focus during development was ensuring a 1:1 pixel perfect replication of the design. Every single matrix including all element widths, heights, margins, paddings, and font sizes was extracted exactly from the Figma file. There was no guesswork; if the design had a 24px gap or a specific border-radius, it was implemented exactly as specified in the CSS.

## Tech Stack
The project was built using the following technologies:
* **React (Vite):** Chosen for fast compilation and modern component-based architecture.
* **Bootstrap:** Utilized primarily for its robust responsive grid system to handle complex layouts across devices.
* **Font Awesome:** Integrated for scalable, customizable vector icons across the interface.
* **CSS:** Used for all custom styling, micro-animations, and specific component designs (like the custom concave sidebar curves) to avoid the bloat of relying solely on heavy CSS frameworks.

## Screens Implemented

### 1. Login Screen
The primary entry point for users. On larger screens, it features a clean split layout with a prominent background image on the left and the authentication form on the right. For mobile devices, the layout dynamically shifts to use the image as a premium, blurred background behind the centered form.

### 2. Register Screen
A seamless continuation of the authentication flow. It mirrors the aesthetic of the login screen while adding necessary fields for account creation, ensuring a consistent user experience.

### 3. OTP Verification
A dedicated screen for email verification. It features an intuitive 6-digit input system that automatically advances focus as the user types, mimicking native mobile app behavior.

### 4. Main Dashboard
The core interface of the application. It is highly responsive and includes several intricate design features:
* A fully custom sidebar with smooth, concave active-state curves.
* A top statistics header highlighting drivers, complete with custom avatars and stats.
* A knowledge base grid utilizing CSS flexbox and custom SVG/FontAwesome icons.
* A complex data table that intelligently transforms into individual, stacked data cards on mobile devices to preserve readability on smaller screens.

## Code Quality & Structure
Great care was taken to ensure that the codebase is perfectly clean. There are absolutely no Sonar errors, linter warnings, or build errors present in this project, making it fully production-ready.

The project follows a highly organized, modular directory structure:
* `src/components/`: Contains all modular React components (`Login.jsx`, `Dashboard.jsx`, etc.). Each component is strictly separated to handle its own specific UI logic and state.
* `src/components/*.css`: Every component has its own dedicated stylesheet (`Login.css`, `Dashboard.css`). This scope-level separation prevents CSS bleed and keeps styles highly maintainable.
* `src/assets/`: Centralized storage for all static assets, including background images, avatars, and custom SVGs used across the app.
* `src/App.jsx`: Serves as the central routing hub utilizing `react-router-dom` to manage seamless navigation between the authentication flow and the dashboard.

## Setup & Running Locally
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the local development server
4. Open the provided localhost link in your browser

All responsive breakpoints have been thoroughly tested across Mobile, Tablet, Laptop, and TV views.
