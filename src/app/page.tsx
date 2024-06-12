"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import swal from "sweetalert";

function page() {
  // const [projects, setProjects] = useState([]);

  // const [file, setFile] = useState("");

  // const changeImage = (e: any) => {
  //   const files = e.target.files;

  //   if (!files) {
  //     return;
  //   }

  //   const file = files[0];
  //   setFile(file);
  // };

  // const [project, setProject] = useState({
  //   name: "",
  //   description: "",
  //   file: "",
  // });

  // let name, value;

  // const handleInputs = (e: any) => {
  //   name = e.target.name;
  //   value = e.target.value;

  //   setProject({ ...project, [name]: value });
  // };

  // const uploadImage = async () => {
  //   const formdata = new FormData();
  //   formdata.append("file", file);
  //   const res = await axios.post(
  //     "https://portfolioserver-ts4z.onrender.com/uploadfile",
  //     formdata
  //   );
  //   return res;
  // };

  // const PostData = async (e: any) => {
  //   e.preventDefault();
  //   const file = await uploadImage();

  //   const { name, description } = project;

  //   try {
  //     const res = await axios.post(
  //       "https://portfolioserver-ts4z.onrender.com/addnewproject",
  //       {
  //         name: name,
  //         description: description,
  //         file: file.data.file.filename,
  //       }
  //     );

  //     if (res.status == 201) {
  //       swal("Good job!", "Project Added Successfully!", "success");
  //     }
  //     setProject({
  //       name: "",
  //       description: "",
  //       file: "",
  //     });
  //   } catch (error) {
  //     swal("Failure!", "Failure at the time of new project addtion!", "error");
  //   }
  // };

  // const getProjects = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:4000/getallprojects");

  //     console.log(res.data);
  //     setProjects(res.data);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    try {
      const res = await axios.get(
        "https://portfolioserver-ts4z.onrender.com/getallmessages"
      );
      console.log(res.data.message);
      setMessages(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getProjects();
    getMessages();
  }, []);

  return (
    <div>
      <div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Messages
              </h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {messages.map((message: any) => (
                <article
                  key={message.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">{message?.date}</time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="">
                        <span className="absolute inset-0" />
                        {message.name}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm text-gray-600">
                      {message.email}
                    </p>
                    <p className="mt-5 text-sm text-gray-600">
                      {message.phone}
                    </p>
                    <p className="mt-5 text-sm text-gray-600">{message.msg}</p>
                  </div>
                  {/* <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={`http://localhost:4000/uploads/${project.file}`}
                      // style={{
                      //   maxHeight: "150px",
                      //   height: "150px",
                      //   maxWidth: "300px",
                      //   width: "300px",
                      //   border: "1px solid red",
                      // }}
                      className="card-img-top"
                      alt={"..."}
                    />
                  </div> */}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container  px-10">
        <form>
          <div className="space-y-12">
            <div className=" pb-12">
              <h1 className=" text-4xl font-semibold leading-7 text-amber-600 py-10">
                Add New Project
              </h1>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        onChange={handleInputs}
                        className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-4 ">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      onChange={handleInputs}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Write a few sentences about your project.
                  </p>
                </div>

                <div className="col-span-4">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Add Project Screenshot
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-500"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-400">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            type="file"
                            autoComplete="off"
                            onChange={changeImage}
                            name="file"
                            className="form-control cursor-pointer"
                            id="file"
                          />
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-gray-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    onClick={PostData}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
}
export default page;
