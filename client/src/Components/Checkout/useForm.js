import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductToBuy, updateUserDetail } from "../../Redux/Action";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import { posts } from "../../infoUser.js"; //User ficticio
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function useForm(initialForm, validateForm, socket) {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useAuth0();
  const userDetail = useSelector((state) => state.userDetail);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [oneProd, setOneProd] = useState(false);
  const [cupon, setCupon] = useState(["0", 0]);
  const [envio, setEnvio] = useState(["500", 0.5]);
  const [pagar, setPagar] = useState(false);

  const cupones = ["SoyHenry", "Alejo"];
  const cookies = new Cookies();
  var expiryDate = new Date(Date.now() + 100 * 24 * 3600000);

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

    if (e.target.name === "province") {
      if (e.target.value === "Ciudad Autonoma De Buenos Aires") {
        setEnvio(["500", 0.5]);
      } else if (e.target.value === "Buenos Aires") {
        setEnvio(["700", 0.7]);
      } else setEnvio(["1000", 1]);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errores = validateForm(
      form,
      "nameComprasurnameComprastreetAddresscodePostalphoneNumberemailCompra"
    );
    setErrors(errores);
    // socket?.emit("newUser", posts[0].username, posts[0].id);
    if (!isAuthenticated) {
      Swal.fire({
        icon: "warning",
        title: "Debes iniciar sesión para comprar!",
        background: "#111111",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#282626",
      });
      return;
    }

    if (userDetail.ban) {
      Swal.fire({
        icon: "warning",
        title: "Baneado",
        background: "#111111",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#282626",
      });
      return;
    }

    if (!Object.entries(errores).length) {
      setPagar(true);
      // dispatch(updateUserDetail());
      var options = document.querySelectorAll("#my_select");
      options[0].selectedIndex = 0;

      // socket?.emit("sendNotification", {
      //   //Cuando no haya errores enviara una alerta de que se realizo la compra.
      //   senderName: posts[0].username,
      //   recipientId: posts[0].id,
      //   type: 1, // 1 === Compra realizada
      // });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Debes completar el formulario correctamente!",
        background: "#111111",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#282626",
      });
    }
  };

  const handleCupon = (code) => {
    if (cupones.find((e) => e === code.value)) {
      if (code.value === "Alejo") {
        setCupon(["3000", 3]);
      } else setCupon(["1000", 1]);

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

  return {
    form,
    setForm,
    errors,
    cupon,
    oneProd,
    setErrors,
    handleOnChange,
    handleSubmit,
    handleRemoveCookies,
    handleCupon,
    pagar,
    setPagar,
    envio,
  };
}
