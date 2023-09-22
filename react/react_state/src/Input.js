export default function InputState(props) {
  const { type, required } = props;
  return (
    <>
      <input type={type} required={required} />
    </>
  );
}
