import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BuildIcon from '@material-ui/icons/Build';

function LightBulbIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

const styles = (theme: { mixins: { toolbar: any; }; }) => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar
});



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },flex: {
          flex: 1
      },
      menuButton: {
    marginLeft: -12,
        marginRight: 20
},
    lightBulb: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }),
);

export default function ProTip() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} color="textSecondary">
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.flex}
                >
                    Title
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>


    </Typography>
  );
}
