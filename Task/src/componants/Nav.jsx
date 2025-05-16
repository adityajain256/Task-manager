import React from 'react'
import '/Users/adityajain/my/Hackathon/Task-manager/Task/src/App.css'
import insta from '/Users/adityajain/my/Hackathon/Task-manager/Task/src/assets/instagram.svg'
import github from '/Users/adityajain/my/Hackathon/Task-manager/Task/src/assets/github.svg'
function Nav() {
  return (

    <>
    <header className = "p-4 dark:bg-gray-800 dark:text-gray-100 fixed w-full top-0">
          <div className="container flex justify-between h-16 mx-auto">
            <a
              href="/Users/adityajain/my/Hackathon/Task-manager/Task/index.html"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <h1 className='font-mono text-2xl md:text-3xl'>Task Manager</h1>
            </a>
            

          </div>
            
        </header>
    
    </>
  )
}

export default Nav