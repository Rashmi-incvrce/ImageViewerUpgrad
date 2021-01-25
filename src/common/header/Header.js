import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import profile_picture from '../../assets/profilelogo.png';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Divider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Login from '../../screens/login/Login';
import { hashHistory } from 'react-router';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
});




class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: false,
            open: false,
            anchorRef: false,
            prevOpen: null,
            loggedIn: false,
            profilemenu: false,
            profile_picture: ""

        }

    }

    componentDidMount() {
        let that = this;
        var data = sessionStorage.getItem("LoggedIn");
        if (data === "true") {
            this.setState({ loggedIn: true });
        }

    }

    handleToggle = () => {
        this.setState({ open: true });
    };

    handleClose = (event) => {
        this.setState({ open: false });
    };


    loggoutclickhandler = (e) => {


        sessionStorage.setItem("LoggedIn", "false");
        sessionStorage.removeItem("LoggedIn");
        sessionStorage.removeItem("access-token");
        this.setState({ loggedIn: false });
        //this.props.history.push('/');
        window.location.href = "/";

    }

    searchfieldChangeHandler = event => {
        //alert(event.target.value);
        this.props.parentCallback(event.target.value);
    }

    // onTrigger = (event) => {
    //     this.props.parentCallback("Data from child");
    //     event.preventDefault();
    // }


    render() {

        return (
            <div>
                <header className="app-header">
                    <Link to="/home">
                        <span className="app-logo" alt="Image Viewer App Logo">Image Viewer</span>
                    </Link>
                    <div className="login-button">
                        {this.props.loggedIn === true
                            ?
                            <div>
                                {this.props.showsearchbox === true ?
                                    <TextField
                                        id="searchfilled"
                                        variant="outlined"
                                        style={{ backgroundColor: "#c0c0c0" }}
                                        placeholder="Search…"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment>
                                                    <IconButton>
                                                        <SearchIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        onChange={this.searchfieldChangeHandler}
                                    />
                                    :
                                    ""
                                }
                                <IconButton onClick={this.handleToggle} className="profilebutton">
                                    <img src={profile_picture} id="profilepicture"></img>
                                </IconButton>
                                {
                                    this.props.showaccountment === true ?
                                        <div>
                                            <Popper className="popperdropdown" open={this.state.open} anchorEl={this.state.anchorEl} role={undefined} transition disablePortal>
                                                {({ TransitionProps, placement }) => (
                                                    <Grow
                                                        {...TransitionProps}
                                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                                    >
                                                        <Paper id="poppermenu">
                                                            <ClickAwayListener onClickAway={this.handleClose}>
                                                                <MenuList id="menulist" autoFocusItem={this.state.open} >
                                                                    {
                                                                        this.props.profilemenu === true ?
                                                                            <div>
                                                                                <MenuItem>
                                                                                    <Typography>
                                                                                        <Link to="profile">
                                                                                            <span style={{ fontWeight: "bold" }}>My Account</span>
                                                                                        </Link>
                                                                                    </Typography>
                                                                                </MenuItem>
                                                                                <Divider></Divider>
                                                                            </div>
                                                                            :
                                                                            ""
                                                                        // <div>
                                                                        //     <MenuItem>
                                                                        //         <Typography>
                                                                        //             <Link to="/home">
                                                                        //                 <span style={{ fontWeight: "bold" }}>Home Page</span>
                                                                        //             </Link>
                                                                        //         </Typography>
                                                                        //     </MenuItem>
                                                                        //     <Divider></Divider>
                                                                        // </div>
                                                                    }
                                                                    {
                                                                        this.props.onloginprofilemenu === true ?
                                                                            <div>
                                                                                <MenuItem>
                                                                                    <Typography>
                                                                                        <span style={{ fontWeight: "bold" }} onClick={this.loggoutclickhandler}>Logout</span>
                                                                                    </Typography>
                                                                                </MenuItem>
                                                                            </div>
                                                                            :
                                                                            ""
                                                                    }

                                                                </MenuList>
                                                            </ClickAwayListener>
                                                        </Paper>
                                                    </Grow>
                                                )}
                                            </Popper>
                                        </div>
                                        :
                                        ""
                                }

                            </div>
                            : ""
                        }


                    </div>
                </header>
            </div>
        )
    }
}

// export default Header;
export default withStyles(styles)(Header);