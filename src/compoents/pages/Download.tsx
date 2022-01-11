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
      try{
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
    
  }
    catch(err){
      console.log(err)
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
         <datalist className="mt-5 d-block" style={{display:"flex",zIndex:"2"}}>
           <input type="text" />
         <option value="amil"/>
         <option value="rustamov"/>
         <option value="aqil"/>
         <option value="elmin"/>
      </datalist>
      <ModalBootstrap
        downloadHandler={downloadHandler}
        closeHandler={closeHandler}
        show={show}
      />
      <Button onClick={() => setShow(true)}>Download</Button>
   
    </div>
  );
};
