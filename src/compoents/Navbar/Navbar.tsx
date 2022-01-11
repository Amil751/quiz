// import {
//   AppBar,
//   Avatar,
//   Box,
//   Button,
//   Toolbar,
//   Typography,
// } from "@mui/material";
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
    // <AppBar
    //   style={{ display: "flex", flexDirection: "row" }}
    //   classNameName={classNamees.main}
    // >
    //   <Toolbar
    //     style={{
    //       width: "100%",
    //       display: "flex",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <Typography variant="h3">
    //       <Link to="/">QuizApp</Link>
    //     </Typography>
    //     <Box display="flex" flexDirection="row">
    //       {auth && (
    //         <Button
    //           size="small"
    //           variant="contained"
    //           color="warning"
    //           onClick={logoutHandler}
    //         >
    //           Log out
    //         </Button>
    //       )}

    //       <Avatar alt="Cindy Baker" src={image} />
    //     </Box>
    //     <Box>
    //       <Link to="/download">Download</Link>
    //     </Box>
    //   </Toolbar>
    // </AppBar>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          QuizApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Download" className="nav-link">
                Downloads
              </Link>
            </li>
            <li className="nav-item">
              <p className="nav-link" onClick={()=>{setAuth(false); localStorage.removeItem("token")}}>Log out</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
