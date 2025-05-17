// import React from 'react'
// import '/Users/adityajain/my/Hackathon/Task-manager/Task/src/App.css'
// import insta from '/Users/adityajain/my/Hackathon/Task-manager/Task/src/assets/instagram.svg'
// import github from '/Users/adityajain/my/Hackathon/Task-manager/Task/src/assets/github.svg'
// import threeLine from '/Users/adityajain/my/Hackathon/task-manager/Task/src/assets/rundeck.svg'
// function Nav() {
//   return (

//     <>
//     <header className = "p-4 dark:bg-gray-800 dark:text-gray-100 fixed w-full top-0">
//           <div className="container flex justify-between h-16 mx-auto">
//             <a
//               href="/Users/adityajain/my/Hackathon/Task-manager/Task/index.html"
//               aria-label="Back to homepage"
//               className="flex items-center p-2"
//             >
//               <h1 className='font-mono text-2xl md:text-3xl'>Task Manager</h1>
//             </a>
            

//           </div>
            
//         </header>
    
//     </>
//   )
// }

// export default Nav

// import React, { useState, useEffect } from "react";
// import "../App.css";
// import insta from "../assets/instagram.svg";
// import github from "../assets/github.svg";
// import threeLine from "../assets/rundeck.svg";

// // Theme palettes (should match Front.jsx)
// const lightTheme = {
//   background: "#F5F7FA",
//   text: "#222",
//   accent: "#4A90E2",
// };
// const darkTheme = {
//   background: "#18181B",
//   text: "#fff",
//   accent: "#50E3C2",
// };

// function Nav() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

//   // Listen for theme changes from other tabs/components
//   useEffect(() => {
//     const syncTheme = () => setDark(localStorage.getItem("theme") === "dark");
//     window.addEventListener("storage", syncTheme);
//     return () => window.removeEventListener("storage", syncTheme);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", dark ? "dark" : "light");
//     document.documentElement.classList.toggle("dark", dark);
//   }, [dark]);

//   const theme = dark ? darkTheme : lightTheme;

//   return (
//     <header
//       className="fixed w-full top-0 z-50 transition-all"
//       style={{
//         background: theme.background,
//         color: theme.text,
//         borderBottom: `1.5px solid ${theme.accent}22`,
//         boxShadow: "0 2px 8px 0 rgba(31, 38, 135, 0.07)",
//       }}
//     >
//       <div className="container mx-auto flex justify-between items-center h-16 px-4">
//         {/* Logo/Title */}
//         <a href="/" className="flex items-center p-2">
//           <h1
//             className="font-mono text-2xl md:text-3xl font-bold"
//             style={{ color: theme.accent }}
//           >
//             Task Manager
//           </h1>
//         </a>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-6">
//           <a
//             href="https://instagram.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Instagram"
//             className="hover:scale-110 transition-transform"
//           >
//             <img src={insta} alt="Instagram" className="w-7 h-7" />
//           </a>
//           <a
//             href="https://github.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//             className="hover:scale-110 transition-transform"
//           >
//             <img src={github} alt="GitHub" className="w-7 h-7" />
//           </a>
//           <button
//             className="ml-4 rounded-full px-3 py-1 border border-gray-400 text-sm"
//             onClick={() => setDark((d) => !d)}
//             aria-label="Toggle theme"
//             style={{
//               background: dark ? "#23272F" : "#fff",
//               color: theme.text,
//             }}
//           >
//             {dark ? "🌞" : "🌙"}
//           </button>
//         </nav>

//         {/* Mobile Nav */}
//         <div className="md:hidden flex items-center">
//           <button
//             className="focus:outline-none"
//             onClick={() => setMenuOpen((m) => !m)}
//             aria-label="Open menu"
//           >
//             <img src={threeLine} alt="Menu" className="w-8 h-8" />
//           </button>
//           {/* Mobile Dropdown */}
//           {menuOpen && (
//             <div
//               className="absolute right-4 top-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg flex flex-col items-start p-4 gap-4 animate-fade-in"
//               style={{
//                 background: dark ? "#23272F" : "#fff",
//                 color: theme.text,
//                 minWidth: "160px",
//                 border: `1.5px solid ${theme.accent}22`,
//               }}
//             >
//               <a
//                 href="https://instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 hover:scale-105 transition-transform"
//                 aria-label="Instagram"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <img src={insta} alt="Instagram" className="w-6 h-6" />
//                 <span>Instagram</span>
//               </a>
//               <a
//                 href="https://github.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 hover:scale-105 transition-transform"
//                 aria-label="GitHub"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <img src={github} alt="GitHub" className="w-6 h-6" />
//                 <span>GitHub</span>
//               </a>
//               <button
//                 className="rounded-full px-3 py-1 border border-gray-400 text-sm w-full text-left"
//                 onClick={() => {
//                   setDark((d) => !d);
//                   setMenuOpen(false);
//                 }}
//                 aria-label="Toggle theme"
//                 style={{
//                   background: dark ? "#23272F" : "#fff",
//                   color: theme.text,
//                 }}
//               >
//                 {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Nav;

import React, { useState, useEffect } from "react";
import "../App.css";
import insta from "../assets/instagram.svg";
import github from "../assets/github.svg";
import threeLine from "../assets/rundeck.svg";

const lightTheme = {
  background: "#F5F7FA",
  text: "#222",
  accent: "#4A90E2",
};
const darkTheme = {
  background: "#18181B",
  text: "#fff",
  accent: "#50E3C2",
};

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  // Listen for theme changes from other tabs/components
  useEffect(() => {
    const syncTheme = () => setDark(localStorage.getItem("theme") === "dark");
    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const theme = dark ? darkTheme : lightTheme;

  return (
    <header
      className="fixed w-full top-0 z-50 transition-all"
      style={{
        background: theme.background,
        color: theme.text,
        borderBottom: `1.5px solid ${theme.accent}22`,
        boxShadow: "0 2px 8px 0 rgba(31, 38, 135, 0.07)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <a href="/" className="flex items-center p-2">
          <h1
            className="font-mono text-2xl md:text-3xl font-bold"
            style={{ color: theme.accent }}
          >
            Task Manager
          </h1>
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform bg-amber-50 px-2 py-1.5 rounded-xl"
          >
            <img src={insta} alt="Instagram" className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition-transform mr-16 bg-amber-50 px-2 py-1.5 rounded-xl"
          >
            <img src={github} alt="GitHub" className="w-7 h-7" />
          </a>
          {/* <button
            className="ml-4 rounded-full px-3 py-1 border border-gray-400 text-sm"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            style={{
              background: dark ? "#23272F" : "#fff",
              color: theme.text,
            }}
          >
            {dark ? "🌞" : "🌙"}
          </button> */}
        </nav>
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen((m) => !m)}
            aria-label="Open menu"
          >
            <img src={threeLine} alt="Menu" className="w-8 h-8" />
          </button>
          {menuOpen && (
            <div
              className="absolute right-4 top-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg flex flex-col items-start p-4 gap-4 animate-fade-in"
              style={{
                background: dark ? "#23272F" : "#fff",
                color: theme.text,
                minWidth: "160px",
                border: `1.5px solid ${theme.accent}22`,
              }}
            >
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
                aria-label="Instagram"
                onClick={() => setMenuOpen(false)}
              >
                <img src={insta} alt="Instagram" className="w-6 h-6" />
                <span>Instagram</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
                aria-label="GitHub"
                onClick={() => setMenuOpen(false)}
              >
                <img src={github} alt="GitHub" className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <button
                className="rounded-full px-3 py-1 border border-gray-400 text-sm w-full text-left"
                onClick={() => {
                  setDark((d) => !d);
                  setMenuOpen(false);
                }}
                aria-label="Toggle theme"
                style={{
                  background: dark ? "#23272F" : "#fff",
                  color: theme.text,
                }}
              >
                {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Nav;