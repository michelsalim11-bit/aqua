'use client';

import { useState, forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface FloatingFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  isPassword?: boolean;
}

export const FloatingField = forwardRef<HTMLInputElement, FloatingFieldProps>(
  ({ label, icon, isPassword, id, className = '', type, ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <div className={`relative pt-5 ${className}`}>
        <div className="relative">
          {icon && (
            <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-acqua-blue/50">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            type={isPassword ? (show ? 'text' : 'password') : type}
            placeholder=" "
            className={`peer w-full border-b-[1.5px] border-acqua-blue/20 bg-transparent py-2 text-base text-acqua-blue outline-none transition-colors focus:border-acqua-blue ${
              icon ? 'pl-7' : ''
            } ${isPassword ? 'pr-8' : ''}`}
            {...props}
          />
          <label
            htmlFor={id}
            className={`pointer-events-none absolute top-2 text-[15px] text-acqua-blue/50 transition-all duration-150 peer-focus:-top-2.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-acqua-blue peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:text-acqua-blue ${
              icon ? 'left-7 peer-focus:left-0 peer-[:not(:placeholder-shown)]:left-0' : 'left-0'
            }`}
          >
            {label}
          </label>
          {isPassword && (
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-acqua-blue/50 transition-colors hover:text-acqua-blue"
            >
              {show ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
            </button>
          )}
        </div>
      </div>
    );
  },
);

FloatingField.displayName = 'FloatingField';
