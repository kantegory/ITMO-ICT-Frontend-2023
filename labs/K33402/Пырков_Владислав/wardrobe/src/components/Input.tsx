import { InputHTMLAttributes } from "react";
import cl from "./styles.module.sass";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
    return <input {...props} className={cl.input}></input>;
};

export default Input;
