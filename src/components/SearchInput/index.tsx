import { InputHTMLAttributes } from 'react';
import Input from '@/components/Input';
import './style.css';

export default function SearchInput({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Input
      className='search-input'
      {...rest}
      placeholder='검색어를 입력 후 엔터를 누르세요'
    />
  );
}
