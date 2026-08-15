import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({ children, className = '', onClick, hoverable = false }: CardProps) {
  const isClickable = !!onClick;
  const Component = isClickable ? 'button' : 'div';
  
  return (
    <Component 
      className={`${styles.card} ${hoverable || isClickable ? styles.hoverable : ''} ${isClickable ? styles.clickable : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
