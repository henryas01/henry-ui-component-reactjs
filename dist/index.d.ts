import { JSX } from 'react/jsx-runtime';

/** Primary UI component for user interaction */
export declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => JSX.Element;

export declare interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: "small" | "medium" | "large";
    /** Button contents */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
}

export declare const Header: ({ user, onLogin, onLogout, onCreateAccount, }: HeaderProps) => JSX.Element;

export declare interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}

declare interface Option_2 {
    value: string;
    label: string;
    [key: string]: any;
}

export declare const Select: <T extends string | string[]>({ id, name, options, value, onChange, multiple, withSearch, searchwithfilter, usePortal, outlined, placeholder, renderOption, label, }: SelectProps<T>) => JSX.Element;

export declare interface SelectProps<T extends string | string[]> extends Omit<React.HTMLProps<HTMLInputElement>, "value" | "onChange"> {
    id: string;
    name?: string;
    options: Option_2[];
    value?: T;
    onChange: (value: T) => void;
    multiple?: boolean;
    withSearch?: boolean;
    searchwithfilter?: boolean;
    usePortal?: boolean;
    outlined?: boolean;
    placeholder?: string;
    renderOption?: (option: Option_2) => React.ReactNode;
    label?: string;
}

declare type User = {
    name: string;
};

export { }
