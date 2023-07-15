import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import profile from "./icons/profile.svg";
import skill from "./icons/skill.svg";
import time from "./icons/time.svg";
import theme from "./icons/theme.png";
import update from "./icons/update.png";
import todo from "./icons/todo.svg";
import blog from "./icons/blog.svg";

//window 2 pages
import Me from "./me";
import Skills from "./skills";
import Experience from "./experience";

const Window2 = ({ content }) => {
  const [activeContent, setActiveContent] = useState(content);
  const [animationClass, setAnimationClass] = useState("slide-in");

  useEffect(() => {
    setAnimationClass("slide-out");
    const timeout = setTimeout(() => {
      setActiveContent(content);
      setAnimationClass("slide-in");
    }, 300);
    return () => clearTimeout(timeout);
  }, [content]);

  return (
    <div className="window2">
      {activeContent === "Me" && (
        <div key="Me" className={animationClass}>
          <Me />
        </div>
      )}
      {activeContent === "Skills" && (
        <div key="Skills" className={animationClass}>
          <Skills />
        </div>
      )}
      {activeContent === "Experience" && (
        <div key="Experience" className={animationClass}>
          <Experience />
        </div>
      )}
    </div>
  );
};
Window2.propTypes = {
  content: PropTypes.string.isRequired,
};
const Mainwindow = () => {
  const [content, setContent] = useState("Me"); // Set the initial content to "Me"

  const handleClick = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="section2">
      <div className="window1">
        <div className="top">
          <h3>Hello!</h3>
          <p>Welcome to my portfolio</p>
        </div>
        <div className="menu">
          <a href="#" className="menulinks" onClick={() => handleClick("Me")}>
            <img className="profile" src={profile} />
            <h4>Me</h4>
          </a>
          <a href="#" className="menulinks" onClick={() => handleClick("Skills")}>
            <img className="profile" src={skill} />
            <h4>Skills</h4>
          </a>
          <a href="#" className="menulinks" onClick={() => handleClick("Experience")}>
            <img className="profile" src={time} />
            <h4>Experience</h4>
          </a>
        </div>
        <div className="bottom">
          <h4>Projects</h4>
          <p>My learning experience</p>
        </div>
        <div className="menu2">
          <a href="https://github.com/arunyagoojar/Modern-Design-Blog-Builder-Solution" className="menulinks">
            <img className="profile" src={blog} />
            <h4>Blog Solution</h4>
          </a>
          <a href="https://arunyagoojar.me/react-tasks/" className="menulinks">
            <img className="profile" src={todo} />
            <h4>React Tasks</h4>
          </a>
          <a href="https://arunyagoojar.me/Easy-Eye/" className="menulinks">
            <img className="profile" src={theme} />
            <h4>Easy Eye Theme</h4>
          </a>
          <a href="https://mocupdate.tech" className="menulinks">
            <img className="profile" src={update} />
            <h4>Moc Update</h4>
          </a>
        </div>
      </div>
      <Window2 content={content} />
    </div>
  );
};

export default Mainwindow;
