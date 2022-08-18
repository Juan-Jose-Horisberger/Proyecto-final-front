import { useState } from "react";
import { useDispatch } from "react-redux";

export default function useForm (initialForm, validateForm) {
    dispatch = useDispatch();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    handleOnChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {

    }


    return {
        form,
        errors,
        handleOnChange,
        handleSubmit
    }
}