import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import profile_picture from '../../assets/profilelogo.png';
import profile_picture from '../../assets/home_profile_pic.png';
import Divider from '@material-ui/core/Divider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import '../profile/Profile.css';
import '../../common/Common.css';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Modal from 'react-modal';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "70%",
        height: "auto",
    },
});


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ModalIsOpen: false,
            ProfileModalIsOpen: false,
            accesstokan: "",
            FirstAPIData: [],
            SecondAPIData: [],
            // homepagedata1: [],
            // homepagedata2: [],
            filterdata: [],
            //  newdata: [],
            //  searchfiled: "",
            //  modalprofilepic: "",
            //  profileusername: "",
            //   profilecaption: "",
            // username: "bhavik",
            fullname: "bhavik kumar patel",
            fullnameRequired: "dispNone",
            totalposts: 8,
            followd: 4,
            followedby: 5,
            likeactivestatus: false,
            //  likecount: 0,
            //  likeActive: false,
            //  tempresponseData: [],
            //  profile_picture: "",
            username: "",
            created_time: "",
            url: "",
            text: "",
            tags: [],
            count: 0,
            likes: [],
            comments: []
        }

    }

    componentDidMount() {

        //Check if user is logged or not if user not logged in then user will redirect to login page
        var Isuserloggedin = sessionStorage.getItem("LoggedIn");
        if (Isuserloggedin == null || Isuserloggedin == false) {
            this.props.history.push('/');
        }

        let that = this;
        this.setState({ accesstoken: sessionStorage.getItem("access-token") });


        // Get data for first endpoint    
        let dataShows = null;
        let xhrobj = new XMLHttpRequest();
        xhrobj.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                if (this.status == 200) {
                    let response = JSON.parse(this.responseText);
                    that.setState({ FirstAPIData: response.data });
                    myFunction();
                }
                else {
                    alert(xhrobj.responseText);
                    console.log(xhrobj.responseText);
                    //To manage Application request limit reached , i have captured data in session , so application not break, in this case we can not get fresh uploaded images, but we can test it
                    //Application request limit reached ,You are hitting rate limits on the node that you are attempting to fetch. Please wait and try again later.
                    //Data comes from  sessiondata ,because instagram do not allow for multiple request on day,
                    // If i request and run application instagram says , you reached on max request for day try after some time
                    // So i have stored it in session, however it is not good practice if api return 1000s of recods                
                    var getdatafromsession = sessionStorage.getItem("sessiondata");
                    var parseseeiondata = JSON.parse(getdatafromsession);
                    that.setState({ SecondAPIData: parseseeiondata, filterdata: parseseeiondata })
                }
            }
            let newdata = [];
            function myFunction() {

                for (var item of that.state.FirstAPIData) {
                    let datamedia = null;
                    let xhrmedia = new XMLHttpRequest();
                    xhrmedia.addEventListener("readystatechange", function () {
                        if (this.readyState === 4) {
                            let responsedata = JSON.parse(this.responseText);
                            //var instadatetime = new Date(responsedata.timestamp);
                            // instadatetime = instadatetime.toLocaleString();
                            let timestamp = new Date(responsedata.timestamp);
                            let date = ("0" + timestamp.getDate()).slice(-2);
                            let month = ("0" + (timestamp.getMonth() + 1)).slice(-2);
                            let year = timestamp.getFullYear();
                            let hours = timestamp.getHours();
                            let minutes = timestamp.getMinutes();
                            let seconds = timestamp.getSeconds();

                            // prints date & time in dd/mm/yyyy HH:MM:SS format
                            let instadatetime = date + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
                            //console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

                            //Start extracting hashtags from captions
                            var hashtagreg = /(?:^|[ ])#([a-zA-Z]+)/gm;
                            var tagvalue;
                            var hashtagobj = [];

                            if (responsedata.caption != "" && responsedata.caption != null && responsedata.caption != undefined) {
                                while ((tagvalue = hashtagreg.exec(responsedata.caption)) != null) {
                                    if (tagvalue.index === hashtagreg.lastIndex) {
                                        hashtagreg.lastIndex++;
                                    }
                                    hashtagobj.push(tagvalue[0]);
                                }
                            }

                            //var hashtagtext = hashtagobj.toString().replace(',', ' ');
                            var hashtagtext = hashtagobj.toString().replace(/,/g, " ");
                            //Emd Extracting hashtags

                            //Start Extracting only text from caption
                            var textreg = /(?:^|[ ])([a-zA-Z0-9]+)/gm;
                            var textvalue;
                            var textobj = [];
                            var captiontext;
                            if (responsedata.caption != "" && responsedata.caption != null && responsedata.caption != undefined) {
                                while ((textvalue = textreg.exec(responsedata.caption)) != null) {
                                    if (textvalue.index === textreg.lastIndex) {
                                        textreg.lastIndex++;
                                    }
                                    textobj.push(textvalue[0]);
                                }
                                captiontext = textobj.toString().replace(',', ' ');
                            }
                            else {
                                captiontext = '';
                            }

                            //End

                            // newdata.push({ id: responsedata.id, media_type: responsedata.media_type, url: responsedata.media_url, username: responsedata.username, created_time: instadatetime, text: captiontext, likeactivestatus: false, count: 0, likecomment: "", tags: hashtagtext });
                            newdata.push({ id: responsedata.id, media_type: responsedata.media_type, url: responsedata.media_url, username: responsedata.username, created_time: instadatetime, text: captiontext, tags: hashtagtext });
                            // that.setState({ SecondAPIData: newdata, filterdata: newdata, tempresponseData: this.responseText })
                            that.setState({ SecondAPIData: newdata, filterdata: newdata })
                            SetInitialLikes();
                            sessionStorage.setItem("sessiondata", JSON.stringify(newdata));

                        }
                    });

                    xhrmedia.open("GET", "https://graph.instagram.com/" + item.id + "?fields=id,media_type,media_url,username,timestamp,caption&access_token=" + sessionStorage.getItem('access-token'));
                    xhrmedia.send(datamedia);

                }

            }
            function SetInitialLikes() {
                //debugger;
                var setlikes = [];
                for (var i of that.state.SecondAPIData) {
                    setlikes.push({ id: i.id, count: 0, likeactivestatus: false });
                }
                that.setState({ likes: setlikes });

                //Total Image Count Updated if user added newly image on instagram
                var parseseeiondata = that.state.SecondAPIData;     
                var user_name = parseseeiondata[0].username;
                var total_posts = 0;
                var total_posts = parseseeiondata.reduce(
                    (accumulator, currentValue) => accumulator.concat(currentValue), []
                ).length;
                that.setState({ username: user_name, totalposts: total_posts });

                initiateLikesWithSession();
            }

            //This function use to set like on image, when and if you add new image in instagram
            //and Manage Existing Session that have likes already Liked when you like and image
            function initiateLikesWithSession() {
                //Get Likes from session in case of any changes made for like in profile page
                var getlikes = sessionStorage.getItem("likes");
                if (getlikes != null && getlikes != "") {

                    var currentlikes = that.state.likes;
                    var Likescomments = JSON.parse(getlikes);

                    const filterresult = currentlikes.filter(function (o1) {
                        return !Likescomments.some(function (o2) {
                            return o1.id == o2.id;
                        });
                    });

                    if (filterresult.length > 0) {
                        Likescomments.push({ id: filterresult[0].id, count: 0, likeactivestatus: false });
                        sessionStorage.setItem("likes", JSON.stringify(Likescomments));
                    }
                    that.setState({ likes: Likescomments });

                }

            }

        })

        xhrobj.open("GET", "https://graph.instagram.com/me/media?fields=17841444216306483,caption&access_token=" + sessionStorage.getItem('access-token'));
        xhrobj.send(dataShows);


        if (this.state.SecondAPIData != null && this.state.SecondAPIData != '') {
            var parseseeiondata = this.state.SecondAPIData;
            // var instagramdata = this.state.SecondAPIData;           
            var user_name = parseseeiondata[0].username;
            var total_posts = 0;
            var total_posts = parseseeiondata.reduce(
                (accumulator, currentValue) => accumulator.concat(currentValue), []
            ).length;
            that.setState({ SecondAPIData: parseseeiondata, filterdata: parseseeiondata, username: user_name, totalposts: total_posts });
            // that.setState({ totalposts: total_posts });
        }
        else {
            var getdatafromsession = sessionStorage.getItem("sessiondata");
            var parseseeiondata = JSON.parse(getdatafromsession);
            if (parseseeiondata != null) {
                // var instagramdata = this.state.SecondAPIData;           
                var user_name = parseseeiondata[0].username;
                var total_posts = 0;
                var total_posts = parseseeiondata.reduce(
                    (accumulator, currentValue) => accumulator.concat(currentValue), []
                ).length;
                that.setState({ SecondAPIData: parseseeiondata, filterdata: parseseeiondata, username: user_name, totalposts: total_posts });
            }

        }

    }

    //AddCommentClick Handler Use to Add Comment from modal popup when user click on add button
    // If User Click on Add button without entering any comment it shows validation
    //Store comment in session storage , if user add any comment from profile page, it will reflect in Home page as well.
    addcommentClickHandler = (username, id) => {
        var commenttext = document.getElementById("commentinput").value;


        if (commenttext == '') {
            alert("Please add Comment");
            document.getElementById("commentinput").focus();
        }
        else {
            var usercomments = [];
            usercomments = this.state.comments;
            usercomments.push({ id: id, comment: commenttext });
            sessionStorage.setItem("comments", JSON.stringify(usercomments));
            this.setState({ comments: usercomments });
            document.getElementById("commentinput").value = '';

        }
    }

    //Open full name edit modal
    openmodalHandler = () => {
        this.setState({ ModalIsOpen: true });
    }

    //Close full name edit modal
    closeModalHandler = () => {
        this.setState({ ModalIsOpen: false });
    }

    //When User Click any image from grid , it shows details of image in modal popup    
    imageclickHandler = (id) => {

        //Start Get Comments that added from Home page
        var getcomments = sessionStorage.getItem("comments");
        var comments = JSON.parse(getcomments);
        this.setState({ comments: comments });
        //End Get Comment

        //Start Get  likes that added from Home Page
        var getlikes = sessionStorage.getItem("likes");
        if (getlikes != null) {
            var Likescomments = JSON.parse(getlikes);
            this.setState({ likes: Likescomments });
        }
        //End likes 


        //Start Open Modal popup and filter image and content for selected image
        let that = this;
        let newfilterdata = this.state.SecondAPIData;
        let newRow = newfilterdata.filter(function (e) {
            return e.id == id;
        });
        this.setState({ filterdata: newRow });
        this.setState({ ProfileModalIsOpen: true });
        //End Modal popup
    }

    //Update Click Handler use to update full name from modal popup
    updatefullnameclickHandler = () => {
        var userfullname = document.getElementById("fullname").value;
        if (userfullname === "") {
            this.setState({ fullnameRequired: "dispBlock" })
            document.getElementById("fullname").focus();
        }
        else {
            this.setState({ fullnameRequired: "dispNone" })
            this.setState({ fullname: userfullname });
            this.setState({ ModalIsOpen: false });
        }

    }

    //Close Image details modal popup
    ProfilecloseModalHandler = () => {
        this.setState({ ProfileModalIsOpen: false });
    }

    //When user Like any Image from modal popup
    //it increment or decrement by 1 if user like then increment by 1 and if user dislike it dicrement by 1
    //also it store value in session storage that reflect in Home page
    onlikeclickHandler = (id, activestatus) => {

        var count = 0;
        var likesarryobj = [];
        likesarryobj = this.state.likes;
        for (var like of likesarryobj) {
            if (like.id == id && like.likeactivestatus == false) {
                count = like.count;
                if (count == 0) {
                    count++;
                }
                like.count = count;
                like.likeactivestatus = true;
                break;
            }
            if (like.id == id && like.likeactivestatus == true) {
                count = like.count;
                count--;
                like.count = count;
                like.likeactivestatus = false;
                break;
            }
        }

        sessionStorage.setItem("likes", JSON.stringify(likesarryobj));
        this.setState({ likes: likesarryobj });

    }

    //user full name edit click handler
    inputUserfullnameChangeHandler = (e) => {
        this.setState({ fullname: e.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header loggedIn={true} showsearchbox={false} profilemenu={false} onloginprofilemenu={true} showaccountment={true}></Header>
                {
                    this.state.SecondAPIData != null ?
                        <div>

                            <div className="Headercontainer">
                                <div className="headerlogo">
                                    {/* <Avatar aria-label="recipe" src={profile_picture}
                            //aria-controls={this.state.menuId}
                            //className="login-button"
                            //onClick={this.handleToggle}
                            // ref={this.state.anchorRef}
                            //aria-controls={this.state.open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            style={{ width: "120px", height: "90px" }}>
                        </Avatar> */}
                                    <img src={profile_picture}></img>
                                </div>
                                <div className="headercontent">
                                    <div className="childs1">
                                        <div>
                                            <h3>{this.state.username}</h3>
                                        </div>
                                        <Typography>
                                            <span className="userpostsdata">Posts: {this.state.totalposts}</span>     <span className="userpostsdata">Follows: {this.state.followd}</span>      <span className="userpostsdata">Followed By: {this.state.followedby}</span>
                                        </Typography>
                                        <Typography>
                                            <span>{this.state.fullname}</span>   <Fab color="secondary" aria-label="edit" onClick={this.openmodalHandler}><EditIcon /></Fab>
                                        </Typography>
                                    </div>
                                    <div>
                                        <Modal ariaHideApp={false} contentLabel="EditProfile"
                                            isOpen={this.state.ModalIsOpen}
                                            onRequestClose={this.closeModalHandler}
                                            style={customStyles}
                                        >
                                            <h1>Edit</h1>
                                            <FormControl required>
                                                <InputLabel htmlFor="fullname">Full Name</InputLabel>
                                                <Input id="fullname" type="text" fullname={this.state.fullname} onChange={this.inputUserfullnameChangeHandler} />
                                                <FormHelperText className={this.state.fullnameRequired}>
                                                    <span className="red">required</span>
                                                </FormHelperText>
                                            </FormControl>
                                            <br /><br />
                                            <Button variant="contained" color="primary" onClick={this.updatefullnameclickHandler}>UPDATE</Button>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={classes.root}>
                                    <GridList cellHeight={400} className={classes.gridList} cols={3}>
                                        {this.state.SecondAPIData.map((image) => (
                                            <GridListTile key={"images" + image.id} id={"imagesid" + image.id}>
                                                <img key={"image" + image.id} id={"imagid" + image.id} className="instapics" src={image.url} alt={image.text} onClick={() => this.imageclickHandler(image.id)} />
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                </div>
                                <div>
                                    <Modal ariaHideApp={false} contentLabel="EditProfile"
                                        isOpen={this.state.ProfileModalIsOpen}
                                        onRequestClose={this.ProfilecloseModalHandler}
                                        style={{ width: "50%" }}
                                    >
                                        <div className="profilemodalcontainer" >
                                            {this.state.filterdata.map(item => (
                                                <div key={"maindiv" + item.id}>
                                                    <div style={{ width: "50%", height: "50%", float: "left" }} >
                                                        <img key={"img" + item.id} id={"imgid" + item.id} src={item.url} style={{ width: "100%", height: "550px" }} />
                                                    </div>
                                                    <div style={{ width: "50%", height: "50%", float: "right" }}>
                                                        <div style={{ height: "100%" }}>
                                                            <Card style={{ height: "100%", minHeight: "550px" }} key={"card" + item.id}>
                                                                <CardContent>
                                                                    <div className="aligned">
                                                                        <Avatar aria-label="recipe" src={profile_picture}
                                                                            //aria-controls={this.state.menuId}                                                                    
                                                                            // onClick={this.handleToggle}
                                                                            ref={this.state.anchorRef}
                                                                            aria-controls={this.state.open ? 'menu-list-grow' : undefined}
                                                                            aria-haspopup="true"
                                                                            style={{ width: "50px", height: "40px" }}>
                                                                        </Avatar>
                                                                        <span className="spantext">{item.username}</span>
                                                                    </div>
                                                                    <div>
                                                                        <Divider variant="fullWidth" />
                                                                    </div>
                                                                    <Typography variant="body1" color="textPrimary" component="p">
                                                                        <br />
                                                                        <span style={{ fontWeight: "bold" }}>{item.text}</span><br />
                                                                        <span style={{ color: "#33C3FF" }}>{item.tags}</span><br />
                                                                    </Typography>
                                                                </CardContent>
                                                                <CardActions key={"cardaction1" + item.id}>
                                                                    <ul className="commentbox" style={{ listStyleType: "none" }} id="commentsList">
                                                                        {this.state.comments.filter(comment => comment.id == item.id).map((filteredComments, index) => (
                                                                            <li key={"li" + item.id + index} id={"liid" + item.id}><span className="displayusername">{item.username}:</span> {filteredComments.comment}</li>
                                                                        ))}
                                                                    </ul>
                                                                </CardActions>
                                                                <CardActions key={"cardaction4" + item.id} style={{ marginTop: "240px" }}>
                                                                    {this.state.likes.filter(like => like.id == item.id).map(filteredlike => (
                                                                        <IconButton className="MuiIconButton-update-root" aria-label="add to favorites" onClick={() => this.onlikeclickHandler(item.id, filteredlike.likeactivestatus)} key={"iconbutton" + item.id}>
                                                                            {
                                                                                filteredlike.likeactivestatus == false ?
                                                                                    <div>
                                                                                        <FavoriteBorderIcon />
                                                                                    </div>
                                                                                    :
                                                                                    <div>
                                                                                        <FavoriteIcon style={{ color: "red" }} />
                                                                                    </div>
                                                                            }
                                                                            <span key={"likecontentkey" + item.id} id={"likescontent" + item.id} className="likescontent" > {(filteredlike.count == 0 || filteredlike.count == 1) ? filteredlike.count == 0 ? " Like" : filteredlike.count + " Like" : filteredlike.count + " Likes"} </span>
                                                                        </IconButton>
                                                                    ))}
                                                                </CardActions>
                                                                <CardActions key={"cardaction2" + item.id}>
                                                                    <FormControl style={{ width: "100%" }}>
                                                                        <InputLabel htmlFor="commentinput">Add a comment</InputLabel>
                                                                        <Input id="commentinput" type="text" />
                                                                    </FormControl>
                                                                    <Button variant="contained" color="primary" style={{ marginBottom: "0px" }} onClick={() => this.addcommentClickHandler(this.state.username, item.id)}>Add</Button>
                                                                </CardActions>
                                                            </Card>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </Modal>
                                </div>
                            </div>
                        </div>
                        : <h2>Application request limit reached,please see in console log for instagram response</h2>
                }
            </div>

        )
    }
}

// export default Home;
// export default makeStyles(useStyles)(Home);
// export default Profile;
export default withStyles(styles)(Profile);