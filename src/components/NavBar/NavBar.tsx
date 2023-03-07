import { projectAuth } from "firebase/config";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface NavBarProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  showLogout: boolean;
}

const NavBar = ({ setDarkMode, showLogout }: NavBarProps) => {

  const handleLogout = async (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();

    await projectAuth.signOut();
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
