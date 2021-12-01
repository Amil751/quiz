import { AppBar, Avatar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import classes from "./Navbar.module.css";
import image from '../../images/Picture1.jpg'
import { useGlobalData } from "../../Context";
const Navbar = () => {
    const {isStart}=useGlobalData()
  return (
    <AppBar style={{ display: "flex", flexDirection: "row" }}>
      <Toolbar  style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
        <Typography variant="h3">QuizApp</Typography>
        <Box display="flex" flexDirection='row'>
          {isStart&&<Button variant="contained" color="warning">
            Login
          </Button>}
          <Button variant="contained" color="warning">
            Log out
          </Button>
          <Avatar alt="Cindy Baker" src={image} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
