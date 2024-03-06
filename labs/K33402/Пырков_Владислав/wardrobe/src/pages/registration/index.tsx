import { useEffect } from "react";
import { Input, A, Page, Popout } from "../../components";
import cl from "./styles.module.sass";
import { Logo } from "../../assets";
import { Link, redirect } from "react-router-dom";

type RegistrationPageProps = {
    theme: string;
    setShowTabs: (show: boolean) => void;
};

const RegistrationPage = ({ theme, setShowTabs }: RegistrationPageProps) => {
    useEffect(() => {
        setShowTabs(false);
        return () => setShowTabs(true);
    }, []);
    return (
        <Page theme={theme}>
            <Popout>
                <img src={Logo} />
                <Input placeholder="Имя пользователя" />
                <Input placeholder="Логин" />
                <Input placeholder="Пароль" />
                <Link to="/shop">
                    <button className={cl.button}>Готово</button>
                </Link>
                <A href="/">Назад</A>
            </Popout>
        </Page>
    );
};

export default RegistrationPage;
function setShowTabs(arg0: boolean) {
    throw new Error("Function not implemented.");
}
