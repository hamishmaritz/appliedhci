import React, { Component } from "react";
import HowLongGraph from './images/howlonggraph.png'
import HowLongShare from './images/howlongshare.png'
import HowLongExcel from './images/howlongexcel.png'
 
class Method extends Component {
  render() {
    return (
      <div>
        <h2>Data</h2>
        <p>Included in this section is the data that has been gathered from conducting the tests</p>
        <h3>Title</h3>
        <img src={HowLongGraph} width={800} height={300} mode='fit' alt="Pie Graph" />;
        <p>Fig 1</p>
        <h3>Title</h3>
        <img src={HowLongShare} width={800} height={300} mode='fit' alt="Pie Graph" />;
        <p>Fig 2
        </p>
        <h3>Need to fix and add my results(hamish)</h3>
        <img src={HowLongExcel} width={500} height={400} mode='fit' alt="Pie Graph" />;
        <p>Fig 3
        </p>
      </div>
    );
  }
}
 
export default Method;