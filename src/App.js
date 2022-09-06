import './App.css';
import { useRef, useReducer, useEffect, useMemo, useState, useCallback } from "react"

const ACTION = {
  ADD: "add"
}

const reduce = (state, action) => {
  switch (action.type) {
    case ACTION.ADD:
      return {...state, count: origin(+action.number)}
  }
}

const origin = number => {
    const originTwoNumber = [2, 3]
    let arr = [], num, bool = false;

    for(let i = 2; i <= number; i++) {
      for(let j = 3; j < i; j++) {
        if(i % j !== 0 && i % 2 !== 0) {
          num = i;
          bool = true;
        } else {
          bool = false;
          break;
        }
      }
      bool && arr.push(num)
    }

    number > 3 && arr.unshift(...originTwoNumber);
    (number > 1 && number <= 3) && arr.unshift(2);
    return arr;
}

function App() {

  const handleNumber = useRef(null);
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reduce, { count: [] });

  const click = e => {
    // dispatch({ type: ACTION.ADD, number: handleNumber.current.value })
    // callBack();
  }

  useMemo(() => {
    dispatch({ type: ACTION.ADD, number: value })
  }, [value])
  
  // const callBack = useCallback(dispatch({ type: ACTION.ADD, number: value }), [value])

  return (
    <div className="App">
      <input ref={handleNumber} type="number" onChange={e => setValue(e.target.value)}/>
      <button onClick={click}>add</button>
      <div className='out'>
        {state.count.map((el, idx) => {
          return <div key={idx}>{el}</div>
        })}
      </div>
    </div>
  );
}

export default App;
