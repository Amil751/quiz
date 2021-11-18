import {
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import classes from "./HomePage.module.css";
import { categories, levels } from "../consts";
import { useGlobalData } from "../../Context";
import { useState } from "react";
import ButtonClose from "../Buttons/ButtonClose";

const HomePage = () => {
  const { setSelectValue ,setIsStart} = useGlobalData();
  
  const [values, setValues] = useState({
    level: "",
    category: "",
    name: "",
    surname: "",
  });
  const submitHandler = (e: any) => {
    e.preventDefault();
    setSelectValue(values);
    setIsStart(false);
  };

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  
  return (
    <form style={{ width: "40%" }} onSubmit={submitHandler}>
      <Paper
        style={{
          padding: "20px 10% ",
          display: "flex",
          flexDirection: "column",
        }}
        elevation={4}
      >
        <TextField
          label="Name"
          required
          className={classes.textfield}
          name="name"
          onChange={onChangeHandler}
        />
        <TextField
          label="Surname"
          required
          className={classes.textfield}
          name="surname"
          onChange={onChangeHandler}
        />
        <Select
          className={classes.select}
          name="category"
          onChange={onChangeHandler}
        >
          <MenuItem disabled>Kateqoriya secin</MenuItem>
          {categories.map((item) => (
            <MenuItem value={item.value}>{item.text}</MenuItem>
          ))}
        </Select>
        <Select
          className={classes.select}
          name="level"
          onChange={onChangeHandler}
        >
          <MenuItem selected disabled>
            level
          </MenuItem>
          {levels.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>

        <Button
          type="submit"
          variant='contained'
          color='primary'
          className={classes.button}
          style={{marginTop:'5px'}}
        >
          start
        </Button>
        
      </Paper>
    </form>
  );
};

export default HomePage;
