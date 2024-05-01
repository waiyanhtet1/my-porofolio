const Input = ({ placeholder, type, name, value, onChange }) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      className="bg-primary px-4 py-3 border-2 border-whitesmoke rounded-md focus:outline-none focus:border-secondary"
    />
  );
};

export default Input;
