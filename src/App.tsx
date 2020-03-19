import React from "react";
import PropTypes from "prop-types";
import {createMuiTheme, makeStyles, MuiThemeProvider} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import ProTip from "./ProTip";
import BuildIcon from "@material-ui/icons/Build";
import SvgIcon, {SvgIconProps} from "@material-ui/core/SvgIcon";
import TabDemo from "./TabDemo";
import {User} from "./User";
import {connect} from "react-redux";


interface ReduxProps {
    user: User;
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#182e52',
        },
        secondary: {
            main: '#f1eff1',
        },
    },
});

function LightBulbIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path
                d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
        </SvgIcon>
    );
}

class App extends React.Component {
    componentDidMount() {
        const url =
            "https://opendata.arcgis.com/datasets/ce8605a03f6f487bb1105837af22ddd1_0.geojson";
        axios({
            method: "get",
            url,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(resp => {
                console.log("Submission response", resp);
            })
            .catch(err => console.error(err));
    }

    render() {
        var value = 3;

        return (
            <MuiThemeProvider theme={theme}>
                <Grid container direction={'column'}>
                    <Grid item style={{ padding: '10px' }}>
                        <ProTip/>
                    </Grid>
                    <Grid item spacing={3}>
                        <TabDemo/>
                    </Grid>
                </Grid>
            </MuiThemeProvider>

        );
    }
}

export default App;
