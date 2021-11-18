import { CancelOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useGlobalData } from "../../Context";
import classes from './ButtonClose.module.css'

const ButtonClose = () => {
    const { setIsStart,setScore} = useGlobalData();
    const closeHandler=()=>{
      setIsStart(true)
      setScore(0)
    }
  return (
    <>
      <Button className={classes.btn} onClick={closeHandler}>
        <CancelOutlined style={{ color: "red" }} />
      </Button>
    </>
  );
};

export default ButtonClose;
