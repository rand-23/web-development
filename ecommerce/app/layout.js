// RootLayout component sets up the structure and context for the application,
// including fonts, global styles, and essential providers for user authentication and state management.

'use client';

import { Geist, Geist_Mono } from "next/font/google"; // Import custom fonts for the homepage.
import "./globals.css"; // Import global CSS styles.
import Footer from "./_components/Footer"; // Footer component for the application layout.
import Header from "./_components/Header"; // Header component for the application layout.
import { ClerkProvider } from '@clerk/nextjs'; // Provides user authentication and access to sign-in pages.
import { CartContext } from './_context/CartContext'; // Context for managing the shopping cart state.
import { useState } from "react";

// Define custom fonts using Google Fonts and assign CSS variables for styling.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// RootLayout is the main wrapper component for the application.
// It defines the HTML structure, provides essential context, and includes shared components like Header and Footer.
export default function RootLayout({ children }) {
  // State for managing the cart, shared across the application through CartContext.
  const [cart, setCart] = useState([]);

  return (
    <ClerkProvider>
      {/* Provide the cart state using the CartContext provider. */}
      <CartContext.Provider value={{ cart, setCart }}>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {/* Include the Header component at the top of the layout. */}
            <Header />
            
            {/* Render the main content passed as children. */}
            {children}
            
            {/* Include the Footer component at the bottom of the layout. */}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
