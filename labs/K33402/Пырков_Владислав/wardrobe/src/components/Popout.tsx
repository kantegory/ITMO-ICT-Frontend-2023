import { ReactNode } from "react";
import cl from "./styles.module.sass";

type PopoutProps = {
    children?: ReactNode | ReactNode[];
};
const Popout = ({ children }: PopoutProps) => {
    return <section className={cl.popout}>{children}</section>;
};

export default Popout;
