import { ReactNode } from "react";
import cl from "./styles.module.sass";
import classNames from "classnames";
type PageProps = {
    children?: ReactNode | ReactNode[];
    theme: string;
};
const Page = ({ children, theme }: PageProps) => {
    return <main className={classNames(cl.page, theme)}>{children}</main>;
};

export default Page;
