import React, { Component } from "react";
import Login from "./Login.jsx";
import HomeFeed from "./HomeFeed.jsx";
import Profile from "./Profile.jsx";
import CreatePostMessage from "./CreatePostMessage.jsx";
import PostFullMessage from "./PostFullMessage.jsx";
import CreateProfile from "./CreateProfile.jsx";
import UpdateProfile from "./UpdateProfile.jsx";
import ViewProfile from "./ViewProfile.jsx";
import Nav from "./Nav.jsx";
import Chats from "./Chats.jsx";
import Chat from "./Chat.jsx";
import VCRoom from "./VCRoom.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import CreateChat from "./CreateChat.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {},
      allChats: [],
    };

    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.getAllChats = this.getAllChats.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.getCurrentUser();
    this.getAllChats();
  }

  getCurrentUser() {
    axios
      .get("/currentUser")
      .then((user) => this.setState({ currentUser: user.data }))
      .catch((err) => console.warn("could not get current user.", err));
  }

  getAllChats() {
    axios
      .get("/allchats")
      .then((chats) => this.setState({ allChats: chats.data }))
      .catch((err) => console.warn("Could not get all chats", err));
  }

  toggleMenu() {
    const nav = document.getElementById("mySidenav");
    const menu = document.getElementById("menu");
    if (nav.style.display === "none") {
      nav.style.display = "block";
      menu.style.display = "none";
    } else {
      nav.style.display = "none";
      menu.style.display = "block";
    }
  }

  render() {
    const menu = (
      <div id="menu" style={{ fontSize: "28px", fontWeight: "bold" }} onClick={this.toggleMenu}>
        Menu
      </div>
    );
    const { currentUser, allChats } = this.state;
    return (
      <div>
        <Router>
          <Nav currentUser={currentUser} toggleMenu={this.toggleMenu} />
          <Switch>
            <Route exact={true} path="/" render={() => <Login />} />
            <Route
              exact={true}
              path="/home"
              render={() => <HomeFeed menu={menu} currentUser={currentUser} />}
            />
            <Route
              exact={true}
              path="/profile/:id"
              render={({ match }) => (
                <Profile menu={menu} match={match} currentUser={currentUser} />
              )}
            />
            <Route exact={true} path="/createPostMessage" render={() => <CreatePostMessage />} />
            <Route
              exact={true}
              path="/chats"
              render={() => <Chats menu={menu} allChats={allChats} currentUser={currentUser} />}
            />
            <Route
              exact={true}
              path="/fullMessage/:id"
              render={({ match }) => (
                <PostFullMessage currentUser={currentUser} match={match} menu={menu} />
              )}
            />
            <Route
              exact={true}
              path="/createChat"
              render={() => <CreateChat currentUser={currentUser} menu={menu} />}
            />
            <Route
              exact={true}
              path="/createProfile"
              render={() => <CreateProfile getCurrentUser={this.getCurrentUser} />}
            />
            <Route
              exact={true}
              path="/updateProfile"
              render={() => (
                <UpdateProfile
                  currentUser={currentUser}
                  menu={menu}
                  getCurrentUser={this.getCurrentUser}
                />
              )}
            />
            <Route
              exact={true}
              path="/chat/:id"
              render={({ match }) => <Chat match={match} currentUser={currentUser} menu={menu} />}
            />
            <Route
              exact={true}
              path="/viewprofile/:id"
              render={(props) => <ViewProfile menu={menu} {...props} />}
            />
            <Route
              exact={true}
              path="/room/:roomId"
              render={({ match }) => <VCRoom match={match} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
