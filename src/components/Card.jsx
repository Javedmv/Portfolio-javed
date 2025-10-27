const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${hover ? 'hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2' : ''} ${className}`}>
      {children}
    </div>
  );
};
export default Card;