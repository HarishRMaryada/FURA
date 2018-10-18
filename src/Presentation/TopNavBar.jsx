
import React from 'react';


//material ui css
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
    root: {
        background: 'red'
    }
};


var TopNavBar = () =>{
    return(
        <AppBar position="static">
        <Toolbar >
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            News
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
        </AppBar>
    )

}; 


  
export default TopNavBar;
