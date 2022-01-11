import {
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
  Autocomplete,
  Checkbox,
} from "@mui/material";
import classes from "./HomePage.module.css";
import { categories, levels } from "../consts";
import { useGlobalData } from "../../Context";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
let optionsa = [
  { ad: "amil", soyad: "rustam", selected: "" },
  { ad: "rustddam", soyad: "druddsstam", selected: "" },
  { ad: "sfsrustam", soyad: "sdfdsff", selected: "" },
];
const HomePage = () => {
  const { setSelectValue, setIsStart } = useGlobalData();
  const navigation = useNavigate();
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
    navigation("/questions");
  };

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const [select, setSelect] = useState("as");
  const [options, setOptions] = useState(optionsa);
  let a = options.find((option) => option.ad === select);

  useEffect(() => {
    options.map((option)=>{
      if (a&&option.ad===a.ad) {
       option= { ...option, selected: "selcted" }
       return setOptions(options)
      }
    })
    console.log(options);
  }, [a]);
  return (
    <form onSubmit={submitHandler} className={classes.formcontrol}>
      <Paper
        style={{
          padding: "20px 10% ",
          display: "flex",
          flexDirection: "column",
        }}
        elevation={4}
      >
        <TextField label="aml" required />
        <Select
          required
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
          required
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
          variant="contained"
          color="primary"
          className={classes.button}
          style={{ marginTop: "5px" }}
        >
          start
        </Button>
      </Paper>
      <Autocomplete
        style={{ marginTop: "40px" }}
        options={options}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        getOptionLabel={(option) => option.ad}
        groupBy={(option) => option.selected}
        renderOption={(props, option, { selected }) => (
          <li {...props} onChange={() => selected && setSelect(option.ad)}>
            {selected && setSelect(option.ad)}
            <Checkbox style={{ marginRight: "8px" }} checked={selected} />
            {option.ad}
          </li>
        )}
      />
    </form>
  );
};

export default HomePage;
