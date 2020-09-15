import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Sidebar() {
  return (
    <List disablePadding dense>
      <ListItem button>
        <ListItemText>DASHBOARD</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>ABOUT</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>TEAM</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>LOGOUT</ListItemText>
      </ListItem>
    </List>
  );
}

export default Sidebar;
