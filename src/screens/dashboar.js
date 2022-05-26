import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Setting from "../component/setting";
import Messages from "../component/message";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Grid,
  Stack,
  Typography,
  Divider,
  Drawer,
  Avatar,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DashboardPart from "../component/dashboardPart"

import adjustPaper from "../common/adjustPaperfiile";
import SimplePaper from "../common/paper";

import SearchAppBar from "../common/appBar";

import Inbox from "../screens/inbox"

import Starred from "../screens/starred"
import SignIN from "../screens/signIn"



function Dashboard(props) {
  const { state } = useLocation();

  const navigate = useNavigate();

  const navigatedynamically = (path) => {
    navigate(`${path}`, { state: { name: "abc" } });
  };
  const list = (anchor) => (
    <Box>
      <List>
        {["Inbox", "Starred","Login"].map((text, index) => (
          <ListItem key={text} disablePadding>
            {/* <Link to ="/show"> */}
            <ListItemButton onClick={() => {navigatedynamically(text)}}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            {/* </Link> */}
          </ListItem>
        ))}
      </List>

    </Box>
  );

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={0}
          sm={0}
          lg={0}
          xl={3}
          padding={1}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Box >
            <Typography variant="button" sx={{marginLeft:"100px",fontSize:"32px"}} onClick ={() => {navigatedynamically("/dashboard")}}> 
              Dashboard
            </Typography>
            {list()}
          </Box>
        </Grid>
        <Routes>
        <Route path = "/*" element ={<DashboardPart/>} /> 
        <Route path = "/Inbox" element ={<Inbox/>} /> 
        <Route path = "/Starred" element ={<Starred/>} /> 
      </Routes>
      </Grid>
 
    
    </div>
  );
}

export default Dashboard;
