import React, { Component } from "react";
 
class Method extends Component {
  render() {
    return (
      <div>
        <h2>Method</h2>
        <h3>Equipment:</h3>
        <p>For this experiment, the only equipment required was a smartphone of the users choice. 
          The experiment is also conducted in an area with a stable internet connection, this would be for the use of smartphone applications such as Messenger and Email software.  
          The choice of smartphone could also greatly impact the final outcome of the experiment as devices running Android operating systems do not have access to AirDrop, whilst iOS devices are quite limited with their methods of file sharing. 
        </p>
        <h3>Steps:</h3>
        <p>1. Find a willing participant and hand them the information sheet and consent sheet if necessary.</p>
        <p>2. Confirm with the participant that they are still willing to be a part of the experiment and ask them to sign the consent form if necessary.</p>
        <p>3. Explain to the participants about how the test will be conducted and brief them about how the timing of sending the image is going to work.</p>
        <p>4. Ensure that the participants smartphone is locked.</p>
        <p>5. A countdown will be given to the participant from 3, and the timing process begins.</p>
        <p>6. Once the participant has opened up their software of their preference and is ready to send, stop the timer and record time #1 (How long it took to prepare the software). </p>
        <p>7. Another countdown will be given to the participant from 3, this time tracking how long it takes for the software to send the photo. The recipient of the image (Team member) must physically receive the message and announce that they have received it before the timer is stopped for time #2 (How long it took to send the image).</p>

      </div>
    );
  }
}
 
export default Method;