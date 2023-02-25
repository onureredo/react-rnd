import { Rnd } from 'react-rnd';

function App() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f0f0',
    border: 'solid 1px #ddd',
  };

  return (
    <Rnd
      style={style}
      default={{
        x: 0,
        y: 0,
        width: 600,
        height: 400,
      }}
    >
      <div className='react-dnd'>
        <p>moveMeAround</p>
      </div>
    </Rnd>
  );
}

export default App;
