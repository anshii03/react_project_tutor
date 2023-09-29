import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

// const About = () => {
//   return (
//     <>
//       <h1> About Component</h1>
//       <Profile name="anshika" color="blue"/>
//       <ProfileClass name="radhika" color="red" />
//     </> 
//   );
// };

class About extends React.Component {
  constructor() {
    super();

    console.log("Parent contsructor");
  }
  
  componentDidMount() {
      console.log("Parent Component Mounted");
  }

  componentDidUpdate() {
    console.log("Parent Component Updated");
  }

  componentWillUnmount() {
    console.log(" Parent Component unmounted");
  }


  render() {

    console.log("Parent rendered");
    return (
      <>
       <h1> About Component</h1>
       {/* <Profile name="anshika" color="blue"/> */}
       <ProfileClass name="radhika" color="red" />
    </> 
    )
  }
}

export default About;

// Functional components
// Class based components 

/**
 * Parent constructor
 * Parent rendered
 * Child Constructor
 * Child rendered
 * child mounted
 * parent mounted
 * Parent unmounted
 * Child unmounted
 */
  
