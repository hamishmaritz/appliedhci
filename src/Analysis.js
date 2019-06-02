import React, { Component } from "react";
import PieGraph from './images/piegraph.png'
import PieGraphTable from './images/piegraphtable.png'
import PieGraphEasy from './images/piegrapheasy.png'
class Method extends Component {
  render() {
    return (
      <div>
        <h2>Analysis</h2>
        <p>To make an accurate claim on which software is the most preferred, we will group the users based on what software they preferred. To more accurately show this, we created a pie graph that shows what percentage of users that used which software. As our data was inputted into Microsoft Excel, we can highlight all the data and turn it into a Pie Chart that shows the percentage of users used which software.</p>
        <h4>Pie Graph Show User Software Preference</h4>
        <img src={PieGraph} width={600} height={300} mode='fit' alt="Pie Graph" />;
        <p>The Pie Chart shows that out of our 15 user pool X% used the software “Messenger” Whereas only Y% used “AirDrop” and only Z% used “Email.” From these results, we can see that Messenger was the preferred photo sharing software out of the available photo sharing software options.</p>
        <p>From our observations into software preference, we looked into repeatability. Such as whether or not users would use their chosen software again. Also, we recorded which users used what software.</p>
        <img src={PieGraphTable} width={650} height={400} mode='fit' alt="Pie Graph" />;
        <p>Through our questioning, we found that 90% of users would use the software again. To understand why they would want to use it again, we questioned them on their reasoning behind using it. From our questioning, we learned that the reason is that it is intuitive and accessible. This information was backed up by the previous question asking them about their experience going through the process of sharing a photo using their preferred software.</p>
        <img src={PieGraphEasy} width={650} height={400} mode='fit' alt="Pie Graph" />;
        <p>From this graph, we can note that the 20% mark was from users who used AirDrop, that commented on the fact that it is the simplest way of sharing photos for iPhone users. The 10% for “Hard” came from the one user that used Email to send a photo, who noted that there are probably faster ways of sharing images to other people. With the majority consensus of the process being “Very Easy” coming from the users who used the software Messenger to share an image.</p>
        <h3>From our observation: </h3>
        <p>Messenger was the most common method of file sharing even for iOS users, despite having services such as AirDrop. This is likely to do with the fact that Facebook messenger is one of the largest and most popular social media platforms. Facebook Messenger features its file sharing method within the app; however, the drawback is that it compresses the image. We asked our participants about their thoughts on the compression of the image, and the feedback we received was mostly that it did not affect them for a majority of the images that they send during their personal use or that they never really noticed it. Some users had told us that they would have considered another method of sharing if the photo needed to remain original quality and size that it was taken in. </p>
      </div>
    );
  }
}
 
export default Method;