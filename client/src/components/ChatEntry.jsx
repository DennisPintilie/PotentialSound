import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AvatarGroup } from "@material-ui/lab";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { dark, light } from "../styles/styles.js";

const ChatEntry = ({ participants, id_chat }) => {
  const members = [];

  const useStyles = makeStyles({
    avatar: {
      height: 50,
      width: 50,
      variant: "circle",
    },
    avatarGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "#white",
    },
    pDiv: {
      background: light,
      boxShadow: "0px 0px 0px 4px #8D99AE",
      border: "5px solid",
      borderColor: "white",
      margin: "0 auto",
      borderTopLeftRadius: "5px",
      bordeBottomRightRadius: "5px",
      position: "relative",
      alignItems: "center",
      height: "100px",
    },
  });
  const classes = useStyles();

  participants.forEach((member) => {
    if (member.chatId === id_chat) {
      members.push(member);
    }
  });

  return (
    <Link to={`/chats/${id_chat}`} style={{ textDecoration: "none", color: dark }}>
      <div className={classes.pDiv}>
        <div
          style={{
            resize: "both",
            overflow: "auto",
            width: "350px",
            textAlign: "center",
            fontSize: "20px",
          }}
          className={classes.text}
        >
          <label>Chat Members:</label>
          <AvatarGroup max={4} className={classes.avatarGroup}>
            {members.map(({ username, chatId, pic }, i) => (
              <Avatar key={i} id={chatId} alt={username} src={pic} className={classes.avatar} />
            ))}
          </AvatarGroup>
        </div>
      </div>
    </Link>
  );
};

ChatEntry.propTypes = {
  participants: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      id: PropTypes.number,
      propic: PropTypes.string,
    })
  ),
  id_chat: PropTypes.number.isRequired,
};

export default ChatEntry;
