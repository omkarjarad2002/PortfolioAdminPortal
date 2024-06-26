"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";

function Home() {
  const [messages, setMessages] = useState([]);
  const [id, setId] = useState(null);

  const getMessages = async () => {
    try {
      const res = await axios.get(
        "https://portfolioserver-ts4z.onrender.com/getallmessages"
      );
      setMessages(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMsg = async (id: any) => {
    setId(id);
    console.log(id);
    await axios.delete(
      `https://portfolioserver-ts4z.onrender.com/deleteMSG/${id}`
    );
  };

  useEffect(() => {
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
                      <span className="absolute inset-0" />
                      {message.name}
                    </h3>
                    <p className="mt-5 text-sm text-gray-600">
                      {message.email}
                    </p>
                    <p className="mt-5 text-sm text-gray-600">
                      {message.phone}
                    </p>
                    <p className="mt-5 text-sm text-gray-600">{message.msg}</p>
                  </div>
                  <button
                    onClick={() => deleteMsg(message._id)}
                    className="bg-red-500 hover:bg-red-700 my-2 text-white font-bold py-1 px-4 rounded"
                  >
                    Delete
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
