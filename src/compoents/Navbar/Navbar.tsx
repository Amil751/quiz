import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./Navbar.module.css";
import image from "../../images/Picture1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalData } from "../../Context";

const Navbar = () => {
  const navigate = useNavigate();
  const { setAuth, auth } = useGlobalData();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setAuth(false);
    navigate("/login", { replace: true });
  };
  return (
    <AppBar
      style={{ display: "flex", flexDirection: "row" }}
      className={classes.main}
    >
      <Toolbar
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">
          <Link to="/">QuizApp</Link>
        </Typography>
        <Box display="flex" flexDirection="row">
          {auth && (
            <Button
              size="small"
              variant="contained"
              color="warning"
              onClick={logoutHandler}
            >
              Log out
            </Button>
          )}

          <Avatar alt="Cindy Baker" src={image} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
