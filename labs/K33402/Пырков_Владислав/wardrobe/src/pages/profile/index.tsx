import { Theme } from "../../assets";
import { Page } from "../../components";
import cl from "./styles.module.sass";

type ProfilePageProps = {
    theme: string;
    setTheme: (theme: string) => void;
};

const ProfilePage = ({ theme, setTheme }: ProfilePageProps) => {
    const handleChangeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        console.log(newTheme);
    };
    return (
        <Page theme={theme}>
            <section className={cl.wrapper}>
                <h1>Владислав Пырков</h1>
                <button onClick={() => handleChangeTheme()}>
                    <img src={Theme} />
                </button>
            </section>
        </Page>
    );
};

export default ProfilePage;
