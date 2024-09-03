import { ButtonHTMLAttributes, ReactNode } from 'react';
import './style.css';

export default function PrimaryBtn({
  className,
  children,
  ...rest
}: {
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${className} primary-btn`} {...rest}>
      {children}
    </button>
  );
}
