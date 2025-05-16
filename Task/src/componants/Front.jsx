import React from "react";
import "/Users/adityajain/my/Hackathon/Task-manager/Task/src/App.css";

function Front() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen mainF">
      <div className="flex flex-col items-center justify-center text-black p-10 rounded-3xl top-28 left-28 bg-black md:left-75 w-fit h-fit">
        <div>
          <h1 className="text-white mb-9 text-3xl">Add tasks </h1>
        </div>
        <div className="flex flex-col justify-center items-center h-fit m-5 w-full">
          <div className="flex flex-col justify-center items-center md:flex-row">
            <input
            id="task"
              type="text"
              className=" h-11 rounded-2xl bg-white mb-2 md:mx-2"
              placeholder="Write Tasks"
            />
            <input
            id="date"
              type="date"
              className=" h-11 rounded-2xl bg-white mb-2 md:mx-2 px-3"
            />

            {/* <label htmlFor="priority" className="bg-white p-2 rounded-2xl">Priority</label> */}
            <select
              id="priority"
              className="bg-white py-2 rounded-3xl my-2 px-3 md:mx-2"
            >
              <option value="priority">Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <button className="bg-red-500 p-2 rounded-2xl text-xl px-3" id="add">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
