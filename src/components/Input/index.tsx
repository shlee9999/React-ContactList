import { InputHTMLAttributes } from 'react';
import './style.css';

export default function Input({
  className,
  ...rest
}: {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${className}`} {...rest} />;
}
