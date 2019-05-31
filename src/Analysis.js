import React, { Component } from "react";
import PieGraph from './images/piegraph.png'
import PieGraphTable from './images/piegraphtable.png'
import PieGraphEasy from './images/piegrapheasy.png'
class Method extends Component {
  render() {
    return (
      <div>
        <h2>Analysis</h2>
        <p>To make an accurate claim on which software is the most prefered, we will group the users based on what software they prefered. To more accurately show this we created a pie graph that shows what percentage of users that used which software. As our data was inputted into Microsoft excel we are able to highlight all the data and turn it into a Pie Chart that shows the percentage of users used which software.</p>
        <h4>Pie Graph Show User Software Preference</h4>
        <img src={PieGraph} width={600} height={300} mode='fit' alt="Pie Graph" />;
        <p>The Pie Chart shows that out of our 15 user pool X% used the software “Messenger” Whereas only Y% used “Air Drop” and only Z% used “Email”. From these results we can see that Messenger was the prefered photo sharing software out of the available photo sharing softwares.</p>
        <p>From our observations into software preference we looked into repeatability. Such as weather or not users would use their chosen software again. In addition we recorded which users used what software.</p>
        <img src={PieGraphTable} width={650} height={400} mode='fit' alt="Pie Graph" />;
        <p>Through our questioning we found that 90% of users would use the software again. To understand why they would want to use it again we questioned them on their reasoning behind using it. From our questioning we learnt that the reason is that it is intuitive and popular. This information was backed up by the previous question asking them about their experience going through the process of sharing a photo using their prefered software.</p>
        <img src={PieGraphEasy} width={650} height={400} mode='fit' alt="Pie Graph" />;
        <p>From this graph we can not that the 20% mark was from users who used AirDrop, that commented on the fact that it is the most simplest way of sharing photos for Iphone users. The 10% for “Hard” came from the one user that used Email to send a photo, who noted that there are probably faster ways of sharing images to other people. With the majority consensus of the process being “Very Easy” coming from the users who used the software Messenger to share an image.</p>
        <p>From our observation: Messenger was the most common method of file sharing even for iOS users, despite having services such as AirDrop. This is likely to do with the fact that facebook messenger is one of the largest and most popular social media platforms. Facebook Messenger features their own file sharing method within the app however the drawback is that it compresses the image. We asked our participants about their thoughts on the compression of the image and the feedback we received were mostly that it did not affect them for majority of the images that they send during their personal use or that they never really noticed it. Some users had actually told us that they would have considered another method of sharing if the photo needed to remain original quality and size that it was taken in. </p>
      </div>
    );
  }
}
 
export default Method;