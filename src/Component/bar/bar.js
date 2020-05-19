import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Logo from '../../media/logo.png';
import Button from '@material-ui/core/Button';
import Right from '@material-ui/icons/ChevronRight';
import './bar.css'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position:"fixed",
    top:0,
    width:'100%'

  },
  icon:{
    position:'absolute',
    right:'10px'
  }
}));

export default function MenuAppBar({Login,toggleDrawer}) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" styles={{backgroundColor:"white"}}> 
        <Toolbar>
         
          <img height='40px' src={Logo}/>
        
             <div className={`${classes.icon} butn`}>
              <Button  style={{color:'#585858'}}>Impact</Button> 
              <Button  style={{color:'#585858'}}>Opportunites</Button>
              <Button  style={{color:'#585858'}}>Initiatives</Button>
              <Button  style={{color:'#585858'}}>FAQs</Button>
              <Button  style={{color:'#585858'}}>Blog</Button>
              <Button onClick={Login} style={{color:'#585858'}}
              variant="contained"
              color="primary"
              className={classes.button}
              style={{backgroundColor:'#64dd17'}}
              endIcon={<Right/>}>Try our Alpha</Button>
             </div>
             <div className={`${classes.icon} icon`}>
             <IconButton onClick={toggleDrawer}><MenuIcon/></IconButton>
             </div>
            
        </Toolbar>
      </AppBar>
    </div>
  );
}
