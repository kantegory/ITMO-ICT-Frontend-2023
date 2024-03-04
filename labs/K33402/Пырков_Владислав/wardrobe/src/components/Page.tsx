import { ReactNode } from "react";
import cl from "./styles.module.sass";

type PageProps = {
    children?: ReactNode | ReactNode[];
};
const Page = ({ children }: PageProps) => {
    return <main className={cl.page}>{children}</main>;
};

export default Page;
