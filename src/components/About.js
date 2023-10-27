import React from "react";
import user from "../data/user";
import Links from "./Links";


function About(props) {
  console.log(props);
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio}
      {/* {isTrue === true ? props.bio : ""} */}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

     <Links 
     links = {props.links[0]}
     /> 
    </div>
  );
}

// function ChildAbout(props) {
//   const isTrue = props.bio;
//   if (isTrue) {
//     return <p>{props.bio}</p>

//   } else {
//     return <p></p>
//   }
// }

export default About;
