import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width:"100%"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },


  footer: {


    textAlign: "center",
    marginTop:"40px",
    padding:'30px',
   width: "100% !important",
   height: "100px !important",
   background: "lightgray"
  }
  
}));






function Footer() {

  const classes = useStyles();




  return (


    <div>

      <footer className={classes.footer}>
        <Container maxWidth="sm" >

           <Typography variant="body1">My sticky footer can be found here.</Typography>


          <Copyright />
        </Container>
      </footer>




    </div >
  )
}

export default Footer