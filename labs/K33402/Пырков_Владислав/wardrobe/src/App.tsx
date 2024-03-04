import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EnterPage from "./pages/enter";
import { CartPage, ProfilePage, RegistrationPage, ShopPage } from "./pages";

import "./styles/normalize.sass";
import "./styles/app.sass";

const router = createBrowserRouter([
    {
        path: "/",
        element: <EnterPage />,
    },
    {
        path: "/registration",
        element: <RegistrationPage />,
    },
    {
        path: "/shop",
        element: <ShopPage />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
