import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct, EditProduct } from "../../Redux/Action";

export default function useForm(initialForm, validateForm, id) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [validate, setValidate] = useState({});
  const [alert, setAlert] = useState();
  const [checkedInput, setCheckedInput] = useState(false);

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
    if (e.target.name === "category") {
      if (e.target.value === "calzado") {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
          size: [],
        });
        const errores = validateForm(
          { ...form, [e.target.name]: e.target.value },
          e.target.name,
          setValidate,
          validate,
          setErrors
        );
        setErrors(errores);
      } else if (e.target.value !== "calzado") {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
          size: [
            ...form.size.filter(
              (e) => e === "M" || e === "S" || e === "XS" || e === "L"
            ),
          ],
        });

        const errores = validateForm(
          { ...form, [e.target.name]: e.target.value },
          e.target.name,
          setValidate,
          validate,
          setErrors
        );
        setErrors(errores);
      }
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
      const errores = validateForm(
        { ...form, [e.target.name]: e.target.value },
        e.target.name,
        setValidate,
        validate,
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
        validate,
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
        validate,
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
      validate,
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
      dispatch(EditProduct(id, form));
      setAlert(false);
      setForm(initialForm);
      setValidate({});

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
