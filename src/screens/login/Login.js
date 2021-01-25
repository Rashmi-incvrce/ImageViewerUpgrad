import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Link } from 'react-router-dom';
import '../login/Login.css';
import Home from '../../screens/home/Home';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            loggedIn: false,
            accesstoken: "IGQVJWOGNVcU5KQTZAqODlVRW1BekVXLXd1V3A0cnJreUxJYUtlV0lJNUlBZAmM1UzlrOHZADek51ZAXdRbVkybFRuZA2V3dzFHUGVkOU5zWjBlYVhRTXU5WWtVS2lrQkMtWGtONUpObXlKdUhtaGZA4U1BhS1BjY29xaEZAac0lV"
        }
    }

    loginClickHandler = () => {
      
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
        document.getElementById("username").focus();
        if (this.state.username == "bhavik" && this.state.password == "12345") {
            sessionStorage.setItem("LoggedIn", "true");
            sessionStorage.setItem("access-token", this.state.accesstoken);
            this.props.history.push('/home');
        }
        else if (this.state.username != "" && this.state.password != "") {
            document.getElementById("errormsg").innerHTML = "Incorrect username and/or password";
        }


        if (this.state.username === "") {
            document.getElementById("username").focus();

        }
        else if (this.state.password === "") {
            document.getElementById("password").focus();

        }



    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {

        return (
            <div>
                <Header onloginprofilemenu={false} showaccountment={false} loggedIn={false}></Header>
                <div className="logincontainer">
                    <div className="card">
                        <Card style={{ paddingLeft: "10%" }}>
                            <CardContent>
                                <div>
                                   <h2>
                                      Login
                                   </h2>
                                </div>
                                <FormControl required>
                                    <InputLabel htmlFor="username">Username</InputLabel>
                                    <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                    <FormHelperText className={this.state.usernameRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input id="password" type="password" password={this.state.password} onChange={this.inputLoginPasswordChangeHandler} />
                                    <FormHelperText className={this.state.passwordRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <span className="red" id="errormsg"></span>
                                <br /><br />
                                <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
// export default makeStyles(useStyles)(Login);