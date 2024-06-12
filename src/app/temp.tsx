"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function addProject() {
  const [file, setFile] = useState("");

  const changeImage = (e: any) => {
    const files = e.target.files;

    if (!files) {
      return;
    }

    const file = files[0];
    setFile(file);
  };
  const { id } = useParams();

  const [project, setProject] = useState({
    name: "",
    description: "",
    file: "",
  });

  let name, value;

  const handleInputs = (e: any) => {
    name = e.target.name;
    value = e.target.value;

    setProject({ ...project, [name]: value });
  };

  const uploadImage = async () => {
    const formdata = new FormData();
    formdata.append("file", file);
    const res = await axios.post("http://localhost:4000/uploadfile", formdata);
    return res;
  };

  const PostData = async (e: any) => {
    e.preventDefault();
    const file = await uploadImage();

    const { name, description } = project;

    const res = await fetch("http://localhost:4457/addnewproduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        name,
        description,
        file: file.data.file.filename,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("ERROR");
    } else {
      alert("New Product Added Successfully !");
      window.location.reload();
    }
  };

  return (
    <>
      {/*form for items addition */}
      <form className="container restodashboard pt-5">
        <div className="mb-3 row">
          <label htmlFor="product" className="col-sm-1 col-form-label">
            Product :
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleInputs}
              className="form-control"
              id="product"
            />
          </div>
          <label htmlFor="price" className="col-sm-1 col-form-label">
            Description :
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              autoComplete="off"
              name="price"
              onChange={handleInputs}
              className="form-control"
              id="price"
            />
          </div>

          <label htmlFor="file" className="col-sm-1 col-form-label  pt-4">
            Image :
          </label>
          <div className="col-sm-3 pt-4">
            <input
              type="file"
              autoComplete="off"
              name="file"
              onChange={changeImage}
              className="form-control"
              id="file"
            />
          </div>
        </div>
        <button className="col-sm-2 mt-5 btn btn-primary" onClick={PostData}>
          ADD PROJECT
        </button>
      </form>
    </>
  );
}

export default addProject;
