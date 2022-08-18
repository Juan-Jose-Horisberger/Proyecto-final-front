import { useState } from "react";
import { useDispatch } from "react-redux";

export default function useForm(initialForm, validateForm) {
    const dispatch = useDispatch();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
        if (e.target.name === "category") {
            if (e.target.value === "calzado") {
                setForm({
                    ...form, [e.target.name]: e.target.value, size: []
                })
            } else if (e.target.value !== "calzado") {
                setForm({
                    ...form, [e.target.name]: e.target.value, size: [...form.size.filter(e => e === "M" || e === "S" || e === "XS" || e === "L")]
                })
            };
        } else {
            setForm({
                ...form, [e.target.name]: e.target.value
            })
        }
    };

    const handleChecked = (ev) => {
        if (ev.target.checked) {
            setForm({
                ...form, size: [...form.size, ev.target.name]
            })
        } else setForm({
            ...form, size: form.size.filter(e => e !== ev.target.name)
        })
    };

    const handleSubmit = (e) => {

    }


    return {
        form,
        setForm,
        errors,
        handleOnChange,
        handleSubmit,
        handleChecked
    }
}