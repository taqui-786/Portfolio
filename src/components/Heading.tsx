const Heading = ({ children }: { children: React.ReactNode }) => {
    // CUSTOM HEADING FOR ALL PAGE 
  return (
    <h1 className="font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl">
      {children}
    </h1>
  );
};


export default Heading