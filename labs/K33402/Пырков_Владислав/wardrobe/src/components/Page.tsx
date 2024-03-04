import { ReactNode } from "react";
import cl from "./styles.module.sass";
import classNames from "classnames";
type PageProps = {
    children?: ReactNode | ReactNode[];
};
const Page = ({ children }: PageProps) => {
    return <main className={classNames(cl.page, "dark")}>{children}</main>;
};

export default Page;
