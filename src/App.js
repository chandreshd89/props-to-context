import React from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Auth from "./Auth";
import articles from "./data.json";
import people from "./got.json";
import "./styles.css";
import verifyLogin from "./utils";
import ErrorBoundary from "./ErrorBoundary";
import { UserContext } from "./UserContext";

export default class App extends React.Component {
  state = {
    navClosed: false,
    isLogin: false,
    isModalOpen: false,
    data: null,
    userInfo: null,
    people: null,
  };

  changeNavbar = () => {
    this.setState({ navClosed: !this.state.navClosed });
  };

  handleModal = (isOpen) => {
    this.setState({ isModalOpen: isOpen });
  };

  loginHandler = (email, password) => {
    verifyLogin(email, password).then((res) => {
      this.setState({
        isLogin: true,
        userInfo: res,
        data: articles,
        people: people,
      });
    });
  };

  logoutHandler = () => {
    this.setState({
      isLogin: false,
      data: null,
      people: null,
    });
  };

  render() {
    const { navClosed, isLogin, isModalOpen, data, userInfo, people } =
      this.state;
    return (
      <div className={`container ${navClosed ? "nav-closed" : ""}`}>
        <UserContext.Provider
          value={{
            isLogin,
            isModalOpen,
            data,
            userInfo,
            people,
            changeNavbar: this.changeNavbar,
            loginHandler: this.loginHandler,
            logoutHandler: this.logoutHandler,
            handleModal: this.handleModal,
          }}
        >
          {" "}
          <Header />
          <div className="main">
            <Sidebar userInfo={userInfo} isLogin={isLogin} />
            <ErrorBoundary>
              <Main
                isLogin={isLogin}
                data={data}
                people={people}
                userInfo={userInfo}
              />
            </ErrorBoundary>
          </div>
          {isModalOpen ? (
            <Auth
              handleModal={this.handleModal}
              loginHandler={this.loginHandler}
            />
          ) : (
            ""
          )}
        </UserContext.Provider>
      </div>
    );
  }
}
