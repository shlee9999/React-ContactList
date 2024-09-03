const RecordInput = () => {
  return (
    <input
      type='text'
      placeholder='간단한 기록(최대 13자)'
      name='record'
      maxLength={13}
    />
  );
};

export default RecordInput;
