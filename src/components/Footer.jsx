import "../App.css";
import profile from '../assets/profile.svg'
import insta from "../assets/instagram.svg";
import github from "../assets/github.svg";

export default function Footer1() {
  return (
    <footer className="px-4 py-8  w-full bg-black">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-white/30 ">
            <img src={profile} alt="a" />
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 text-white">
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8 text-white">
          <li>
            <a href={insta}>Instagram</a>
          </li>
          <li>
            <a href={github}>GitHub</a>
          </li>
         
        </ul>
      </div>
    </footer>
  )
}
