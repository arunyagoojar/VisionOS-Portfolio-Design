
import port from "./icons/port.png";

const Me = () => {
  return (
    <div className="window2">
      <div className="ptop">
        <div className="left">
          <h1>Arunya Goojar</h1>
          <p>Aspiring Tech Engineer & Creative Mind</p>
          <div className="flex-container">
            <div className="flex-item">🚀</div>
            <div className="flex-item">
              Passionate about programming, design, UX, and web development
            </div>
          </div>
          <div className="flex-container">
            <div className="flex-item">🛠️</div>
            <div className="flex-item">
              Skilled in C++, HTML, CSS, and JavaScript
            </div>
          </div>
          <div className="flex-container">
            <div className="flex-item">💡</div>
            <div className="flex-item">
              Expert in design thinking for unique solutions
            </div>
          </div>
          <div className="flex-container">
            <div className="flex-item">🌐</div>
            <div className="flex-item">
              Ready to contribute a fresh perspective to any team or project
            </div>
          </div>
        </div>
        <img className="right" src={port} />
      </div>
    </div>
  );
};

export default Me;
