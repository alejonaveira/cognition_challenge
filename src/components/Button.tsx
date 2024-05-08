import React from 'react';

interface ButtonProps {
  onClick: () => void;
  toggle?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, toggle }) => {
  return (
    <button
      onClick={onClick}
      className="bg-boxes-new shadow-md uppercase text-white w-full py-3 px-6 cursor-pointer outline-none btn btn-border transition ease-in-out hover:scale-105"
      style={{ backgroundColor: toggle ? 'rgba(177, 135, 96)' : 'rgba(193, 151, 112, 1)' }}
    >
      {children}
    </button>
  );
};

export default Button;
