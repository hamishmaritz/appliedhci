import React, { Component } from "react";
import Phone from './images/phoneusage.jpg'
 
class Home extends Component {
  render() {
    return (
      <div>    
        <h2>What method of smartphone file sharing is the most common, and is it the most effective?</h2>
        <img src={Phone} width={600} height={300} mode='fit' alt="Pie Graph" />
        <p>There is a variety of software that is available for users to use when sharing their photos. All of these software's offer a variety of options and customizations as well as other ways to make sharing photos easier.</p>
        <p>Out of all the software out there, we determined that there would be standard software options that the users would use to share photos. These software options are Messenger, Airdrop, Instagram, Email, and Bluetooth. Each of these software offers a variety of user experiences.</p>
        <p>We determined that out of these software options, that there would be a clear favorite among the user pool of 15 users. And from this pool, we would be able to determine which software would be favored, which software was the fastest to find, easiest to use and which software would allow the user to send a photo the quickest.</p>
        <h2>Team Members</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <box>Joshua Dales</box> <box>Michael Xie</box> <box>Hamish Maritz</box>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3>Applied Human Computer Interaction, 2019</h3>
      </div>
    );
  }
}
 
export default Home;