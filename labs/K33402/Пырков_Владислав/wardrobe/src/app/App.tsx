import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EnterPage, ProfilePage, RegistrationPage, ShopPage } from "../pages";

import "../styles/normalize.sass";
import "../styles/app.sass";
import { Tabbar } from "../components";
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState("light");
    const [showTabs, setShowTabs] = useState(true);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <EnterPage theme={theme} setShowTabs={setShowTabs} />,
        },
        {
            path: "/registration",
            element: (
                <RegistrationPage theme={theme} setShowTabs={setShowTabs} />
            ),
        },
        {
            path: "/shop",
            element: <ShopPage theme={theme} />,
        },
        {
            path: "/profile",
            element: <ProfilePage theme={theme} setTheme={setTheme} />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
            {showTabs && <Tabbar />}
        </>
    );
}

export default App;
