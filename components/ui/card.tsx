import { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return <div className="border rounded shadow-sm bg-white">{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="p-4">{children}</div>;
}
