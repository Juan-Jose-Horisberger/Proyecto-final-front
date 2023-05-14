import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
const FORM_ID = 'payment-form';

export default function BuyProduct({user}) {
    let usuario
    if(user){
        usuario = {
          name: user.username || "alex",
          surname: user.surname || "jonatan",
          email: user.email,
        };
    }
  const { id } = useParams(); // id de producto
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    axios.post('https://proyecto-final-back-ifyd.onrender.com/products/comprar/'+id, usuario).then((order) => {
      setPreferenceId(order.data);
    });
  }, [id]);
  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
      script.setAttribute('data-preference-id', preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return (
    <form id={FORM_ID} method="GET" />
  );
}