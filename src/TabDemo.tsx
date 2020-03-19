import React, { useState } from 'react';

import {createMuiTheme, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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



class TabDemo extends React.Component {

    state = { value: 0 }

    handleChange = (event: any, newValue: any ) => {
        this.setState({value: newValue})
        this.state.value = newValue
        console.log(this.state.value)
    }


    render() {



        return (
            <div className="root">
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab label="Item One"/>
                        <Tab label="Item Two"/>
                        <Tab label="Item Three"/>
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && (
                    <Typography component="div" className="root">
                        Item One
                    </Typography>
                )}
                {this.state.value === 1 && (
                    <Typography component="div" className="root">
                        Item Two
                    </Typography>
                )}
                {this.state.value === 2 && (
                    <Typography component="div" className="root">
                        Item Three
                    </Typography>
                )}
            </div>
        );
    }

}

export default TabDemo;
