import { forwardRef, useState } from 'react';

const koreanRegExp = new RegExp(/^[가-힣]+$/);
const NameInput = forwardRef<HTMLInputElement>((_, ref) => {
  const [isError, setIsError] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setIsError(!koreanRegExp.test(target.value));
  };
  return (
    <>
      <input
        onChange={onChange}
        type='text'
        placeholder='이름 (2~4자)'
        minLength={2}
        maxLength={4}
        name='name'
        pattern='^[가-힣]+$'
        ref={ref}
      />
      {isError && (
        <span className='error'>이름은 2~4글자의 한글이어야 합니다.</span>
      )}
    </>
  );
});

export default NameInput;
