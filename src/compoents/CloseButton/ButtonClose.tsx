import { CancelOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useGlobalData } from "../../Context";
import classes from "./ButtonClose.module.css";
import { useNavigate } from "react-router";
const ButtonClose = () => {
 
  const navigate = useNavigate();
  const { setIsStart, setScore,setAnswerIndex ,setDisable} = useGlobalData();
  const closeHandler = () => {
    navigate("/");
    setScore(0);
    setAnswerIndex(10)
    setDisable(false)
  };
 
  return (
    <>
      <button
              style={{ marginLeft: "95%" }}
              type="button"
              className="close border-0 rounded-circle "
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeHandler}
            >
              <span aria-hidden="true">&times;</span>
            </button>
      {/* <Button className={classes.btn} onClick={closeHandler}>
        <CancelOutlined style={{ color: "red" }} />
      </Button> */}
    </>
  );
};

export default ButtonClose;
