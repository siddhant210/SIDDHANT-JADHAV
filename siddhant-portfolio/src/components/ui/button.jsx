import React from 'react';

const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default',
  disabled = false,
  type = 'button',
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    default: 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white focus:ring-purple-500',
    outline: 'border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white focus:ring-purple-500',
    ghost: 'hover:bg-white/10 text-white focus:ring-white/20',
    secondary: 'bg-white/10 text-white hover:bg-white/20 focus:ring-white/20'
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-8 px-3 text-sm',
    lg: 'h-12 px-8 text-lg',
    icon: 'h-10 w-10'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

