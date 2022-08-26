import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductToBuy } from "../../Redux/Action";


export default function useForm(initialForm, validateForm) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    });
    const errores = validateForm({ ...form, [e.target.name]: e.target.value }, e.target.name);
    setErrors(errores)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errores = validateForm(form, "namesurnamestreetAddresscodePostalphoneNumberemail");
    setErrors(errores);

    if (!Object.entries(errores).length) {
      // dispatch(createProduct(form));
      setForm(initialForm);

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