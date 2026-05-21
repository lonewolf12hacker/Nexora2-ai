import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-8 text-center text-sm text-neutral-500">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Nexora AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
