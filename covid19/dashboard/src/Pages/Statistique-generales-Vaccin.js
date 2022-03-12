import React, { useState, useEffect } from 'react';
import { IoEllipseSharp } from "react-icons/io5";
import Stats from '../Components/Stats';
import '../Css/Style.css'
import axios from "axios"


export default function Home() {

    const [Responsables , setresponsables] = useState([]);

    useState(()=>{
        getData();
    }, [])

    function getData(){
        axios
            .get('http://localhost:4000/api/v1/Vaccin')
            .then(res=>(
                setresponsables(res.data)
            ))
            .catch(err=>console.log(err))
            
    }

  
    let countvaccins =Vaccins.length;
    let countMaladie =Maladies.length;
    let countVaccin1 =Vaccins1.length;
    let countVaccin2 =Vaccins2.length;
    let countVaccin3 =Vaccins3.length;
    return <div className="px-lg-4 px-xl-5 container-fluid">
                <section className="mb-3 mb-lg-5">
                    <div className="row">
                        <div className="mb-4 col-xl-3 col-md-6">
                            <div className="commande">
                                <div className="ellipse1" >
                                    <IoEllipseSharp />
                                </div>
                                <div className="descCommande">
                                    <h3>Vaccin</h3>
                                    <p>{countvaccins}</p>
                                </div>
                                <div className="ellipse2" >
                                    <IoEllipseSharp />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-xl-3 col-md-6">
                            <div className="commande">
                                <div className="ellipse1" >
                                    <IoEllipseSharp  color="blue"/>
                                </div>
                                <div className="descCommande">
                                    <h3>Maladie</h3>
                                    <p>{countMaladie}</p>
                                </div>
                                <div className="ellipse2" >
                                    <IoEllipseSharp color="blue" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-xl-3 col-md-6">
                            <div className="commande">
                                <div className="ellipse1" >
                                    <IoEllipseSharp color="#004040" />
                                </div>
                                <div className="descCommande">
                                    <h3>Vaccin1</h3>
                                    <p>{countVaccin1}</p>
                                </div>
                                <div className="ellipse2" >
                                    <IoEllipseSharp color="#004040" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-xl-3 col-md-6">
                            <div className="commande">
                                <div className="ellipse1" >
                                    <IoEllipseSharp color="red" />
                                </div>
                                <div className="descCommande">
                                    <h3>Vaccin2</h3>
                                    <p>{countVaccin2}</p>
                                </div>
                                <div className="ellipse2" >
                                    <IoEllipseSharp color="red" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 col-xl-3 col-md-6">
                            <div className="commande">
                                <div className="ellipse1" >
                                    <IoEllipseSharp color="#004040" />
                                </div>
                                <div className="descCommande">
                                    <h3>Vaccin3</h3>
                                    <p>{countVaccin3}</p>
                                </div>
                                <div className="ellipse2" >
                                    <IoEllipseSharp color="#004040" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-4 mb-lg-5">
                    <h2 class="section-heading section-heading-ms mb-4 mb-lg-5">Statistique 💰</h2>
                    <Stats />
                </section>
        </div>
}

