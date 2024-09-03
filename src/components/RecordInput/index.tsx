const RecordInput = ({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type='text'
      placeholder='간단한 기록(최대 13자)'
      name='record'
      maxLength={13}
      {...rest}
    />
  );
};

export default RecordInput;
