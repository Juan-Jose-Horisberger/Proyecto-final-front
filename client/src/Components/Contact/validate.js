export function validate(input, nameInput, error, setError) {
  // let error = {}
  let regEx_Email = // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if (nameInput.includes("name")) {
    if (!input.user_name) {
      // error.user_name = "Por favor ingrese su nombre."
      setError({
        ...error,
        user_name: "Por favor ingrese su nombre.",
      });
      // error.user_name = "Por favor ingrese su nombre.";
    } else if (!/(?=^.{5,100}$)/i.test(input.user_name)) {
      //Min 5 max 100
      // error.user_name = "El nombre debe contener como minimo 5 caracteres.";
      setError({
        ...error,
        user_name: "El nombre debe contener como minimo 5 caracteres.",
      });
      if (!/^[A-Z ]+$/i.test(input.user_name)) {
        // Y validamos que de esos 5 caracteres, no sean numeros, simbolos..
        // error.user_name = 'No se aceptan números, símbolos o caracteres especiales.';
        setError({
          ...error,
          user_name: "No se aceptan números, símbolos o caracteres especiales.",
        });
      }
    } else if (!/^[A-Z ]+$/i.test(input.user_name)) {
      //No acepta Simbolos
      // error.user_name = 'No se aceptan números, símbolos o caracteres especiales.';
      setError({
        ...error,
        user_name: "No se aceptan números, símbolos o caracteres especiales.",
      });
    } else {
      setError({
        ...error,
        user_name: "",
      });
    }
  }

  if (nameInput.includes("email")) {
    if (!input.user_email) {
      // error.user_email = "Por favor ingrese su email.";
      setError({
        ...error,
        user_email: "Su asunto debe contener como minimo 5 caracteres.",
      });
    } else if (!regEx_Email.test(input.user_email)) {
      // error.user_email = "Email ingresado, no valido.";
      setError({
        ...error,
        user_email: "Email ingresado, no valido.",
      });
    } else {
      setError({
        ...error,
        user_email: "",
      });
    }
  }

  if (nameInput.includes("affair")) {
    if (!input.user_affair) {
      // error.user_affair = "Por favor ingrese un asunto.";
      setError({
        ...error,
        user_affair: "Por favor ingrese un asunto.",
      });
    } else if (!/(?=^.{5,100}$)/i.test(input.user_affair)) {
      //Min 5 max 100
      // error.user_affair = "Su asunto debe contener como minimo 5 caracteres.";
      setError({
        ...error,
        user_affair: "Su asunto debe contener como minimo 5 caracteres.",
      });
    } else {
      setError({
        ...error,
        user_affair: "",
      });
    }
  }

  if (nameInput.includes("message")) {
    if (!input.user_message) {
      // error.user_message = "Por favor ingrese un mensaje";
      setError({
        ...error,
        user_message: "Por favor ingrese un mensaje.",
      });
    } else if (!/(?=^.{15,255}$)/i.test(input.user_message)) {
      //Min 15 max 100
      // error.user_message = "El mensaje es muy corto";
      setError({
        ...error,
        user_message: "El mensaje es muy corto.",
      });
    } else {
      setError({
        ...error,
        user_message: "",
      });
    }
  }

  return error;
}
