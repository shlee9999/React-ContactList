import { useState } from 'react';

const phoneRegExp = new RegExp(/\d{3}-\d{3,4}-\d{4}/);
const PhoneInput = () => {
  const [isError, setIsError] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setIsError(!phoneRegExp.test(target.value));
  };
  return (
    <>
      <input
        onChange={onChange}
        type='tel'
        placeholder='전화번호(000-0000-0000)'
        name='phone'
        pattern='\d{3}-\d{3,4}-\d{4}'
        maxLength={13}
      />
      {isError && (
        <span className='error'>000-0000-0000 형식에 맞추어 주세요.</span>
      )}
    </>
  );
};

export default PhoneInput;
