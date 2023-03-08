import { projectAuth } from "firebase/config";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

interface NavBarProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  showLogout: boolean;
}

const NavBar = ({ setDarkMode, showLogout }: NavBarProps) => {

  const handleLogout = async (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();

    await projectAuth.signOut();
  }

  const handleLinkedIn = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();

    window.open("https://www.linkedin.com/in/bryan-maravilla-462525144/", "_blank", "noreferrer");
  }

  return (
    <nav className="pt-10 flex justify-between dark:text-white">
      <h1 className="text-xl font-burtons">my portfolio</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl"
            onClick={() => setDarkMode(prevState => !prevState)}
          />
        </li>
        <li>
          <AiFillLinkedin
            className="cursor-pointer ml-8 text-4xl"
            onClick={handleLinkedIn}
          />
        </li>
        {showLogout && (
          <li
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
            onClick={handleLogout}
          >Logout</li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
