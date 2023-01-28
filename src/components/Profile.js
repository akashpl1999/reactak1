import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Container, Grid ,TextField,Typography} from '@material-ui/core';
import { positions } from '@material-ui/system';




const useStyles = makeStyles((theme) => ({

    root: {
backgroundColor:"purple",
//backgroundImage:`url("https://media.istockphoto.com/id/177548065/photo/leafless-branches-on-white.jpg?s=612x612&w=is&k=20&c=fMJUNuwI-_OFVXPOXJH38XGhZn-uWNa_wz5rzAUvrDY=")`
    },

main:{
    backgroundImage:`url("https://media.istockphoto.com/id/177548065/photo/leafless-branches-on-white.jpg?s=612x612&w=is&k=20&c=fMJUNuwI-_OFVXPOXJH38XGhZn-uWNa_wz5rzAUvrDY=")`
}


}))
const Profile = () => {


    const classes = useStyles()

    return (


        <div className={classes.root}>
            <Container maxWidth="md"     >


                <Grid container spacing={2}  style={{ backgroundColor: '#cfe8fc', height: '100vh', margin:'10px' }}   >
                    <Grid item xs={3} style={{height: '100vh' ,position:"relative", backgroundColor:"white",marginTop:'10px'}}>

                            <Avatar style={{height:"90px", width:'90px',backgroundColor:"pink",position:"absolute" ,left:"50px" ,top:"10%"}}>
                                A
                            </Avatar>

                            <Typography variant='caption' style={{position:"absolute" , top:"25%", left:"70px", margin:"10px" }}>Akash </Typography><br/>
                            <Typography variant='caption' style={{position:"absolute" , top:"30%", left:"40px", margin:"10px" }}>name@gmail,com </Typography>
                        
                           
                 </Grid>
                    <Grid item xs={9}    style={{height: '80vh' ,position:"relative", backgroundColor:"lightgray" }}>
                        
                        
                        
                         <div style={{height: '100vh',position:"absolute" ,backgroundColor:"white"}}>
                           
                           
                            <Typography variant='h4' >Profile </Typography>
                       
                       
                            <TextField variant='outlined' label="firstName" style={{margin:"10px" ,width:"200px",left:"10px"}}/>

                            <TextField variant='outlined' label="LastName" style={{margin:"10px", width:"200px"}}/>



                       

                          <TextField  variant='outlined' label="Address"  style={{width:"500px", margin:"10px"}}  />

                          <TextField  variant='outlined' label="pincode"  style={{width:"500px", margin:"10px"}}  />
                       
                          <TextField  variant='outlined' label="state"  style={{width:"500px", margin:"10px"}}  />
 
                          <TextField  variant='outlined' label="country"  style={{width:"500px", margin:"10px"}}  />
 


                           <Button type='submit' color='secondary'   style={{width:"100px", margin:"10px",position:"absolute" ,bottom:"30px", left:"40%", backgroundColor:"pink"}}  >Save data</Button>
                         </div>

                    </Grid>
                 </Grid>



            </Container>



        </div>
    )
}

export default Profile