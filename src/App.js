import { useState } from 'react';
import { Rnd } from 'react-rnd';

function App() {
  const [state, setState] = useState({
    x: 5,
    y: 5,
    height: '250px',
    width: '200px',
  });

  const styleOne = {
    width: '600px',
    height: '600px',
    border: 'solid 1px #ddd',
    background: 'crimson',
  };

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f0f0',
    border: 'solid 1px #ddd',
  };

  return (
    <div className='cool-grid' style={styleOne}>
      <Rnd
        style={style}
        size={{ width: state.width, height: state.height }}
        position={{ x: state.x, y: state.y }}
        minHeight={60}
        minWidth={200}
        dragGrid={[5, 50]}
        bounds={'parent'}
        onDragStop={(e, d) => {
          setState({ x: d.x, y: d.y });
        }}
        onResize={(e, direction, ref, delta, position) => {
          setState({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            ...position,
          });
        }}
      >
        <div className='react-dnd'>
          <p>moveMeAround</p>
        </div>
      </Rnd>
      <Rnd style={style} bounds={'parent'} dragGrid={[5, 20]}>
        <div>
          <p>GRID PART</p>
        </div>
      </Rnd>
    </div>
  );
}

export default App;
