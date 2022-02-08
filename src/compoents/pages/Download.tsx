import React, { useEffect, useState } from "react";
import fileDownload from "js-file-download";
import { Button } from "@mui/material";
import { ModalBootstrap } from "../modal/ModalBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const Download = () => {
  const [file, setFile] = useState<any>();
  const [show, setShow] = useState<boolean>(false);
  const [fname, setfname] = useState("");
  useEffect(() => {
    const fetcthDownload = async () => {
      try {
        const download = await fetch(
          "http://api-dev.mol.eurodesign.az:8080/mol-api/v1/reports?reportType=B_USERS",
          {
            headers: {
              "Content-type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTBaSDlVIiwiZnVsbE5hbWUiOiJUT8SeUlVMIFRBTElCWkFExo8iLCJleHAiOjE2NDE1NTM4MTcsImlhdCI6MTY0MTU1MzYzNywiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQSJ9XSwic3RhdHVzIjoiQUNUSVZFIn0.QqJ6QK7Ee5difY7uH5d6VUh3sxLSHlLzYpq5xu1LqzsrEN5beBW8pfCaWwCpRIFnVvKl2_M8RsWhRWMi2E6Cig",
            },
          }
        );

        const filename = download.headers
          .get("content-disposition")
          ?.split(";")[1]
          .split("=")[1];
        if (filename) setfname(filename);
        const response = await download.blob();
        console.log(response);
        setFile(response);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetcthDownload();
  }, []);
  console.log(file);
  const downloadHandler = () => {
    fileDownload(file, fname);
    setShow(false);
  };
  const closeHandler = () => {
    setShow(false);
  };
  return (
    <div>
 <form action="courseselector.dll" method="get">
 <p>Which course would you like to watch today?</p>
  <label>Course:
  <select name="c">
   <optgroup label="8.01 Physics I: Classical Mechanics">
    <option value="8.01.1">Lecture 01: Powers of Ten</option>
    <option value="8.01.2">Lecture 02: 1D Kinematics</option>
    <option value="8.01.3">Lecture 03: Vectors</option>
    </optgroup>
   <optgroup label="8.02 Electricity and Magnetism">
    <option value="8.02.1">Lecture 01: What holds our world together?</option>
    <option value="8.02.2">Lecture 02: Electric Field</option>
    <option value="8.02.3">Lecture 03: Electric Flux</option>
    </optgroup>
   <optgroup label="8.03 Physics III: Vibrations and Waves">
    <option value="8.03.1">Lecture 01: Periodic Phenomenon</option>
    <option value="8.03.2">Lecture 02: Beats</option>
    <option value="8.03.3">Lecture 03: Forced Oscillations with Damping</option>
    </optgroup>
  </select>
 </label>
 <p><input type="submit" value="▶ Play"/></p>
</form>
      <ModalBootstrap
        downloadHandler={downloadHandler}
        closeHandler={closeHandler}
        show={show}
      />
      <Button onClick={() => setShow(true)}>Download</Button>
    </div>
  );
};
