import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductToBuy } from "../../Redux/Action";
import Cookies from "universal-cookie"
import { posts } from "../../infoUser.js"; //User ficticio


export default function useForm(initialForm, validateForm, socket) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const cookies = new Cookies();
  var expiryDate = new Date(Date.now() + (60 * 24 * 3600000));

  const handleOnChange = (e) => {
    cookies.set(e.target.name, e.target.value, { path: "/Checkout", expires: expiryDate })
    setForm({
      ...form, [e.target.name]: cookies.get(e.target.name)
    });
    const errores = validateForm({ ...form, [e.target.name]: cookies.get(e.target.name) }, e.target.name);
    setErrors(errores)
    console.log(cookies.get(e.target.name))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errores = validateForm(form, "namesurnamestreetAddresscodePostalphoneNumberemail");
    setErrors(errores);
    // console.log("hola entra aca?");
    // console.log(posts[0].id, posts[0].username)
    //Esto va a estar en checkout

    socket?.emit("newUser", posts[0].username, posts[0].id);

    if (!Object.entries(errores).length) {
      // dispatch(createProduct(form));
      setForm(initialForm);
      cookies.remove()

      var options = document.querySelectorAll('#my_select');
      options[0].selectedIndex = 0;

      socket?.emit("sendNotification", { //Cuando no haya errores enviara una alerta de que se realizo la compra.
        senderName: posts[0].username,
        recipientId: posts[0].id,
        type: 1 // 1 === Compra realizada
      });
    }
  }

  const handleBuy = (id) => {
    if (id) {
      dispatch(getProductToBuy(id))
      console.log(id)
    } else {
      dispatch(getProductToBuy())
    }
  };

  const handleRemoveCookies = (data) => {
    data && data.map(e => cookies.remove(e[1].id))
  }

  return {
    form,
    setForm,
    errors,
    setErrors,
    handleOnChange,
    handleSubmit,
    handleBuy,
    handleRemoveCookies,
  }
}  