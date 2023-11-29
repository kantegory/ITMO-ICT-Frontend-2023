import {useSelector} from "react-redux";

function useAuth(){

    const {id, email, token} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        id,
        email,
        token
    }
}

export default useAuth()