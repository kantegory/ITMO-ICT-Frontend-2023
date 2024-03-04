import { ReactNode } from "react";

type PopoutProps = {
    children?: ReactNode | ReactNode[];
};
const Popout = ({ children }: PopoutProps) => {
    return <section>{children}</section>;
};

export default Popout;
