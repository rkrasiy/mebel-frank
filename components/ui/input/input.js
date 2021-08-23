export default function Input(props){
  const { type, label, name, clicked, value } = props;
  return (
    <div className="field">
      <label htmlFor="">{label}</label>
      <input type={type} name={name} onClick={clicked} value={value} />
    </div>
  )
}