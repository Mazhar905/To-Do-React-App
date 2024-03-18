import Main from "./Main";
import { useState } from "react";
import { Sun, Moon } from "react-feather";
import { motion } from "framer-motion";

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
  console.log(localStorage.getItem("theme"));
  const changeTheme = () => {
    let t = !theme;
    setTheme(t);
    // console.log(theme)
    // localStorage.removeItem("theme");
    localStorage.setItem("theme", JSON.stringify(t));
  };
  return (
    <div id="mainContent" className={theme ? "whiteLayout" : "blackLayout"}>
      <motion.div
        drag
        whileHover={{ scale: 1.1 }}
        dragConstraints={{}}
        className="toggleBtn"
        style={{ color: theme ? "black" : "white" }}
        onClick={changeTheme}
      >
        <span>{theme ? "Light Theme" : "Dark Theme"}</span>
        <span>{theme ? <Sun /> : <Moon />}</span>
      </motion.div>
      <Main />
    </div>
  );
}

export default App;
