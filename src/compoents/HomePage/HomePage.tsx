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
  const { setSelectValue, setIsStart, refreshToken } = useGlobalData();
  const navigation = useNavigate();
  const [values, setValues] = useState({
    level: "",
    category: "",
    name: "",
    surname: "",
  });
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (values.category === "" || values.level === "") {
      return;
    }

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
    options.map((option) => {
      if (a && option.ad === a.ad) {
        option = { ...option, selected: "selcted" };
        return setOptions(options);
      }
    });
  }, [a]);

  return (
    <form onSubmit={submitHandler} className={classes.formcontrol}>
      <h5 className="mb-4 border-bottom w-75">Please select category and difficulty</h5>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        required
        onChange={onChangeHandler}
        name="category"
      >
        <option selected disabled>
          Select a category
        </option>
        {categories.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        required
        name="level"
        onChange={onChangeHandler}
      >
        <option selected disabled>
          Select difficulty
        </option>
        {levels.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary">
        Start Quiz
      </button>
    </form>
  );
};

export default HomePage;
