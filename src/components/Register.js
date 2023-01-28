import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


import { useFormik } from "formik";
import signupSchema from "./signUpSchema";













const useStyles = makeStyles((theme) => ({

    root: {

        padding: theme.spacing(2),
        backgroundColor: "lightpink",
        backgroundImage: `url("https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`
    },


    main1: {
        position: 'absolute',
        margin: "20px",
        top: "10%"

    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        position: "absolute",

        top: "4%",
        left: "45%",

    },

    btn: {
        backgroundColor: theme.palette.secondary.main,
        position: "absolute",
        left: "40%",
        bottom: "10%"
    }



}))
















const Register = () => {

    const classes = useStyles();




    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    };


    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: signupSchema,
            validateOnChange: true,
            validateOnBlur: false,
             onSubmit: (values, action) => {
                console.log(values);

                action.resetForm();
            },
        });




    return (



        <div className={classes.root}>


            <Container maxWidth="sm" style={{ height: "150vh", width: "1000px", position: "relative", top: "3%", backgroundColor: "white" }} >

                <Avatar className={classes.avatar}>
                    
                    <LockOutlinedIcon />

                </Avatar>



                <form onSubmit={handleSubmit}>

                    
                    <div className={classes.main1}>


                        <TextField fullWidth
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}

                            label="First name" variant='outlined' type="text" style={{ margin: "5px", padding: "5px", color: "black", width: "500px" }} />
                        {touched.name && errors.name ? (
                            <p className="form-error" style={{ color: "blue" }}>{errors.name}</p>
                        ) : null}



                        <TextField fullWidth

                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}

                            label="last name" variant='outlined' type="text" style={{ margin: "5px", padding: "5px", color: "black", width: "500px" }} />
                        {touched.name && errors.name ? (
                            <p className="form-error" style={{ color: "blue" }}>{errors.name}</p>
                        ) : null}




                        <TextField fullWidth

                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}


                            label="email" variant='outlined' type="text" style={{ margin: "5px", padding: "5px", width: "500px" }} />
                        {errors.email && touched.email ? (
                            <p className="form-error" style={{ color: "blue" }}>{errors.email}</p>
                        ) : null}



                        <TextField fullWidth
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}



                            label="password" variant='outlined' style={{ margin: "5px", padding: "5px", width: "500px" }} />
                        {errors.password && touched.password ? (
                            <p className="form-error" style={{ color: "blue" }}>{errors.password}</p>
                        ) : null}



                        <TextField fullWidth
                            type="password"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="con-password" variant='outlined' style={{ margin: "5px", padding: "5px", width: "500px" }} />


                        {errors.confirm_password && touched.confirm_password ? (
                            <p className="form-error" style={{ color: "blue" }}>{errors.confirm_password}</p>
                        ) : null}








                    </div>


                    <Button type="submit" variant="contained" className={classes.btn} >
                        Register
                    </Button>


                </form>

            </Container>


        </div>







    )
}

export default Register