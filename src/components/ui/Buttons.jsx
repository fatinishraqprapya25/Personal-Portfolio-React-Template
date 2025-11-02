const Button = ({ children }) => (
    <button
        className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 shadow-lg whitespace-nowrap transform hover:scale-[1.03] 
            bg-[#2B1EC2] text-white hover:bg-indigo-700 shadow-[0_0_15px_rgba(99,102,241,0.7)]
            cursor-pointer`}
    >
        {children}
    </button>
);

export default Button;