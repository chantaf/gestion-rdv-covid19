import React, { useState, useEffect } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


export default function Login() {
    const [api, setApi]= useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookie] = useCookies(['user']);


    useEffect(() => {
      if(window.location.pathname === "/Responsable") {
            setApi("http://localhost:4000/api/v1/AuthResponsable")
        }
    }, [])
    
    function login(){
        axios
            .post(api,{
                Email:email,
                Password:password
            })
            .then(res=>{
                setCookie('token', res);
                window.location='/'
                // console.log(res)
            })
            .catch(err=>{
                console.log(err);
            })
    }


    // console.log(api);

    const paperStyle={padding :20,height:'40vh',width:280, margin:"190px 30vw"}
    const avatarStyle={backgroundColor:'#003f5c'}
    const btnstyle={margin:'20px 0px', backgroundColor:"red"}
    const container = {backgroundColor:"black"}
    return(
        <Grid className={container} >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <VerifiedUserIcon style={{fontSize:50 ,color:"red" ,marginBottom:10}} />
                    <h2>Login In</h2>
                </Grid>
                <TextField 
                    label='Email' 
                    placeholder='Enter email' 
                    onChange={(e)=>{setEmail(e.target.value)}}      
                    fullWidth 
                    required/>
                <TextField 
                    label='Password' 
                    placeholder='Enter password' 
                    onChange={(e)=>{setPassword(e.target.value)}}      
                    type='password' 
                    fullWidth 
                    required/>
                <Button type='submit' onClick={(e)=>login()} color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
             
            </Paper>
        </Grid>
    )
}