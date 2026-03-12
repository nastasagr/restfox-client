import { forwardRef } from "react";

import { type InputProps } from "@/@types/input";

const Input = forwardRef<HTMLInputElement, InputProps>(

    ({ label, icon: Icon, className = "", ...props }, ref) => {
        return (
            <div className="w-full">
                {label && <label className="mb-1 block">{label}</label>}

                <div className="relative w-full">
                    {Icon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <Icon size={15} className="text-gray-400" />
                        </div>
                    )}

                    <input
                        ref={ref}
                        {...props}
                        className={`w-full h-10 rounded-md border-2 focus:border-primary outline-none text-center ${Icon ? "px-12" : ""
                            } ${className}`}
                    />
                </div>
            </div>
        );
    },
);

export default Input;
