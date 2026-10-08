import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs md:text-sm tracking-wide gap-1.5",
    md: "px-6 py-3 text-sm md:text-base tracking-wide gap-2",
    lg: "px-8 py-4 text-base md:text-lg tracking-wide gap-2.5 shadow-md",
  };

  const variantStyles = {
    primary: "bg-brand-spruce text-white hover:bg-brand-forest hover:shadow-lg hover:shadow-brand-spruce/20 focus:ring-brand-spruce active:scale-[0.98]",
    secondary: "bg-brand-mint text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-brand-mint/25 focus:ring-brand-mint active:scale-[0.98]",
    outline: "border-2 border-brand-spruce text-brand-spruce hover:bg-brand-spruce hover:text-white focus:ring-brand-spruce active:scale-[0.98]",
    outlineMint: "border-2 border-brand-mint/50 text-brand-mint hover:bg-brand-mint hover:text-white focus:ring-brand-mint active:scale-[0.98]",
    ghost: "text-brand-charcoal hover:bg-brand-spruce/5 hover:text-brand-spruce focus:ring-brand-spruce",
    glow: "bg-gradient-to-r from-brand-spruce to-teal-800 text-white shadow-glow hover:shadow-glow-lg border border-teal-500/30 active:scale-[0.98]",
    white: "bg-white text-brand-spruce hover:bg-brand-50 hover:shadow-lg focus:ring-white active:scale-[0.98]"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...props}
    >
      {content}
    </motion.button>
  );
}
