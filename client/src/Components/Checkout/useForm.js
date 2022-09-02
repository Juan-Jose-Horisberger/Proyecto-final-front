import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductToBuy } from "../../Redux/Action";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import { posts } from "../../infoUser.js"; //User ficticio
import axios from "axios";

export default function useForm(initialForm, validateForm, socket, user) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [oneProd, setOneProd] = useState(false);
  const [cupon, setCupon] = useState(0);
  const [preferenceId, setPreferenceId] = useState(null);

  const cupones = ["SoyHenry"];
  const cookies = new Cookies();
  var expiryDate = new Date(Date.now() + 60 * 24 * 3600000);

  const handleOnChange = (e) => {
    cookies.set(e.target.name, e.target.value, {
      path: "/",
      expires: expiryDate,
    });
    setForm({
      ...form,
      [e.target.name]: cookies.get(e.target.name),
    });
    const errores = validateForm(
      { ...form, [e.target.name]: cookies.get(e.target.name) },
      e.target.name
    );
    setErrors(errores);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errores = validateForm(
      form,
      "nameComprasurnameComprastreetAddresscodePostalphoneNumberemailCompra"
    );
    setErrors(errores);

    socket?.emit("newUser", posts[0].username, posts[0].id);

    if (!Object.entries(errores).length) {
      var options = document.querySelectorAll("#my_select");
      options[0].selectedIndex = 0;

      socket?.emit("sendNotification", {
        //Cuando no haya errores enviara una alerta de que se realizo la compra.
        senderName: posts[0].username,
        recipientId: posts[0].id,
        type: 1, // 1 === Compra realizada
      });
    }
  };

  const handleBuy = (id) => {
    if (id) {
      dispatch(getProductToBuy(id));
      setOneProd(true);
    } else setOneProd(false);
  };

  const handleCupon = (code) => {
    if (cupones.find((e) => e === code.value)) {
      setCupon("1");
      Swal.fire({
        icon: "success",
        title: "Codigo de cupón valido",
        text: "Se te hara el descuento correspondiente",
        background: "#000",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#282626",
      });
    } else
      Swal.fire({
        icon: "error",
        title: "Codigo de cupón invalido",
        text: "Tu codigo no existe, o paso su fecha de uso",
        background: "#000",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#282626",
      });

    setForm({ ...form, cupon: "" });
  };

  const handleRemoveCookies = (data) => {
    data && data.map((e) => cookies.remove(e[1].id));
  };

  const pay = async (data) => {
    try {
      // let body;
      // if (user) {
      //   body = {
      //     usuario: {
      //       name: user.username || "alex",
      //       surname: user.surname || "jonatan",
      //       email: user.email,
      //     },
      //     data: data,
      //   };
      // }

      // const asd = axios
      //   .post(
      //     "https://proyecto-final-01.herokuapp.com/products/comprar/1",
      //     data
      //   )
      //   .then((order) => {
      //     setPreferenceId(order.data);
      // });
      const preference = await (
        await fetch(
          "https://proyecto-final-01.herokuapp.com/products/comprar/",
          {
            method: "post",
            body: JSON.stringify(data),
            // usuario: JSON.stringify(usuario),

            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      ).json();

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preference.preferenceId);
      document.getElementById("page-content-btn").remove();
      document.querySelector("#page-content").appendChild(script);
      // document.querySelector("#page-content").innerHTML = "Realizar el pago";
    } catch {
      Swal.fire({
        icon: "error",
        title: "Algo salio mal",
        background: "#000",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#282626",
      });
    }
  };

  return {
    form,
    setForm,
    errors,
    cupon,
    oneProd,
    setErrors,
    handleOnChange,
    handleSubmit,
    handleBuy,
    handleRemoveCookies,
    handleCupon,
    pay,
  };
}
