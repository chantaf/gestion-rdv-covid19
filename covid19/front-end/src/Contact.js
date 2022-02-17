import React from 'react';
import './Contact.css';
import contactImg from "./img/logo.png"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Nous.</h1>
                            <p className="hire__text white">Pour Contact Nous :</p>
                           <p className="hire__text white"><strong>+212 600 00 00 00</strong> or email <strong>covid19@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Sujet *" />
                           <textarea name="message" id="message" placeholder="Discription"></textarea>
                           <input type="text" className="contact email" placeholder="Nom *" />
                           <input type="text" className="contact subject" placeholder="Tel" />
                           <input type="text" className="contact subject" placeholder="Email" />
                           
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
