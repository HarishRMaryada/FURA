//import react packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';


//material ui css

import classNames from 'classnames';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles =(theme) => ({
    root: {
        background: 'red'
    },
    appBar: {
      position: 'absolute',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
});


class TopNavBar extends Component{
  state = {
    open: false
  }

  handleDrawerOpen = (openValue) => {
    this.setState({ open:!openValue  });
  };

  render(){
    const {classes,theme} = this.props;
    const {open} =this.state;
    return(
      <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={() => this.handleDrawerOpen(this.state.open)}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Persistent drawer
                </Typography>
              </Toolbar>
            </AppBar>
    );
  }
}
// var TopNavBar = () =>{
//     return(
//         // <AppBar position="static">
//         // <Toolbar >
//         //   {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//         //     <MenuIcon />
//         //   </IconButton>
//         //   <Typography variant="title" color="inherit" className={classes.flex}>
//         //     News
//         //   </Typography> */}
//         //   {/* <Button color="inherit">Login</Button> */}
//         // </Toolbar>
//         // </AppBar>
//         <AppBar
//         className={classNames(classes.appBar, {
//           [classes.appBarShift]: open,
//           [classes[`appBarShift-${anchor}`]]: open,
//         })}
//       >
//         <Toolbar disableGutters={!open}>
//           <IconButton
//             color="inherit"
//             aria-label="Open drawer"
//             onClick={this.handleDrawerOpen}
//             className={classNames(classes.menuButton, open && classes.hide)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit" noWrap>
//             Persistent drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     )

// }; 


  

TopNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TopNavBar);
