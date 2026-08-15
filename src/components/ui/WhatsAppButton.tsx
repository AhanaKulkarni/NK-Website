"use client";

import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <Link 
      href="https://wa.me/919000000000" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: '#25D366',
        color: '#ffffff',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
        zIndex: 1000,
        transition: 'transform 0.3s ease',
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
    </Link>
  );
}
