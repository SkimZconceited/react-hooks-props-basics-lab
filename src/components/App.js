import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home 
      name = {user.name}
      color = {user.color}
      city = {user.city}
      />
      <About 
      // isTrue = {user.bio}
      // bio = {user.bio === true ? user.bio : null}
      // userPass={user}
      bio = {user.bio}
      githubFn={user.links.github}
      linkedinFn={user.links.linkedin}
      />
    </div>
  );
}

export default App;
