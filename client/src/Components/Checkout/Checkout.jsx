import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../Redux/Action";

export default function Checkout ({socket}) {

    const dispatch = useDispatch();
    const user = useSelector(state => state.users);

    function handleOnClick(){
        dispatch(getUserById())
    }

    useEffect(() => {
        socket?.emit("newUser", user.username) //Le enviamos un evento, que seria solo un nombre
        socket?.emit("sendNotification", {
            userIdentifier: user.userId,
            username: user.username, //Lo unico que le deberia pasar es esto
        })
        console.log(user)
    }, [user])

    return (
        <div>
            <h2>Checkout</h2>
            <button onClick={() => handleOnClick()}>Comprar</button>
        </div>
    )
}