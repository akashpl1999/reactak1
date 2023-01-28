import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Bredcram() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="primary" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link color="primary" href="/getting-started/installation/" onClick={handleClick}>
          Mycomponets
        </Link>
        <Typography color="primary">Payslip</Typography>
      </Breadcrumbs>
   
        </Container>
      </div>
  );
}
