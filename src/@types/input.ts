import {
    type ComponentType,
    type InputHTMLAttributes,
} from "react";

type IconProps = {
    size?: number;
    className?: string;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    icon?: ComponentType<IconProps>;
};
