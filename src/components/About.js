import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import Grid from "@material-ui/core/Grid"







const About = () => {




    return (




        <div  style={{backgroundColor:"purple"}}>

            <Grid container spacing={3}>
                <Grid item xs={6}>

                    <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" style={{ height: "80vh", width: "600px", margin: "10px" }} />


                </Grid>


                <Grid item xs={6} style={{ position: "relative" }}>

                    <div style={{ position: "absolute", top: "20px", height: "80vh", backgroundColor: "#8B008B", color: "white", fontSize: "20" }}>

                        <Typography variant='h3' >
                            About Us
                        </Typography>
                        <Typography variant='caption'>
                            The University of North Georgia Press and Affordable Learning Georgia bring you Principles of Managerial Accounting. Well-written and straightforward, Principles of Managerial Accounting is a needed contribution to open source pedagogy in the business education world. Written in order to directly meet the needs of her students, this textbook developed from Dr. Jonick’s years of teaching and commitment to effective pedagogy.

                        </Typography>

                    </div>

                </Grid>



            </Grid>


        </div>
    )
}

export default About