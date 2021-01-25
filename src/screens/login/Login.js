import React, { Component } from 'react';
import { Card, CardActions, CardContent, Typography, Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import PageWithHeader from '../../common/header/PageWithHeader';
import Config from '../../common/config';
import './Login.css';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            usernameVal: "",
            passwordVal: "",
            usernameRequiredText: "hide",
            passwordRequiredText: "hide",
            incorrectLoginInfoText: "hide"
        }

        /*****************************************************************************
         * Username, Password, Access Token & Mocking can be setup or enabled in
         *  ../../common/Config.js
         *****************************************************************************/
    }

    getUsernameOnChange = (e) => this.setState({ usernameVal: e.target.value, usernameRequiredText: "hide" });
    getPasswordOnChange = (e) => this.setState({ passwordVal: e.target.value, passwordRequiredText: "hide" });
    
    //Verify Input Credentials & log the user in if the supplied credentials are OK
    loginUserOnBtnClick = (e) => {
		
		this.state.usernameVal === "" ? this.setState({ usernameRequiredText: "show" }) : this.setState({ usernameRequiredText: "hide" });
        this.state.passwordVal === "" ? this.setState({ passwordRequiredText: "show" }) : this.setState({ passwordRequiredText: "hide" });
		
		document.getElementById("ip-uname").focus();
        if (this.state.usernameVal === Config.login.username && this.state.passwordVal === Config.login.password) {
            window.sessionStorage.setItem('access-token', Config.auth["access-token"]);
			this.props.history.push('/home/');
        }
        else if (this.state.usernameVal !== "" && this.state.passwordVal !== "") {
            //document.getElementById("errormsg").innerHTML = "Incorrect username and/or password";
			this.setState({ incorrectLoginInfoText: "show" })
        }


        if (this.state.usernameVal === "") {
            document.getElementById("ip-uname").focus();

        }
        else if (this.state.passwordVal === "") {
            document.getElementById("ip-passwd").focus();

        }
        
      }

   
    render() {
        return (
            <PageWithHeader title="Image Viewer">
                <Card className="login-card" >
                    <CardContent>
                        <FormControl margin="normal" size="medium" variant="standard">
                            <Typography className="login-title" variant="h5" component="h5" color="textPrimary"
                            >LOGIN</Typography>
                        </FormControl>
                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="ip-uname">Username</InputLabel>
                            <Input id="ip-uname" type="text" onChange={this.getUsernameOnChange} />
                            <FormHelperText error className={this.state.usernameRequiredText}>required</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="ip-passwd">Password</InputLabel>
                            <Input id="ip-passwd" type="password" onChange={this.getPasswordOnChange} />
                            <FormHelperText error className={this.state.passwordRequiredText}>required</FormHelperText>
                        </FormControl>
                        <FormHelperText error id="errormsg" className={this.state.incorrectLoginInfoText}>Incorrect username and/or password</FormHelperText>
                    </CardContent>
                    <CardActions>
                        <FormControl margin="normal" size="medium" variant="standard">
                            <Button variant="contained" color="primary" id="btn-login" onClick={this.loginUserOnBtnClick}>LOGIN</Button>
                        </FormControl>
                    </CardActions>
                </Card>
            </PageWithHeader>
        );
    }
}