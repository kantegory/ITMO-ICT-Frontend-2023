import { InputHTMLAttributes, ReactNode } from "react";
import cl from "./styles.module.sass";
interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    children: ReactNode | ReactNode[];
}

const Select = ({ children, ...props }: SelectProps) => {
    return (
        <select {...props} className={cl.select}>
            {children}
        </select>
    );
};

export default Select;
