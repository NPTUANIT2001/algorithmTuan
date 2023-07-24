import logo from "../../img/logo.png";

import "./styles.scss";
const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="header">
          <div className="logo-company">
            <img src={logo} alt="" height={"60px"} />
          </div>
          <div className="user">
            <div className="name-user">
              <div className="hand">
                <i>Handicrafted</i>
              </div>
              <div className="name">
                <p>Jim HLS</p>
              </div>
            </div>
            <div className="logo-user">
              <img src={logo} alt="" height={"50px"} />
            </div>
          </div>
        </div>
      </header>
      <div className="navigation">
        <div className="content">
          <h2 className="content1">A joke a day keeps the doctor away</h2>
          <p className="content2">
            If you joke wrong way, your teeth have to pay. (Serious)
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
