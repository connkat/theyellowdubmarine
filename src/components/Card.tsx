import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm p-4 md:p-6`}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: '12px 16px',
        display: 'block',
        width: 'fit-content',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
}
