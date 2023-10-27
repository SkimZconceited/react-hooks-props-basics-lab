import React from "react";
import Links from "./Links";

function About({bio = '', githubFn, linkedinFn}) {
  // console.log(userPass, bio, githubFn, linkedinFn);
  let isTrue = true;
  console.log(bio);
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {Boolean(bio) === isTrue ? <p>{bio}</p> : <p>{null}</p>} */}
      {bio && <p>{bio}</p>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

     <Links 
     github = {githubFn}
     linkedin = {linkedinFn}
     /> 
    </div>
  );
}

// function bioCheck(bio) {
//   // bio = 'Stanley'
//   console.log(bio)
//   let isTrue = true;
//   bio === isTrue ? bio : null
//   console.log(bioValue)
//   return bioValue;
// }
// function ChildAbout(props) {
//   const isTrue = props.bio;
//   if (isTrue) {
//     return <p>{props.bio}</p>

//   } else {
//     return <p></p>
//   }
// }

export default About;
