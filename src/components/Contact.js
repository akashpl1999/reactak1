import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, Grid, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import BookIcon from '@material-ui/icons/Book';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import ReplayIcon from '@material-ui/icons/Replay';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
const Contact = () => {




    return (


        <div style={{position:"relative"}}>


           
             <div style={{backgroundColor:"#8B008B", height:"70vh", position:"relative",top:'100%',width:"100%",marginTop:"10px"}}>

                    <Typography variant='h4' style={{position:"absolute" ,top:"40%",left:"50%",color:"white"}} >INDIA</Typography>

                   <Typography variant='h6' style={{position:"absolute" ,top:"50%",left:"50%",color:"white"}}>CONTECT US</Typography>


             </div>


             <div style={{backgroundColor:"white", height:"30vh",marginTop:"40px"}}>
                <Grid container spacing={2}>

                      <Grid item xs={3}>

                      <ChatIcon  style={{color:"black",height:"90px",width:"90px"}}/>
                         <Typography  style={{color:"black"}}  variant='h6'>Chart Support</Typography>
                      </Grid>


                      <Grid item xs={3}>
                        
                         
                      <EmailIcon  style={{color:"black",height:"90px",width:"90px"}}/>
                         <Typography  style={{color:"black"}}  variant='h6'>Email support</Typography>
                      </Grid>



  
                        <Grid item xs={3}>
                        

                        <PhoneIcon  style={{color:"black",height:"90px",width:"90px"}}/>
                         <Typography  style={{color:"black"}}  variant='h6'>phone Support</Typography>
                      </Grid>




                   
                        <Grid item xs={3}>
                        
                        <ChatIcon  style={{color:"black",height:"90px",width:"90px"}}/>
                         <Typography  style={{color:"black"}}  variant='h6'>Chart Support</Typography>
                      </Grid>



                      
                </Grid>



             </div>

             <div style={{marginTop:"20px"}}>
               
               <Grid container spacing={2}>

                         <Grid item xs={4}>
                         <ReplayIcon  style={{color:"black",height:"50px",width:"50px"}}/>
                         <Typography  style={{color:"black"}}  variant='h6'>replacement</Typography>
                    
                         
                         </Grid>
             
                         <Grid item xs={4}>
                         <PersonPinCircleIcon  style={{color:"black",height:"50px",width:"50px"}}/>
                         <Typography  style={{color:"black"}}  variant='h6'>replacement</Typography>
                    
                         
                         </Grid>

                         <Grid item xs={4}>

                         <MonetizationOnIcon  style={{color:"black",height:"50px",width:"50px"}}/>
                         <Typography  style={{color:"black"}}  variant='h6'>Easy exchange</Typography>
                    
                          
                         </Grid>

             
               </Grid>




             </div>
               


        </div>
    )
}

export default Contact