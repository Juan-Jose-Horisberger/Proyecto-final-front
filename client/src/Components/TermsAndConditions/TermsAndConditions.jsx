import React, { useEffect } from "react";
import styles from "./TermsAndConditions.module.css";
// import { FaTruck, FaTiktok, FaFacebookSquare } from "react-icons/fa";
// import {
//   BsShieldCheck,
//   BsCheckCircle,
//   BsFillTelephoneFill,
//   BsArrowUp,
// } from "react-icons/bs";
// import { GiPadlock } from "react-icons/gi";
// import { RiArrowRightSLine } from "react-icons/ri";
// import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.container_Inicio}`}>
        <div>
          <Link to="/">
            <span className={`${styles.span1}`}>Inicio</span>
          </Link>
          <span className={`${styles.span2}`}> / </span>
          <span className={`${styles.span5}`}>Terminos y condiciones</span>
        </div>
      </div>

      <div className={`${styles.contaerInfoAll}`}>
        <div className={`${styles.containerInfo}`}>
          <div className={`${styles.containerInfo1}`}>
            <p>
              El presente Política de Privacidad establece los términos en que
              GAED.JM usa y protege la información que es proporcionada por sus
              usuarios al momento de utilizar su sitio web. Esta compañía está
              comprometida con la seguridad de los datos de sus usuarios. Cuando
              le pedimos llenar los campos de información personal con la cual
              usted pueda ser identificado, lo hacemos asegurando que sólo se
              empleará de acuerdo con los términos de este documento. Sin
              embargo esta Política de Privacidad puede cambiar con el tiempo o
              ser actualizada por lo que le recomendamos y enfatizamos revisar
              continuamente esta página para asegurarse que está de acuerdo con
              dichos cambios.
            </p>
          </div>

          <div className={`${styles.containerInfo2}`}>
            <p>
              <b>Información que es recogida</b>
            </p>
            <p>
              Nuestro sitio web podrá recoger información personal por ejemplo:
              Nombre, información de contacto como su dirección de correo
              electrónica e información demográfica. Así mismo cuando sea
              necesario podrá ser requerida información específica para procesar
              algún pedido o realizar una entrega o facturación.
            </p>
          </div>

          <div className={`${styles.containerInfo3}`}>
            <p>
              <b>Uso de la información recogida</b>
            </p>
            <p>
              Nuestro sitio web emplea la información con el fin de proporcionar
              el mejor servicio posible, particularmente para mantener un
              registro de usuarios, de pedidos en caso que aplique, y mejorar
              nuestros productos y servicios. Es posible que sean enviados
              correos electrónicos periódicamente a través de nuestro sitio con
              ofertas especiales, nuevos productos y otra información
              publicitaria que consideremos relevante para usted o que pueda
              brindarle algún beneficio, estos correos electrónicos serán
              enviados a la dirección que usted proporcione y podrán ser
              cancelados en cualquier momento.
            </p>
            <p>
              GAED.JM está altamente comprometido para cumplir con el compromiso
              de mantener su información segura. Usamos los sistemas más
              avanzados y los actualizamos constantemente para asegurarnos que
              no exista ningún acceso no autorizado.
            </p>
          </div>

          <div className={`${styles.containerInfo4}`}>
            <p>
              <b>Cookies</b>
            </p>
            <p>
              Una cookie se refiere a un fichero que es enviado con la finalidad
              de solicitar permiso para almacenarse en su ordenador, al aceptar
              dicho fichero se crea y la cookie sirve entonces para tener
              información respecto al tráfico web, y también facilita las
              futuras real madrid cf noticias recurrente. Otra función que
              tienen las cookies es que con ellas las web pueden reconocerte
              individualmente y por tanto brindarte el mejor servicio
              personalizado de su web.
            </p>
            <p>
              Nuestro sitio web emplea las cookies para poder identificar las
              páginas que son visitadas y su frecuencia. Esta información es
              empleada únicamente para análisis estadístico y después la
              información se elimina de forma permanente. Usted puede eliminar
              las cookies en cualquier momento desde su ordenador. Sin embargo
              las cookies ayudan a proporcionar un mejor servicio de los sitios
              web, estás no dan acceso a información de su ordenador ni de
              usted, a menos de que usted así lo quiera y la proporcione
              directamente. Usted puede aceptar o negar el uso de cookies, sin
              embargo la mayoría de navegadores aceptan cookies automáticamente
              pues sirve para tener un mejor servicio web. También usted puede
              cambiar la configuración de su ordenador para declinar las
              cookies. Si se declinan es posible que no pueda utilizar algunos
              de nuestros servicios.
            </p>
          </div>

          <div className={`${styles.containerInfo5}`}>
            <p>
              <b>Enlaces a Terceros</b>
            </p>
            <p>
              Este sitio web pudiera contener enlaces a otros sitios que
              pudieran ser de su interés. Una vez que usted de clic en estos
              enlaces y abandone nuestra página, ya no tenemos control sobre al
              sitio al que es redirigido y por lo tanto no somos responsables de
              los términos o privacidad ni de la protección de sus datos en esos
              otros sitios terceros. Dichos sitios están sujetos a sus propias
              políticas de privacidad por lo cual es recomendable que los
              consulte para confirmar que usted está de acuerdo con estas.
            </p>
          </div>

          <div className={`${styles.containerInfo6}`}>
            <p>
              <b>Control de su información personal</b>
            </p>
            <p>
              En cualquier momento usted puede restringir la recopilación o el
              uso de la información personal que es proporcionada a nuestro
              sitio web. Cada vez que se le solicite rellenar un formulario,
              como el de alta de usuario, puede marcar o desmarcar la opción de
              recibir información por correo electrónico. En caso de que haya
              marcado la opción de recibir nuestro boletín o publicidad usted
              puede cancelarla en cualquier momento.
            </p>
            <p>
              Esta compañía no venderá, cederá ni distribuirá la información
              personal que es recopilada sin su consentimiento, salvo que sea
              requerido por un juez con un orden judicial.
            </p>
            <p>
              GAED.JM Se reserva el derecho de cambiar los términos de la
              presente Política de Privacidad en cualquier momento.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
