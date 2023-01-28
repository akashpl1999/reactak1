import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Container, TextField, Grid, Link } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
//import { LockOutlinedIcon } from '@material-ui/icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';



const useStyles = makeStyles((theme) => ({

    root: {

        padding: theme.spacing(2),
        backgroundColor: "lightpink",
        backgroundImage: `url("https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        
    },


    main1: {
        position: 'absolute',
        margin: "10px",
        top: "30%"

    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        position: "absolute",

        height: "100px",
        width: "100px",

        top: "7%",
        left: "40%",

    },

    btn: {
        backgroundColor: theme.palette.secondary.main,
        position: "absolute",
        left: "40%",
        bottom: "10%",
        width:"100px"
    }



}))

const Login = () => {

    const classes = useStyles();



    return (

        <div className={classes.root}>



            <Container maxWidth="sm" style={{ height: "90vh", width: "1000px", position: "relative", top: "10%", backgroundColor: "white" }} >

                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon style={{height:"80px", width:"80px"}} />

                </Avatar>

                <div className={classes.main1}>






                    <TextField fullWidth label="email" variant='outlined' type="text" style={{ margin: "10px", padding: "10px", width: "500px" }} />


                    <TextField fullWidth label="password" variant='outlined' type="text" style={{ margin: "10px", padding: "10px", width: "500px" }} />



                    <Grid container >
                    <Grid item xs style={{position:"absolute", left:"20px"}}>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item style={{position:"absolute", right:"20px"}}>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>



                </div>

                
                <Button  variant="contained" className={classes.btn} >
                    Login
                </Button>




            </Container>




        </div>







    )
}

export default Login