import React, { Component } from "react";
import HowLongGraph from './images/howlonggraph.png'
import HowLongShare from './images/howlongshare.png'
import HowLongExcel from './images/howlongexcel.png'
import {
  NavLink
} from "react-router-dom";
 //
class Method extends Component {
  render() {
    return (
      <div>
        <h2>Data</h2>
        <p>Included in this section is the data that has been gathered from conducting the tests.<br></br> Using Box and Whispers Plot Graphs allows to handle the broad data effortlessly and provides a clear summary of results. </p>
        <h3>How long it took to find a software</h3>
        <img src={HowLongGraph} width={800} height={300} mode='fit' alt="Pie Graph" />;
        <p>Fig 1, using a Box and Whisker Plot</p>
        <h3>How long it took to share a photo</h3>
        <img src={HowLongShare} width={800} height={300} mode='fit' alt="Pie Graph" />;
        <p>Fig 2, using a Box and Whisker Plot
        </p>
        <p>From the box plots we can see how long it took for our user pool of 15 users to find the software they wanted to use, which on average took 6.73 (Seconds). <br></br>This shows a level of familiarity with the software and that the software stands out to the user. In addition by referring to Fig 2 we can see that it took some<br></br> users longer to share the photo than others but on average users took 8.021 (Seconds) to share a photo. A more in depth analysis is done on the <NavLink to="/analysis">Analysis Page</NavLink></p>

    <h3>How long did it take to prepare the Software</h3>
    <table>
    <tr>
      <th>Users</th>
      <th>Time(Seconds)</th> 
      <th>Software</th>
    </tr>
    <tr>
      <td>1</td>
      <td>8.68</td> 
      <td>Airdrop</td>
    </tr>
    <tr>
      <td>2</td>
      <td>10.18</td> 
      <td>Airdrop</td>
    </tr>
    <tr>
      <td>3</td>
      <td>8.64</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>4</td>
      <td>3.07</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>5</td>
      <td>5.62</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>6</td>
      <td>5.48</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>7</td>
      <td>4.92</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>8</td>
      <td>14.05</td> 
      <td>Email</td>
    </tr>
    <tr>
      <td>9</td>
      <td>3.78</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>10</td>
      <td>2.96</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>11</td>
      <td>6.3</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>12</td>
      <td>12.24</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>13</td>
      <td>9.47</td> 
      <td>Airdrop</td>
    </tr>
    <tr>
      <td>14</td>
      <td>8.13</td> 
      <td>Airdrop</td>
    </tr>
    <tr>
      <td>15</td>
      <td>9.24</td> 
      <td>Airdrop</td>
    </tr>
    <tr>
      <td>Average: 7.517333333</td>
    </tr>
    <tr>
      <td>Quartile 1: 5.06</td>
    </tr>
    <tr>
      <td>Quartile 3: 9.355</td>
    </tr>
    <tr>
      <td>Median: 8.13</td>
    </tr>
    <tr>
      <td>Min: 2.96</td>
    </tr>
    <tr>
      <td>Max: 14.05</td>
    </tr>
</table>

<h3>How long did it took to send an image</h3>
    <table>
    <tr>
      <th>Users</th>
      <th>Time(Seconds)</th> 
      <th>Software</th>
    </tr>
    <tr>
      <td>1</td>
      <td>8.06</td> 
      <td>Airdrop</td>
    </tr>
    <tr>
      <td>2</td>
      <td>3.2</td> 
      <td>Airdrop</td>
    </tr>
    <tr>
      <td>3</td>
      <td>3.23</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>4</td>
      <td>5.27</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>5</td>
      <td>6.08</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>6</td>
      <td>4.86</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>7</td>
      <td>4.82</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>8</td>
      <td>12.02</td> 
      <td>Email</td>
    </tr>
    <tr>
      <td>9</td>
      <td>20.2</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>10</td>
      <td>12.47</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>11</td>
      <td>3.28</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>12</td>
      <td>8.1</td> 
      <td>Messenger</td>
    </tr>
    <tr>
      <td>13</td>
      <td>5.12</td> 
      <td>Airdrop</td>
    </tr>
    <tr>
      <td>14</td>
      <td>3.1</td> 
      <td>Airdrop</td>
    </tr>
    <tr>
      <td>15</td>
      <td>3.87</td> 
      <td>Airdrop</td>
    </tr>
    <tr>
      <td>Average: 6.912</td>
    </tr>
    <tr>
      <td>Quartile 1: 3.665</td>
    </tr>
    <tr>
      <td>Quartile 3: 8.08</td>
    </tr>
    <tr>
      <td>Median: 5.12</td>
    </tr>
    <tr>
      <td>Min: 3.1</td>
    </tr>
    <tr>
      <td>Max: 20.2</td>
    </tr>
</table>

<h3> Software Used </h3>
<table>
  <th>Messenger</th>
      <th>Airdrop</th> 
      <th>Email</th>
     <tr>
       <td>9</td>
       <td>5</td>
       <td>1</td>
       </tr>
</table>

<h3> How Easy Was It? </h3>
<table>
  <th>User</th>
      <th>Answer</th> 
     <tr>
       <td>1</td>
       <td>Very Easy</td>
       </tr>
       <tr>
       <td>2</td>
       <td>Very Easy</td>
       </tr>
       <tr>
       <td>3</td>
       <td>Very Easy</td>
       </tr>
       <tr>
       <td>4</td>
       <td>Very Easy</td>
       </tr>
       <tr>
       <td>5</td>
       <td>Simple</td>
       </tr>
       <tr>
       <td>6</td>
       <td>Very Easy</td>
       </tr>
       <tr>
       <td>7</td>
       <td>Simple</td>
       </tr>
       <tr>
       <td>8</td>
       <td>Hard</td>
       </tr>
       <tr>
       <td>9</td>
       <td>Very Easy</td>
       </tr>
       <tr>
       <td>10</td>
       <td>Very Easy</td>
       </tr>
       <tr>
       <td>11</td>
       <td>Easy</td>
       </tr>
       <tr>
       <td>12</td>
       <td>Easy</td>
       </tr>
       <tr>
       <td>13</td>
       <td>Very Easy</td>
       </tr>
       <tr>
       <td>14</td>
       <td>Very Easy</td>
       </tr>
       <tr>
       <td>15</td>
       <td>Simple</td>
       </tr>
</table>

<h3> Did you face any problems? </h3>
<table>
  <th>User</th>
      <th>Answer</th> 
       <tr>
       <td>1</td>
       <td>No</td>
       </tr>
       <tr>
       <td>2</td>
       <td>No</td>
       </tr>
       <tr>
       <td>3</td>
       <td>No</td>
       </tr>
       <tr>
       <td>4</td>
       <td>Lag</td>
       </tr>
       <tr>
       <td>5</td>
       <td>Yes</td>
       </tr>
       <tr>
       <td>6</td>
       <td>No</td>
       </tr>
       <tr>
       <td>7</td>
       <td>No</td>
       </tr>
       <tr>
       <td>8</td>
       <td>Yes</td>
       </tr>
       <tr>
       <td>9</td>
       <td>No</td>
       </tr>
       <tr>
       <td>10</td>
       <td>No</td>
       </tr>
       <tr>
       <td>11</td>
       <td>No</td>
       </tr>
       <tr>
       <td>12</td>
       <td>Yes, Phone Lag</td>
       </tr>
       <tr>
       <td>13</td>
       <td>No</td>
       </tr>
       <tr>
       <td>14</td>
       <td>Yes, Slow Load</td>
       </tr>
       <tr>
       <td>15</td>
       <td>No</td>
       </tr>
       </table>
       <h3> Would you use the same software agaian? </h3>
      <table>
    <th>User</th>
        <th>Answer</th> 
        <tr>
        <td>1</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>2</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>3</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>4</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>5</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>6</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>7</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>8</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>9</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>10</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>11</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>12</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>13</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>14</td>
        <td>Yes</td>
        </tr>
        <tr>
        <td>15</td>
        <td>Yes</td>
        </tr>
        </table>
      </div>
    );
  }
}
 
export default Method;