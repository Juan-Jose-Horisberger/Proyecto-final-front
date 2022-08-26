import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductToBuy } from "../../Redux/Action";
import Cookies from "universal-cookie"


export default function useForm(initialForm, validateForm) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const cookies = new Cookies();
  var expiryDate = new Date(Date.now() + (60 * 24 * 3600000));
 
  const handleOnChange = (e) => {
    cookies.set(e.target.name, e.target.value, {path: "/Checkout", expires: expiryDate})
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

    if (!Object.entries(errores).length) {
      // dispatch(createProduct(form));
      setForm(initialForm);
      cookies.remove()

      var options = document.querySelectorAll('#my_select');
        options[0].selectedIndex = 0;
    } 
  }

  const handleBuy = (id) => {
    if (id) {
      dispatch(getProductToBuy(id))
    } else {
      dispatch(getProductToBuy())
    }
  }

  return {
    form,
    setForm,
    errors,
    setErrors,
    handleOnChange,
    handleSubmit,
    handleBuy,
  }
}  