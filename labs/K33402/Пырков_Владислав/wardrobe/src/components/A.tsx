import { ReactNode } from "react";
import cl from "./styles.module.sass";
type LinkProps = {
    children: ReactNode | ReactNode[];
    href: string;
};

const A = ({ children, href }: LinkProps) => {
    return (
        <p className={cl.link}>
            <a href={href}>{children}</a>
        </p>
    );
};

export default A;
