const Input = ({ placeholder, type }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="bg-primary px-4 py-3 border-2 border-whitesmoke rounded-md focus:outline-none focus:border-secondary"
    />
  );
};

export default Input;
