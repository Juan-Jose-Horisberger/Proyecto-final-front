import React, { useEffect, useState } from "react";
import axios from "axios";
const FORM_ID = "payment-form";

export default function BuyProducts({ data }) {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    axios
      .post("/products/comprar", data)
      .then((order) => {
        setPreferenceId(order.data);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return <form id={FORM_ID} method="GET" />;
}
