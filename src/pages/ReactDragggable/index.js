import React from 'react';
import './react-grid-layout.css';
import './react-resizable.css'
import GridLayout from 'react-grid-layout';

function Draggable() {
    const layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ];
  return (
    <div>
        Drag n Drop
        <GridLayout preventCollision={false} className="layout" layout={layout} cols={12} rowHeight={30} width={600}>
        <div key="a">a</div>
        <div key="b"><span>&#125;</span></div>
        <div key="c">c</div>
      </GridLayout>
    </div>
  );
}

export default Draggable;