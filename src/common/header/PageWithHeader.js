import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles'
import './PageWithHeader.css';

export default class PageWithHeader extends Component {

    // Redirect user to home page on click of logo text
    /*redirectUserToHomePage = () => {
        if(!this.props.history){
            this.props.history.push('/home');
        }
        else{
            this.props.history.replace('/home');
        }
    }*/
    render() {
        return (
            <div className="main-container">
                <StylesProvider injectFirst>
                    <AppBar className="page-header">
                        <Toolbar >
                            <Typography className="title-text" variant="h6" noWrap><Link className="home-link" to='/userhome' >{this.props.title}</Link></Typography>
                            <Box ml="auto" display="flex" flexDirection="row" alignItems="center" >
                                {this.props.positionLeft}
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <div className="page-body">
                        {this.props.children}
                    </div>
                </StylesProvider>
            </div>
        );
    }
}