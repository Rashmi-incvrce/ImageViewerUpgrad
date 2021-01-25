import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
// import profile_picture from '../../assets/profilelogo.png';
import profile_picture from '../../assets/home_profile_pic.png';
import Divider from '@material-ui/core/Divider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const styles = theme => ({
    cardroot: {

        maxWidth: "100%",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    Gridroot: {
        flexGrow: 1,
    },
    Card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accesstokan: "",
            FirstAPIData: [],
            // homepagedata1: [],
            SecondAPIData: [],
            //  homepagedata2: [],
            filterdata: [],
            //  newdata: [],
            //  searchfiled: "",
            //  likecounts: 0,
            //   clickonlike: false,
            //   likeActive: false,
            //  dislikeActive: false,
            //  status: false,
            //  itemid: "",
            likeactivestatus: false,
            //  likecount: 0,
            //  likecomment: "",
            //   tempresponseData: [],
            //   profile_picture: "",
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

    //When User input any keyword ,the below method filtes image based on caption
    //if user enter any keyword that match with caption it show that image
    searchinputonchangeHandler = (childData) => {
        this.setState({ data: childData })
        let that = this;


        let newfilterdata = this.state.SecondAPIData;
        if (childData != "") {


            let newRow = newfilterdata.filter(({ text }) =>
                `${text || ''}`
                    .toLowerCase()
                    .includes(childData.toLowerCase())
            );

            this.setState({ SecondAPIData: newRow });
        }
        else {
            this.setState({ SecondAPIData: this.state.filterdata });
        }
    }

    //When User Like any image this method use to increment or dicrement count on that specific image
    //user can like any image, and this reflect on profile page as well
    onlikeclickHandler = (id, activestatus) => {

        var count = 1;

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

        //this.setState({ likes: testlikes });
        // likesarryobj.push({ id: id, likeactivestatus: activestatus });
        sessionStorage.setItem("likes", JSON.stringify(likesarryobj));
        this.setState({ likes: likesarryobj });

        //this.setState({ SecondAPIData: updatedata });

    }

    //the below method use to add comments 
    //user can add comments in any images
    //this method storage comments in session as well,that reflect on profile page
    addcommentClickHandler = (id, username) => {
        var commenttext = document.getElementById("commentinput" + id).value;


        if (commenttext == '') {
            alert("Please add Comment");
            document.getElementById("commentinput" + id).focus();
        }
        else {
            var spanobj = document.createElement("SPAN");

            document.getElementById("commentinput" + id).value = '';

            var usercomments = [];
            usercomments = this.state.comments;
            usercomments.push({ id: id, comment: commenttext });
            sessionStorage.setItem("comments", JSON.stringify(usercomments));
            this.setState({ comments: usercomments });
        }
    }


    componentDidMount() {

        //Check if user logged in or not if user not logged in it will redirect to login page
        var Isuserloggedin = sessionStorage.getItem("LoggedIn");
        if (Isuserloggedin == null || Isuserloggedin == false) {
            this.props.history.push('/');
        }


        //Initialize comments if any changes made in profile page
        var getcomments = sessionStorage.getItem("comments");
        if (getcomments != null && getcomments != "") {
            var comments = JSON.parse(getcomments);
            this.setState({ comments: comments });
        }
        else {
            var usercomments = [];
            usercomments = this.state.comments;
            usercomments.push({ id: 0, comment: "" });
            sessionStorage.setItem("comments", JSON.stringify(usercomments));
            this.setState({ comments: usercomments });
        }


        let that = this;
        this.setState({ accesstoken: sessionStorage.getItem("access-token") });



        // Get data from first endpoint which returns mainly id, and caption
        //  this id need to access in second api
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

                //Get data from 2nd endpoint for first endpoint media id wise
                //This API return collections (more than one image) not single data ,so need to store in array object rather than storing in single state variable like url ,text
                //Second API also return caption i have get caption from second api
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

                            newdata.push({ id: responsedata.id, media_type: responsedata.media_type, url: responsedata.media_url, username: responsedata.username, created_time: instadatetime, text: captiontext, tags: hashtagtext, likeactivestatus: false, count: 0 });
                            that.setState({ SecondAPIData: newdata, filterdata: newdata })
                            SetInitialLikes();
                            //Data is stored in sessiondata ,because instagram do not allow for multiple request,
                            // If i request and run application instagram says , you reached on max request for day try after some time
                            // So i have stored it in session, however it is not good practice if api return 1000s of recods
                            sessionStorage.setItem("sessiondata", JSON.stringify(newdata));

                        }
                        else {
                            // alert(xhrmedia.responseText);
                            // console.log(xhrobj.responseText);
                        }
                    });

                    //Second instagram api
                    // Please dont change anything here
                    // item id is use to get image related data for that specific image
                    // item id is provided from first api.
                    xhrmedia.open("GET", "https://graph.instagram.com/" + item.id + "?fields=id,media_type,media_url,username,timestamp,caption&access_token=" + sessionStorage.getItem('access-token'));
                    xhrmedia.send(datamedia);
                }
            }

            function SetInitialLikes() {
                //   debugger;
                var setlikes = [];
                for (var i of that.state.SecondAPIData) {
                    setlikes.push({ id: i.id, count: 0, likeactivestatus: false });
                }
                that.setState({ likes: setlikes });

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

                    if(filterresult.length > 0){
                        Likescomments.push({ id: filterresult[0].id, count: 0, likeactivestatus: false });                       
                        sessionStorage.setItem("likes", JSON.stringify(Likescomments));                 
                    }
                    that.setState({ likes: Likescomments });
                   
                }

            }





        })

        //This is first instagram api 
        // Please dont update anything here
        //fields is user id 
        //access-token for specific user
        xhrobj.open("GET", "https://graph.instagram.com/me/media?fields=17841444216306483,caption&access_token=" + sessionStorage.getItem('access-token'));
        xhrobj.send(dataShows);


        //Get Likes from session in case of any changes made for like in profile page
        var getlikes = sessionStorage.getItem("likes");
        if (getlikes != null && getlikes != "") {
            var Likescomments = JSON.parse(getlikes);
            this.setState({ likes: Likescomments });
        }
        else {
            var getdatafromsession = sessionStorage.getItem("sessiondata");
            if (getdatafromsession != null) {
                var parseseeiondata = JSON.parse(getdatafromsession);
                var setlikes = [];
                for (var i of parseseeiondata) {
                    setlikes.push({ id: i.id, count: 0, likeactivestatus: false });
                }
                that.setState({ likes: setlikes });
            }
        }

    }





    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header loggedIn={true} parentCallback={this.searchinputonchangeHandler} showsearchbox={true} profilemenu={true} onloginprofilemenu={true} showaccountment={true}></Header>
                <div className="maincontainer">

                    {
                        this.state.SecondAPIData != null ?
                            <div>
                                <Grid cols={4} className={classes.Gridroot} container spacing={3} id="gridcontainer">
                                    {this.state.SecondAPIData.map(item => (
                                        <Grid item xs={6} key={"grid" + item.id} id={"gridid" + item.id}>
                                            <Card className={classes.cardroot} key={"card" + item.id} id={"cardid" + item.id}>
                                                <CardHeader
                                                    avatar={
                                                        // <Avatar aria-label="recipe" className={classes.avatar} src={profile_picture}>
                                                        // </Avatar>
                                                        <img src={profile_picture} style={{ height: "110px", width: "120px" }}></img>
                                                    }
                                                    title={item.username}
                                                    subheader={item.created_time}
                                                />
                                                <CardContent key={"cardcontent" + item.id} id={"cardcontentid" + item.id}>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={item.url}
                                                        title={item.text}
                                                    />
                                                    <br />
                                                    <div>
                                                        <Divider variant="fullWidth" />
                                                    </div>
                                                    <Typography variant="body1" color="textPrimary" component="p">
                                                        <br />
                                                        <span style={{ fontWeight: "bold" }}>{item.text}</span><br />
                                                        <span style={{ color: "#33C3FF" }}>{item.tags}</span><br />
                                                        {this.state.likes.filter(like => like.id == item.id).map(filteredlike => (
                                                            <IconButton className="MuiIconButton-update-root" aria-label="add to favorites" onClick={() => this.onlikeclickHandler(item.id, filteredlike.likeactivestatus)} key={"iconbutton" + item.id} id={"iconbuttonid" + item.id}>
                                                                {
                                                                    filteredlike.likeactivestatus == false ?
                                                                        <div>
                                                                            <FavoriteBorderIcon key={"FavoriteBorderIcon" + item.id} />
                                                                        </div>
                                                                        :
                                                                        <div>
                                                                            <FavoriteIcon style={{ color: "red" }} key={"FavoriteIcon" + item.id} />
                                                                        </div>
                                                                }
                                                                <span id={"likescontent" + item.id} className="likescontent" > {(filteredlike.count == 0 || filteredlike.count == 1) ? filteredlike.count == 0 ? " Like" : filteredlike.count + " Like" : filteredlike.count + " Likes"} </span>
                                                            </IconButton>
                                                        ))}
                                                    </Typography>
                                                    <CardActions>
                                                        <div>
                                                            <ul key={"ullist" + item.id} className="commentbox" style={{ listStyleType: "none" }} id={"commentsList" + item.id}>
                                                                {this.state.comments.filter(comment => comment.id == item.id).map((filteredComments, index) => (
                                                                    <li key={"li" + index} id={"liid" + item.id}><span className="displayusername">{item.username}:</span> {filteredComments.comment}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </CardActions>
                                                    <CardActions>

                                                        <FormControl style={{ width: "100%" }}>
                                                            <InputLabel htmlFor={"commentinput" + item.id}>Add a comment</InputLabel>
                                                            <Input id={"commentinput" + item.id} type="text" key={"commentinputkey" + item.id} />
                                                        </FormControl>
                                                        <Button variant="contained" color="primary" style={{ marginBottom: "-10px" }} onClick={() => this.addcommentClickHandler(item.id, item.username)}>Add</Button>
                                                    </CardActions>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                            : <h2>Application request limit reached,please see in console log for instagram response</h2>
                    }

                </div>
            </div >
        )
    }
}

// export default Home;
// export default makeStyles(useStyles)(Home);
export default withStyles(styles)(Home);