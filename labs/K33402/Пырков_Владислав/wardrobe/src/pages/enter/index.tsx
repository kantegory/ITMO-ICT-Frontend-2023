import { useEffect } from "react";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";
import { Input, A, Page, Popout } from "../../components";
import cl from "./styles.module.sass";

type EnterPageProps = {
    theme: string;
    setShowTabs: (show: boolean) => void;
};

const EnterPage = ({ theme, setShowTabs }: EnterPageProps) => {
    useEffect(() => {
        setShowTabs(false);
        return () => setShowTabs(true);
    }, []);
    return (
        <Page theme={theme}>
            <Popout>
                <img src={Logo} />
                <Input type="text" placeholder="Логин" />
                <Input type="password" placeholder="Пароль" />
                <Link to="/shop">
                    <button className={cl.button}>Вход</button>
                </Link>
                <A href="/registration">регистрация</A>
            </Popout>
        </Page>
    );
};

export default EnterPage;
