import React from "react";
import Inputs from "../layouts/Inputs";

function ContactForm() {
  return (
    <div className="contact-form container ">
      <h2 className="align-self-start mb-5">Contactez-nous</h2>
      <div className="d-flex flex-column gap-5">
        <Inputs type="name" name="name" placeholder="Nom & Prenom" />
        <Inputs type="email" name="email" placeholder="E-mail" />
        <Inputs type="phone" name="phone" placeholder="Numéro du téléphone" />
        <Inputs type="text" name="message" placeholder="Votre message" />
        <button type="submit" className="btn sub">
          Envoyer
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
