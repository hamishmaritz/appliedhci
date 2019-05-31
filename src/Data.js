import React, { Component } from "react";
import HowLongGraph from './images/howlonggraph.png'
import HowLongShare from './images/howlongshare.png'
import HowLongExcel from './images/howlongexcel.png'
 
class Method extends Component {
  render() {
    return (
      <div>
        <h2>Data</h2>
        <h3>Title</h3>
        <img src={HowLongGraph} width={800} height={300} mode='fit' alt="Pie Graph" />;
        <p>Info</p>
        <h3>Title</h3>
        <img src={HowLongShare} width={800} height={300} mode='fit' alt="Pie Graph" />;
        <p>Info
        </p>
        <h3>Need to fix and add my results(hamish)</h3>
        <img src={HowLongExcel} width={500} height={400} mode='fit' alt="Pie Graph" />;
        <p>Info
        </p>
      </div>
    );
  }
}
 
export default Method;