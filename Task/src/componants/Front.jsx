

import "/Users/adityajain/my/Hackathon/Task-manager/Task/src/App.css";
import bin from "/Users/adityajain/my/Hackathon/Task-manager/Task/src/assets/bin.svg";
import React, { useState, useEffect } from "react";
import cross from "/Users/adityajain/my/Hackathon/Task-manager/Task/src/assets/cross-circle.svg";
import check from "/Users/adityajain/my/Hackathon/Task-manager/Task/src/assets/check-circle.svg";





// Color palettes
const lightTheme = {
  background: "#F5F7FA",
  card: "#fff",
  text: "#222",
  accent: "#4A90E2",
  progress: "#50E3C2",
  checked: "#C6F6D5",
  tableHead: "#E3E8EE",
};
const darkTheme = {
  background: "#18181B",
  card: "#23272F",
  text: "#fff",
  accent: "#50E3C2",
  progress: "#4A90E2",
  checked: "#7CFC00",
  tableHead: "#23272F",
};

function Front() {
  // UI state
  const [showMain, setShowMain] = useState(false);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Listen for theme changes from other tabs/components
  useEffect(() => {
    const syncTheme = () => setDark(localStorage.getItem("theme") === "dark");
    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  // Task state
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [taskInput, setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [priorityInput, setPriorityInput] = useState("priority");

  // Priority order for sorting
  const priorityOrder = { high: 1, medium: 2, low: 3 };

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Add task handler
  const handleAdd = () => {
    if (!taskInput.trim() || !["high", "medium", "low"].includes(priorityInput)) {
      alert("Please enter a task and select a valid priority.");
      return;
    }
    const newTask = {
      id: Date.now(),
      text: taskInput,
      date: dateInput,
      priority: priorityInput,
      checked: false,
    };
    setTasks((prev) =>
      [...prev, newTask].sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
      )
    );
    setTaskInput("");
    setDateInput("");
    setPriorityInput("priority");
  };

  // Check/Uncheck handler
  const handleCheck = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  // Delete handler
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Progress calculation
  const completed = tasks.filter((t) => t.checked).length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  // Theme
  const theme = dark ? darkTheme : lightTheme;

  // Animation for first window
  const descAnim = showMain
    ? "opacity-0 translate-y-10 scale-95 pointer-events-none"
    : "opacity-100 translate-y-0 scale-100";

  // Responsive and modern styles
  return (
    <div
      style={{
        background: theme.background,
        minHeight: "100vh",
        transition: "background 0.4s",
      }}
      className={dark ? "dark" : ""}
    >
      {/* First minimalist window */}
      {!showMain && (
        <div className="flex flex-col items-center justify-center min-h-screen transition-all duration-700">
          <div
            className={`flex flex-col items-center justify-center p-10 rounded-3xl shadow-2xl bg-opacity-90 ${descAnim} transition-all duration-700`}
            style={{
              background: dark
                ? "rgba(35,39,47,0.95)"
                : "rgba(255,255,255,0.95)",
              color: theme.text,
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce">
              Welcome to TaskFlow
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-center max-w-xl animate-fade-in">
              Organize your day, prioritize what matters, and track your progress with a beautiful, minimalist, and responsive task manager.
            </p>
            <button
              className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-400 hover:to-blue-500 text-white px-8 py-3 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 animate-pulse"
              onClick={() => setShowMain(true)}
            >
              Get Started
            </button>
            <div className="mt-8">
              <button
                className="rounded-full px-4 py-2 border border-gray-400 text-sm"
                onClick={() => setDark((d) => !d)}
                aria-label="Toggle theme"
              >
                {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main app window */}
      {showMain && (
        <div className="flex flex-col justify-center items-center w-full min-h-screen transition-all duration-700">
          {/* Theme toggle */}
          <div className="fixed top-4 right-6 z-50">
            <button
              className="rounded-full px-4 py-2 border border-gray-400 text-sm bg-opacity-80"
              style={{
                background: dark ? "#23272F" : "#fff",
                color: theme.text,
              }}
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
            >
              {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          {/* Add Task Card */}
          <div
            className="flex flex-col items-center justify-center text-black p-8 rounded-3xl mt-24 mb-10 shadow-xl w-full max-w-2xl"
            style={{
              background: theme.card,
              color: theme.text,
              border: `1.5px solid ${theme.accent}22`,
            }}
          >
            <h1 className="mb-6 text-3xl font-bold text-center" style={{ color: theme.accent }}>
              Add a Task
            </h1>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <input
                id="task"
                type="text"
                className="h-12 rounded-2xl bg-gray-100 px-4 flex-1 text-base outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your task..."
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                style={{ color: theme.text, background: dark ? "#23272F" : "#F3F4F6" }}
              />
              <input
                id="date"
                type="date"
                className="h-12 rounded-2xl bg-gray-100 px-4 text-base outline-none focus:ring-2 focus:ring-blue-400"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                style={{ color: theme.text, background: dark ? "#23272F" : "#F3F4F6" }}
              />
              <select
                id="priority"
                className="h-12 rounded-2xl bg-gray-100 px-4 text-base outline-none focus:ring-2 focus:ring-blue-400"
                value={priorityInput}
                onChange={(e) => setPriorityInput(e.target.value)}
                style={{ color: theme.text, background: dark ? "#23272F" : "#F3F4F6" }}
              >
                <option value="priority">Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <button
                className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-400 hover:to-blue-500 text-white px-6 rounded-2xl text-lg font-semibold shadow transition-all duration-200"
                id="add"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-2xl mb-8 px-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-medium" style={{ color: theme.text }}>
                Progress
              </span>
              <span className="text-base font-semibold" style={{ color: theme.accent }}>
                {progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700" style={{ background: dark ? "#23272F" : "#E3E8EE" }}>
              <div
                className="h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${theme.progress} 0%, ${theme.accent} 100%)`,
                }}
              ></div>
            </div>
          </div>

          {/* Tasks Table */}
          <div className="w-full max-w-4xl px-2 pb-16">
            <div className="overflow-x-auto rounded-2xl shadow-lg">
              <table className="min-w-full text-base">
                <thead>
                  <tr style={{ background: theme.tableHead, }}>
                    <th className="px-5 py-3 text-lg font-semibold text-left" style={{ color: theme.text }}>
                      Task
                    </th>
                    <th className="px-5 py-3 text-lg font-semibold text-left" style={{ color: theme.text }}>
                      Due Date
                    </th>
                    <th className="px-5 py-3 text-lg font-semibold text-left" style={{ color: theme.text }}>
                      Status
                    </th>
                    <th className="px-5 py-3 text-lg font-semibold text-left" style={{ color: theme.text }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center py-6 text-lg" style={{ color: theme.text }}>
                        No tasks yet.
                      </td>
                    </tr>
                  )}
                  {tasks.map((task) => (
                    <tr
                      key={task.id}
                      className="transition-all duration-300"
                      style={{
                        background: task.checked ? theme.checked : "transparent",
                        color: task.checked ? "#222" : theme.text,
                        fontWeight: task.priority === "high" ? "bold" : "normal",
                        opacity: task.checked ? 0.7 : 1,
                      }}
                    >
                      <td className="px-5 py-4">{task.text}</td>
                      <td className="px-5 py-4">
                        {task.date ? task.date : <span className="italic text-gray-400">No due date</span>}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            task.checked
                              ? "bg-green-200 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {task.checked ? "Completed" : "Pending"}
                        </span>
                      </td>
                      <td className="px-5 py-4 flex gap-2">
                        <button
                          id="check"
                          onClick={() => handleCheck(task.id)}
                          aria-label="Check"
                          className="focus:outline-none"
                        >
                          <img
                            src={task.checked ? cross : check}
                            alt="status"
                            className="bg-white px-2 py-1 rounded-xl mx-1 shadow"
                            style={{
                              filter: task.checked ? "grayscale(0.5)" : "none",
                              transition: "filter 0.2s",
                            }}
                          />
                        </button>
                        <button
                          id="delete"
                          onClick={() => handleDelete(task.id)}
                          aria-label="Delete"
                          className="focus:outline-none"
                        >
                          <img
                            src={bin}
                            alt="delete"
                            className="bg-white px-2 py-1 rounded-xl shadow"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Front;