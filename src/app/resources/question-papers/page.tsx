import React from 'react';
import { Button } from '@/components/ui/Button';

export default function ResourcePage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '60vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Resource Hub</h1>
        <p style={{ color: 'var(--color-supporting)', marginBottom: '2rem' }}>We are currently updating this section with the latest materials.</p>
        <Button>Notify Me When Ready</Button>
      </div>
    </main>
  );
}
