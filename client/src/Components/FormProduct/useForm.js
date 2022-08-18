import { useState } from "react";
import { useDispatch } from "react-redux";

export default function useForm (initialForm, validateForm) {
    const dispatch = useDispatch();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

    }


    return {
        form,
        errors,
        handleOnChange,
        handleSubmit
    }
}