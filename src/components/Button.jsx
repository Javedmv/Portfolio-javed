const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-gradient-to-r from-[#8b4513] to-[#654321] text-white hover:shadow-xl",
    secondary: "bg-white text-[#8b4513] border-2 border-[#8b4513] hover:bg-[#8b4513] hover:text-white",
    ghost: "text-[#8b4513] hover:bg-[#f0ead6]",
    terminal: "bg-black text-[#00ff00] border border-[#00ff00] hover:shadow-[0_0_10px_#00ff00]"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;