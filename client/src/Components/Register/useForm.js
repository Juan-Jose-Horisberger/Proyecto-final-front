import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import { posts } from "../../infoUser.js";

export default function useForm(initialForm, validateForm, socket, user) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

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
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errores = validateForm(
      form,
      "nameComprasurnameageCompraComprastreetAddresscodePostalphoneNumberemailCompra"
    );
    setErrors(errores);

    socket?.emit("newUser", posts[0].username, posts[0].id);

    if (!Object.entries(errores).length) {
      var options = document.querySelectorAll("#my_select");
      options[0].selectedIndex = 0;
    } else {
      Swal.fire({
        icon: "error",
        iconColor: "red",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Entendido",
        html:
          `<h2 style="color: red;">ALGO SALIO MAL...</h2>` +
          `<b style="color: azure;">
						Completar los datos de forma correspondiente.
					</b>`,
        background: "#000",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
      });
    }
  };

  return {
    form,
    setForm,
    errors,
    setErrors,
    handleOnChange,
    handleSubmit,
  };
}
