const SectionTitle = ({ children, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{children}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;