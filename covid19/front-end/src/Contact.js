import React from 'react';
// import useState from 'react';
import './Contact.css';
import contactImg from "./img/logo.png"
import axios from "axios"

// const [data , setData] = useState([]);

// function getdata() {
//     axios("http://localhost:4000/contact")
//     .then((result)=> {
//         setData(result.data)
//     })
// }

function save(){
    axios
        .post(`http://localhost:4000/contact`,{
            sujet:document.getElementById('sujet').value,
            discription:document.getElementById('message').value,
            nom:document.getElementById('nom').value,
            tel:document.getElementById('tel').value,
            email:document.getElementById('email').value,
            reponse:"envoyer"
        })
        .then(res=>{
            // getdata()
            // handleClose()
        })
        .catch(err=>{
            console.log(err)
        })
}



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
                           <input type="text" id="sujet" className="contact name" placeholder="Sujet *" />
                           <textarea name="message" id="message" className="contact name"  placeholder="Discription" ></textarea>
                           <input type="text" id="nom" className="contact email" placeholder="Nom *"  />
                           <input type="text" id="tel" className="contact subject" placeholder="Tel" />
                           <input type="text" id="email" className="contact subject" placeholder="Email" />
                           
                           <button className="btn contact pointer" id="btncontact"  onClick={save}>Submit</button>
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
