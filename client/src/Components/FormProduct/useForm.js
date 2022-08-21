import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../Redux/Action";

export default function useForm(initialForm, validateForm) {
    const dispatch = useDispatch();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [button, setButton] = useState("URL");
    // const [buttonCreate, setButtonCreate] = useState(false);

    const handleOnChange = (e) => {

        if (e.target.name === "category") {
            if (e.target.value === "calzado") {
                setForm({
                    ...form, [e.target.name]: e.target.value, size: []
                });
                const errores = validateForm({ ...form, [e.target.name]: e.target.value }, e.target.name);
                setErrors(errores)

            } else if (e.target.value !== "calzado") {
                setForm({
                    ...form, [e.target.name]: e.target.value, size: [...form.size.filter(e => e === "M" || e === "S" || e === "XS" || e === "L")]
                });

                const errores = validateForm({ ...form, [e.target.name]: e.target.value }, e.target.name);
                setErrors(errores)
            };
        } else {
            setForm({
                ...form, [e.target.name]: e.target.value
            });
            const errores = validateForm({ ...form, [e.target.name]: e.target.value }, e.target.name);
            setErrors(errores)
        }
    };

    const handleChecked = (ev) => {

        if (ev.target.checked) {
            setForm({
                ...form, size: [...form.size, ev.target.value]
            });

            const errores = validateForm({ ...form, size: [...form.size, ev.target.value] }, ev.target.name);
            setErrors(errores);

        } else {
            setForm({
                ...form, size: form.size.filter(e => e !== ev.target.value)
            });

            const errores = validateForm({ ...form, size: form.size.filter(e => e !== ev.target.value) }, ev.target.name);
            setErrors(errores);
        }
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const errores = validateForm(form, "namebrandcategorypricestockimagesoldsizescoregenre");
        setErrors(errores);

        if(!Object.entries(errores).length) {
            dispatch(createProduct(form))
            alert("se creo")
        }
    }

    const handleOnButton = (e) => {
        setForm({...form, image: ""})
        if (button === "URL") {
            setButton("IMG")
        } else setButton("URL")
    }


    return {
        form,
        setForm,
        errors,
        button,
        handleOnChange,
        handleSubmit,
        handleChecked,
        handleOnButton,
    }
}