// import "/Users/adityajain/my/Hackathon/Task-manager/Task/src/App.css";
// import bin from "/Users/adityajain/my/Hackathon/Task-manager/Task/src/assets/bin.svg"
// import React from "react";
// import cross from "/Users/adityajain/my/Hackathon/Task-manager/Task/src/assets/cross-circle.svg"
// import check from "/Users/adityajain/my/Hackathon/Task-manager/Task/src/assets/check-circle.svg"


// function Tasks() {
//     let arr= {
//         task: [],
//         date: [],
//     }
    
//     return (
//       <>
      
    
//       <div className="flex flex-col justify-center items-center w-full h-screen bg-black text-white">
//         <h1 className="text-3xl md:text-7xl">Tasks</h1>
//         <table>

//           <tr >
//             <th className="w-fit px-5 py-3 text-2xl">Task</th>
//             <th className="w-fit px-5 text-2xl">Due Date</th>
//             <th className="w-fit px-5 text-2xl">Status</th>
//             <th className="w-fit px-5 text-2xl">Action</th>
  
//           </tr>
//           <tr>
//             <td className="w-fit px-5">Due Date</td>
//             <td className="w-fit px-5">Due Date</td>
//             <td className="w-fit px-5">Pending</td>

//             <td className="w-fit px-5"> 
//                 <button>
//                     <img src={check} alt="a" className="bg-white px-2 py-1 rounded-xl mx-1"/>
//                 </button>
//                 <button>
//                     <img src={bin} alt="a" className="bg-white px-2 py-1 rounded-xl"/>
//                 </button>
//             </td>
//           </tr>
           
//         </table>
//       </div>
//     </>
//   );
// }

// export default Tasks;

// import React, { useState } from 'react';

// function TodoList() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const handleInputChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, { text: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   const handleToggleComplete = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center w-full h-screen bg-black text-white">
//       <h1>To-Do List</h1>
//       <div>
//         <input
//           type="text"
//           value={newTask}
//           onChange={handleInputChange}
//           placeholder="Add new task"
//         />
//         <button onClick={handleAddTask}>Add</button>
//       </div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => handleToggleComplete(index)}
//             />
//             <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//               {task.text}
//             </span>
//             <button onClick={() => handleDeleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;