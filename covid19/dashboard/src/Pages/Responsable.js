import React, { useState, useEffect } from 'react';
import { IoEllipseSharp } from "react-icons/io5";
import Stats from '../Components/Stats';
import '../Css/Style.css'
import axios from "axios"


export default function Home() {

    const [Responsables , setresponsables] = useState([]);
    const [api, setApi]= useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nom, setNom] = useState('')
    const [region, setRegion] = useState('')
    useState(()=>{
        getData();
    }, [])

    function getData(){
        axios
            .get('http://localhost:4000/api/v1/Responsable')
            .then(res=>(
                setresponsables(res.data)
            ))
            .catch(err=>console.log(err))
            
    }

  
   
    return <div className="px-lg-4 px-xl-5 container-fluid">
                    <div className="row">
                        <div className="mb-4 col-xl-3 col-md-6">
                            
                                    <h3>Responsable</h3>
                                    <p>{countvaccins}</p>
                            </div>
                        </div>

                        <Grid className={container} >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <VerifiedUserIcon style={{fontSize:50 ,color:"red" ,marginBottom:10}} />
                    <h2>Login In</h2>
                </Grid>
                <TextField 
                    label='Nom' 
                    placeholder='Enter le nom' 
                    onChange={(e)=>{setNom(e.target.value)}}      
                    fullWidth 
                    required/>

                 <TextField 
                    label='Email' 
                    placeholder='Enter email' 
                    onChange={(e)=>{setEmail(e.target.value)}}      
                    fullWidth 
                    required/>
                <TextField 
                    label='Password' 
                    placeholder='Enter le password' 
                    onChange={(e)=>{setPassword(e.target.value)}}      
                    type='password' 
                    fullWidth 
                    required/>

                    <TextField 
                    label='Region' 
                    placeholder='Enter le region' 
                    onChange={(e)=>{setRegion(e.target.value)}}      
                    fullWidth 
                    required/>
                <Button type='submit' onClick={(e)=>login()} color='primary' variant="contained" style={btnstyle} fullWidth>Ajouter</Button>
             
            </Paper>
        </Grid>
                       
        </div>
}

