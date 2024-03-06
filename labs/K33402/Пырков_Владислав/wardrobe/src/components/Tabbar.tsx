import classNames from "classnames";
import cl from "./styles.module.sass";
import { redirect } from "react-router-dom";
import { Clothes, Profile } from "../assets";

const Tabbar = () => {
    return (
        <nav className={classNames(cl.tabbar, "light")}>
            <a href="/profile">
                <div className={cl.tab}>
                    <img src={Profile} />
                </div>
            </a>
            <a href="/shop">
                <div className={cl.tab}>
                    <img src={Clothes} />
                </div>
            </a>
        </nav>
    );
};

export default Tabbar;
