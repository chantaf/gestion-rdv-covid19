import React, { useState, useEffect } from 'react';
import { IoEllipseSharp } from "react-icons/io5";
import Stats from '../Components/Stats';
import '../Css/Style.css'
import axios from "axios"


export default function Home() {

    const [api, setApi]= useState('')
    useState(()=>{
        getData();
    }, [])

    function getData(){
        axios
            .get('http://localhost:4000/api/v1/Patien')
            .then(res=>(
                setresponsables(res.data)
            ))

            .catch(err=>console.log(err))
            
    }

  
   
    return <div className="px-lg-4 px-xl-5 container-fluid">
                    <div className="row">
                        <div className="mb-4 col-xl-3 col-md-6">
                            
                                    <h3>Patien</h3>
                                    <p>{countvaccins}</p>
                            </div>
                        </div>

                        <Grid className={container} >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <VerifiedUserIcon style={{fontSize:50 ,color:"red" ,marginBottom:10}} />
                    <h2>Patien vacciner ou non vacciner</h2>
                </Grid>
                <TextField 
                    label='Nom' 
                    onChange={(e)=>{setNom(e.target.value)}}      
                    fullWidth 
                    required/>

                <TextField 
                    label='Prenom' 
                    onChange={(e)=>{setNom(e.target.value)}}      
                    fullWidth 
                    required/>

                 <TextField 
                    label='Email' 
                    onChange={(e)=>{setEmail(e.target.value)}}      
                    fullWidth 
                    required/>
               

                    <TextField 
                    label='Region' 
                    onChange={(e)=>{setRegion(e.target.value)}}      
                    fullWidth 
                    required/>

<TextField 
                    label='Etat' 
                    onChange={(e)=>{setEtat(e.target.value)}}      
                    fullWidth 
                    required/>

                <Button type='submit' onClick={(e)=>envoyer()} color='primary' variant="contained" style={btnstyle} fullWidth>Envoyer Etat</Button>
             
            </Paper>
        </Grid>
                       
        </div>
}

