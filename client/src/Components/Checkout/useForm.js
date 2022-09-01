import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductToBuy } from "../../Redux/Action";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import { posts } from "../../infoUser.js"; //User ficticio

export default function useForm(initialForm, validateForm, socket) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [oneProd, setOneProd] = useState(false);
  const [cupon, setCupon] = useState(0);
  const cupones = [
    "SoyHenry",
    "MZF5JKA7",
    "KASDJ17",
    "JAUVMI2",
    "KASIQP2",
    "891NJAD",
    "1S2NDGA",
  ];
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
    // console.log("hola entra aca?");
    // console.log(posts[0].id, posts[0].username)
    //Esto va a estar en checkout

    socket?.emit("newUser", posts[0].username, posts[0].id);

    if (!Object.entries(errores).length) {
      // dispatch(createProduct(form));
      setForm(initialForm);
      cookies.remove();

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
      const preference = await (
        await fetch("http://localhost:3001/Checkout", {
          method: "post",
          body: {
            id: 112,
          },
          // headers: {
          //   "Content-Type": "application/json",
          // },
        })
      ).json();

      var script = document.createElement("script");
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.type = "text/javascript";
      script.dataset.preferenceId = preference.preferenceId;
      script.value = "Realizar el pago";
      document.getElementById("page-content-btn").remove();
      document.querySelector("#page-content").appendChild(script);
      // document.querySelector("#page-content").innerHTML = "Realizar el pago";
    } catch {
      Swal.fire({
        icon: "error",
        title: "Algo salio mal",
        // text: "Tu codigo no existe, o paso su fecha de uso",
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
