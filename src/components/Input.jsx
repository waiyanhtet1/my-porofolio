const Input = ({ placeholder, type, name }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      className="bg-primary px-4 py-3 border-2 border-whitesmoke rounded-md focus:outline-none focus:border-secondary"
    />
  );
};

export default Input;
