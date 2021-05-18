import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();

    const history = useHistory()
    return(
          <>
              {
                  sessionStorage.getItem('jwtToken') &&
                  <AppBar position="static">
                      <Toolbar>
                          <Typography variant="h6" className={classes.title}>
                              <Button color="inherit" onClick={() => history.push('/list-profil')}>Accueil </Button>
                          </Typography>
                          <Button color="inherit" onClick={() => history.push('/profil')}>Profil</Button>
                          <Button color="inherit" onClick={() => history.push('/logout')}>Logout</Button>
                      </Toolbar>
                  </AppBar>
              }
          </>
    )
}

export default NavBar;
