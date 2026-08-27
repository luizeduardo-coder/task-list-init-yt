function Input(props) {
  return (
    <input
        type={props.type}
        placeholder={props.placeholder}
        className="border border-slate-400 outline-stale-400 px-2 rounded-md"
        value={props.value}
        onChange={props.onChange}
      />
  );
}

export default Input;