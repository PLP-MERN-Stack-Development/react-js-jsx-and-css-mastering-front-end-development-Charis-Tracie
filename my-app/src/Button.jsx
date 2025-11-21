export default function Button({ children, variant = "primary", onClick }) {
  const styles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button onClick={onClick} className={`px-4 py-2 rounded ${styles[variant]}`}>
      {children}
    </button>
  );
}
