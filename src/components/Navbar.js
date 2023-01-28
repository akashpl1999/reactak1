import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Facebook, Instagram } from '@material-ui/icons';
import Link from '@material-ui/core/Link';

 
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
   inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  nav:{
    backgroundColor:"white",
    color:"red",
    top:"0",
    position: 'sticky',

   },

  icon:{
    padding:theme.spacing(1,2),
    
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} >
      <Link href="/profile">Profile</Link>
    
      </MenuItem>
      <MenuItem onClick={handleMenuClose} >My account</MenuItem>
      <MenuItem onClick={handleMenuClose} >
      <Link href="/login">Login</Link>
           
      </MenuItem>
      <MenuItem onClick={handleMenuClose} >
      <Link href="/register">Register</Link>
      </MenuItem>
           
            
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

       <MenuItem>
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        <p>Notifications</p>
        
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
          <AccountCircle />
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar         position="fixed"  className={classes.nav}>
      
      
        <Toolbar>
            
           <div className={classes.grow} />
             
             
              <div className={classes.sectionDesktop}>
          
              <Typography variant='h5'  className={classes.icon} >
               
                <Link href="/home">Home</Link>
               </Typography>
          
              <Typography variant='h5'  className={classes.icon}>
              <Link href="/about">About</Link>
            
                   
              </Typography>
              <Typography variant='h5'  className={classes.icon}>
              <Link href="/service">Service</Link>
          
                   
              </Typography>
              <Typography variant='h5'  className={classes.icon}>
              <Link to="/">Contact</Link>
          
                   
              </Typography>
          
              <Badge  color="secondary">
                <Facebook  className={classes.icon} />
              </Badge>
              <Badge  color="secondary">
                <Instagram className={classes.icon}/>
              </Badge>
              <AccountCircle  className={classes.icon} aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
          />
          </div>
          <div className={classes.sectionMobile}>
              <MoreIcon   aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            />
          </div>
        </Toolbar>
      </AppBar>
        
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
