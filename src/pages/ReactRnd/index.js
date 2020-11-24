import React from "react";
import {Rnd} from "react-rnd";
  
function ReactRnd() {
    return (<div
      style={{
        width: "800px",
        height: "400px",
        border: '1px solid #000',
        margin: '0 auto'
      }}
    >
      <Rnd
        default={{
          x: 150,
          y: 205,
          width: 200,
          height: 190
        }}
        minWidth={100}
        // minHeight={190}
        bounds="parent"
      >
        <Box />
      </Rnd>
      <Rnd
        default={{
          x: 150,
          y: 205,
          width: 100,
          height: 190
        }}
        minWidth={100}
        // minHeight={190}
        bounds="parent"
      >
        <Box />
      </Rnd>
    </div>)
};

export default ReactRnd;


const Box = () => {
    return (
        <div style={{border: '1px solid grey', height: '100%'}} className="box-div">
            Text Box
        </div>
    )
}