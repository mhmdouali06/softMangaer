import React from "react";
import google from "../../../assets/images/icons/Google.png";
function LeftSectionHome() {
  return (
    <div className="left_div_home container ">
      <h2>Votre Business, Votre Empire: Gérez-le Efficacement</h2>
      <p>
        Créez de belles factures, acceptez les paiements en ligne et simplifiez
        la comptabilité, le tout en un seul endroit, grâce à la suite d'outils
        financiers de Smart Manager.
      </p>
      <form>
        <input type="email" className="form-control mb-3" />
        <input type="password" className="form-control mb-3" />
        <button className="btn first_button me-3">Créez votre compte</button>
        <button className="btn second_button ">
          Ou inscrivez-vous avec :{" "}
          <i>
            <img src={google} width={15} alt="" />
          </i>{" "}
        </button>
      </form>
    </div>
  );
}

export default LeftSectionHome;
