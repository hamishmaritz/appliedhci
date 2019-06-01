import React, { Component } from "react";
import Phone from './images/phoneusage.jpg'
 
class Home extends Component {
  render() {
    return (
      <div>
          
        <h2>What method of smartphone file sharing is the most common, and is it the most effective?</h2>
        <img src={Phone} width={600} height={300} mode='fit' alt="Pie Graph" />
        <h4> Text</h4>
        <p>There are a variety of softwares that are available for users to use when sharing their photos. All of these softwares offer a variety of options and customizations and other ways to make sharing photos easier.</p>
        <p>Out of all the softwares out there we determined that their would be common softwares that the users would use to share photos. These softwares are Messenger, Airdrop, Instagram, Email and Bluetooth. Each of these softwares offer a variety of user experiences.</p>
        <p>We determined that out of these softwares that their would be a clear favorite among the user pool of 15 users. And from this pool we would be able to determine which software would be favoured, which software was the fastest to find, easiest to use and which software would allow the user to send a photo the quickest.</p>
      </div>
    );
  }
}
 
export default Home;