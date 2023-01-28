import React, { useState, useEffect } from 'react'
import { Avatar, Box, Button, Card, CardHeader, Grid, Paper, TextField, Typography } from '@material-ui/core';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  btn:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
});














const Home = () => {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  const images = ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjb3VudGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80", "https://plus.unsplash.com/premium_photo-1663013659189-58ff1c9e1976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1457904375453-3e1fc2fc76f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80",
    "https://images.unsplash.com/photo-1423666523292-b458da343f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    "https://media.istockphoto.com/id/1332570157/photo/business-colleagues-having-a-conversation.jpg?s=1024x1024&w=is&k=20&c=bS1Z6xAJ0T24xigcow0fop98jU9rohDvz9-COA2Pjuk=",
    "https://media.istockphoto.com/id/1365749395/photo/young-asian-woman-managing-online-banking-on-laptop-taking-care-of-her-money-and-finances.jpg?s=612x612&w=is&k=20&c=rCDRp6sunruc4ByIJLS4bKgbztCVUvM1NupQfEElyok="

  ];

  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])



  return (
    <div>




      <div className='img' style={{ marginTop: "10px", position: 'relative' }}>

        <img src={currentImage} style={{ width: "1200px", height: "90vh" }} />
        <div style={{ position: "absolute", top: "30%", left: "20%", color: "green" }}>
          <Typography variant='h5' style={{ color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" }} >


            We support your Bussiness

          </Typography>

          <Typography variant='h2' style={{ color: "white", fontFamily: "sans-serif", fontWeight: "100" }}>
            The best bussiness support
          </Typography>

          <Button color="secondary" className={classes.btn} >Connect as</Button>

        </div>


      </div>





      -----------------------------




      <div style={{ backgroundColor: "white", marginTop: "10px", width: "100%" }} >


        <Grid container spacing={2} >

          <Grid item xs={12} sm={4}>
            <img src="https://plus.unsplash.com/premium_photo-1661777204046-d7fae72dbcdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          </Grid>



          <Grid item xs={12} sm={8} style={{ position: "relative", height: "100vh", width: "100%" }}>



            <Typography variant='h6' style={{ color: "green", margin: "10px", position: 'absolute', left: "10px" }}>WELCOME TO ACCOUNTING</Typography>

            <Typography variant='h4' style={{ color: "black", margin: "10px", position: 'absolute', left: "10px", top: "8%" }}>We Are the Best Accounting Agency</Typography>


            <div style={{ position: 'absolute', top: "15%", left: "0%" }}>

              <Card style={{ margin: "20px", backgroundColor: "white", fontSize: "20px" }}>

                <Avatar style={{ margin: "20px", backgroundColor: "green" }} >
                  <TrendingDownIcon />

                </Avatar>

                <Typography variant='h6' Wrap>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia

                </Typography>

              </Card>
              <Card style={{ margin: "20px", backgroundColor: "white" }}>
                <Avatar style={{ margin: "20px", backgroundColor: "green" }} >
                  <AssessmentIcon />

                </Avatar>
                <Typography variant='h6' Wrap>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia

                </Typography>

              </Card >
              <Card style={{ margin: "20px", backgroundColor: "white" }}>
                <Avatar style={{ margin: "20px", backgroundColor: "green" }} >
                  <TrendingDownIcon />

                </Avatar>
                <Typography variant='h6' Wrap>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia

                </Typography>

              </Card>


            </div>


          </Grid>




        </Grid>





      </div>







      --------------------------------





      <div style={{ margin: "20px", position: "absolute", height: '50vh', backgroundColor: 'white', width: "100%" }}>
        <Grid container spacing={2}>

          <Grid item xs={4}>

            <Typography variant='h5' wrap>
              Accounting
            </Typography>
            <Typography variant='caption' Wrap>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.


            </Typography>


          </Grid>

          <Grid item xs={4}>

            <Typography variant='h5' Wrap>
              Tax, Compliance & Payroll

            </Typography>

            <Typography variant='caption' Wrap>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.


            </Typography>

          </Grid>
          <Grid item xs={4}>

            <Typography variant='h5' Wrap>
              Financial Services
            </Typography>

            <Typography variant='caption' Wrap>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.


            </Typography>

          </Grid>


        </Grid>




        -----------------------------




        <div style={{ marginTop: "40px", backgroundColor: "#23CCE1", }}>

          <Typography variant="h4">Happy Clients & Feedbacks</Typography>
        </div>


        <div style={{ backgroundColor: "#23CCE1", display: "flex", flexDirection: 'row', height: "50vh", width: '100%', alignItems: "flex-end" }}>




          <div style={{ width: "30%", height: "220px", padding: "15px" }}>
            <Card className={classes.root}>

              <Avatar style={{ backgroundColor: "green", margin: "10px", height: "60px", width: "60px" }}>
                ,,
              </Avatar>
              <CardContent>
                <Typography variant="body2" component="p">
                  well meaning and kindly.hnhbhbhubknjnb uhbbnunu
                  <br />
                  {'"a benevolent smile"'}
                </Typography>

              </CardContent>
              <CardActions>
                <Avatar>
                  A
                </Avatar>

              </CardActions>


            </Card>


          </div>



          <div style={{ width: "30%", height: "220px", padding: "15px" }}>
            <Card className={classes.root}>
              <Avatar style={{ backgroundColor: "green", margin: "10px", height: "60px", width: "60px" }}>
                ,,
              </Avatar>

              <CardContent>
                <Typography variant="body2" component="p">
                  well meaning and kindly.hbhjuhuhuhu
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Avatar>
                  B
                </Avatar>

              </CardActions>
            </Card>


          </div>



          <div style={{ width: "30%", height: "220px", padding: "15px" }}>

            <Card className={classes.root}>
              <Avatar style={{ backgroundColor: "green", margin: "10px", height: "60px", width: "60px" }}>
                ,,
              </Avatar>

              <CardContent>
                <Typography variant="body2" component="p">
                  well meaning and kindly.hbhuhuh
                  <br />
                  {'"a benevolent smile"'}

                </Typography>
              </CardContent>
              <CardActions>
                <Avatar>
                  A
                </Avatar>
              </CardActions>
            </Card>

          </div>

        </div>




        --------------



        <div style={{ marginTop: "40px", backgroundColor: "white", }}>

          <Typography variant='h6'>News and blogs</Typography><br />
          <Typography variant="h4">Latest news and our Blogs</Typography>


        </div>


        <div style={{ backgroundColor: "white", display: "flex", flexDirection: 'row', height: "50vh", width: '100%', alignItems: "flex-end" }}>




          <div style={{ width: "30%", height: "220px", padding: "15px" }}>


            <Card className={classes.root}>

              <CardContent>


                <img src="https://media.istockphoto.com/id/1365749395/photo/young-asian-woman-managing-online-banking-on-laptop-taking-care-of-her-money-and-finances.jpg?s=612x612&w=is&k=20&c=rCDRp6sunruc4ByIJLS4bKgbztCVUvM1NupQfEElyok=" style={{ width: "100%", height: "200px" }} />


                <Typography variant="body2" component="p">
                  well meaning and kindly.hbhuhuh
                  <br />
                  {'"a benevolent smile"'}

                </Typography>
              </CardContent>
            </Card>


          </div>



          <div style={{ width: "30%", height: "220px", padding: "15px" }}>

            <Card className={classes.root}>

              <CardContent>


                <img src="https://media.istockphoto.com/id/1365749395/photo/young-asian-woman-managing-online-banking-on-laptop-taking-care-of-her-money-and-finances.jpg?s=612x612&w=is&k=20&c=rCDRp6sunruc4ByIJLS4bKgbztCVUvM1NupQfEElyok=" style={{ width: "100%", height: "200px" }} />


                <Typography variant="body2" component="p">
                  well meaning and kindly.hbhuhuh
                  <br />
                  {'"a benevolent smile"'}

                </Typography>
              </CardContent>
            </Card>





          </div>



          <div style={{ width: "30%", height: "220px", padding: "15px" }}>


            <Card className={classes.root}>

              <CardContent>


                <img src="https://media.istockphoto.com/id/1365749395/photo/young-asian-woman-managing-online-banking-on-laptop-taking-care-of-her-money-and-finances.jpg?s=612x612&w=is&k=20&c=rCDRp6sunruc4ByIJLS4bKgbztCVUvM1NupQfEElyok=" style={{ width: "100%", height: "200px" }} />


                <Typography variant="body2" component="p">
                  well meaning and kindly.hbhuhuh
                  <br />
                  {'"a benevolent smile"'}

                </Typography>
              </CardContent>
            </Card>
          </div>

        </div>






        <div style={{ backgroundColor: "#00CED1", height: '40vh', marginTop: "70px", position: "relative" }}>

          <div style={{ position: "absolute", top: "30%", left: "8%", display: 'inl' }}>
            <Typography variant='h5' >
              Sign Up for Your Free 1st Accounting Consultation   </Typography>

            <Grid container={true}>


              <TextField variant="filled" label="email" />
              <Button variant="contained" color="primary" className={classes.btn}>subscribe</Button>
            </Grid>






          </div>

        </div>


        <Footer />





      </div>


      -------------------------------------





















    </div>
  )
}

export default Home