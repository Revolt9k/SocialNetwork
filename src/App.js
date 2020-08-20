import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
      <container>
          <Header />
          <Nav />
          <Profile />
      </container>
  );
}


export default App;
