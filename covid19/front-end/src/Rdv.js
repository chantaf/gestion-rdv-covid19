import React from "react";
import "./Rdv.css";

function Rdv() {
  return (
    <div className="service component__space" id="Rdv">

      <div className="heading">
        <h1 className="heading">Rendez-Vous</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>

      <div className="container">
        <div className="row">
        <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Vaccin Covid 19.</h1>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Prenom *" />
                           <input type="text" className="contact email" placeholder="Nom *" />
                           <input type="text" className="contact subject" placeholder="Tel" />
                           <input type="text" className="contact subject" placeholder="Email" />
                           
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
        
        </div>
      </div>
    </div>
  );
}

export default Rdv;
