import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../Redux/Action";
import Cookies from "universal-cookie";

export default function useForm(initialForm, validateForm) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [validate, setValidate] = useState({});
  const [alert, setAlert] = useState();
  const [checkedInput, setCheckedInput] = useState(false);
  var cookies = new Cookies();
  var expiryDate = new Date(Date.now() + 60 * 24 * 3600000);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ProyectoFinalHenry");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dsnbvqwvs/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setForm({ ...form, image: file.secure_url });
  };

  const handleOnChange = (e) => {
    cookies.set(e.target.name, e.target.value, {
      path: "/",
      expires: expiryDate,
    });

    if (e.target.name === "category") {
      if (e.target.value === "calzado") {
        setForm({
          ...form,
          [e.target.name]: cookies.get(e.target.name),
          size: [],
        });
        const errores = validateForm(
          { ...form, [e.target.name]: cookies.get(e.target.name) },
          e.target.name,
          setValidate,
          setErrors
        );
        setErrors(errores);
      } else if (e.target.value !== "calzado") {
        setForm({
          ...form,
          [e.target.name]: cookies.get(e.target.name),
          size: [
            ...form.size.filter(
              (e) => e === "M" || e === "S" || e === "XS" || e === "L"
            ),
          ],
        });

        const errores = validateForm(
          { ...form, [e.target.name]: cookies.get(e.target.name) },
          e.target.name,
          setValidate,
          setErrors
        );
        setErrors(errores);
      }
    } else {
      setForm({
        ...form,
        [e.target.name]: cookies.get(e.target.name),
      });
      const errores = validateForm(
        { ...form, [e.target.name]: cookies.get(e.target.name) },
        e.target.name,
        setValidate,
        setErrors
      );
      setErrors(errores);
    }
  };

  const handleChecked = (ev) => {
    if (ev.target.checked) {
      setForm({
        ...form,
        size: [...form.size, ev.target.value],
      });

      const errores = validateForm(
        { ...form, size: [...form.size, ev.target.value] },
        ev.target.name,
        setValidate,
        setErrors
      );
      setErrors(errores);
    } else {
      setForm({
        ...form,
        size: form.size.filter((e) => e !== ev.target.value),
      });

      const errores = validateForm(
        { ...form, size: form.size.filter((e) => e !== ev.target.value) },
        ev.target.name,
        setValidate,
        setErrors
      );
      setErrors(errores);
    }
  };

  const handleOffer = (ev) => {
    if (ev.target.checked) {
      setForm({
        ...form,
        offer: true,
      });
      setCheckedInput(true);
    } else {
      setForm({
        ...form,
        offer: false,
        discount: "",
      });
      setCheckedInput(false);
    }
  };

  const handleDiscount = (e) => {
    if (e.target.checked) {
      setForm({ ...form, discount: e.target.value });
    }
    const errores = validateForm(
      { ...form, [e.target.name]: e.target.value },
      e.target.name,
      setValidate,
      setErrors
    );
    setErrors(errores);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errores = validateForm(
      form,
      "namebrandcategorypricestockimagesoldsizescoregenreoffer",
      setValidate,
      validate
    );
    setErrors(errores);

    if (!Object.entries(errores).length) {
      dispatch(createProduct(form));
      setAlert(false);
      setForm(initialForm);
      setValidate({});
      cookies.remove("name");
      cookies.remove("category");
      cookies.remove("brand");
      cookies.remove("price");
      cookies.remove("stock");
      cookies.remove("sold");
      cookies.remove("score");
      cookies.remove("genre");

      var options = document.querySelectorAll("#my_select");
      for (var i = 0, l = options.length; i < l; i++) {
        options[i].selectedIndex = 0;
      }
    } else {
      setAlert(true);
    }
  };

  return {
    form,
    setForm,
    errors,
    handleOnChange,
    handleSubmit,
    handleChecked,
    validate,
    setValidate,
    alert,
    setAlert,
    handleOffer,
    uploadImage,
    checkedInput,
    handleDiscount,
  };
}
