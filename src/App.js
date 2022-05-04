import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {

  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> The Count Is : {count}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>dicrease</button>
      <button onClick={() => dispatch(incrementByAmount(50))}>increment by 50</button>
    </div>
  );
}

export default App;
