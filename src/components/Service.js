import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, Grid, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import BookIcon from '@material-ui/icons/Book';



const Service = () => {




    return (


        <div style={{position:"relative"}}>


            <div >

                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" >
                        Material-UI
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" >
                        Core
                    </Link>
                    <Typography color="textPrimary">Breadcrumb</Typography>
                </Breadcrumbs>


            </div>

             <div style={{backgroundColor:"#8B008B", height:"70vh", position:"relative",top:'100%',width:"100%",marginTop:"10px"}}>

                    <Typography variant='h4' style={{position:"absolute" ,top:"40%",left:"50%",color:"white"}} >INDIA</Typography>

                   <Typography variant='h6' style={{position:"absolute" ,top:"50%",left:"50%",color:"white"}}>FIND A MI SERVICE CENTER NEAR YOU</Typography>


             </div>


             <div style={{backgroundColor:"#8B008B", height:"30vh",marginTop:"40px"}}>
                <Grid container spacing={2}>

                      <Grid item xs={3}>

                      <ChatIcon  style={{color:"white",height:"90px",width:"90px"}}/>
                         <Typography  style={{color:"white"}}  variant='h6'>Chart Support</Typography>
                      </Grid>


                      <Grid item xs={3}>
                        
                         
                      <SettingsIcon  style={{color:"white",height:"90px",width:"90px"}}/>
                         <Typography  style={{color:"white"}}  variant='h6'>Service Order status</Typography>
                      </Grid>



  
                        <Grid item xs={3}>
                        

                        <BookIcon  style={{color:"white",height:"90px",width:"90px"}}/>
                         <Typography  style={{color:"white"}}  variant='h6'>Book Appointment</Typography>
                      </Grid>




                   
                        <Grid item xs={3}>
                        
                        <ChatIcon  style={{color:"white",height:"90px",width:"90px"}}/>
                         <Typography  style={{color:"white"}}  variant='h6'>Chart Support</Typography>
                      </Grid>



                      
                </Grid>



             </div>
               


        </div>
    )
}

export default Service