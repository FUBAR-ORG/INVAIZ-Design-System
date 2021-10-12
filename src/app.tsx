import { useEffect } from 'react';
import { Test } from './test';

function App() {
  useEffect(() =>{
    Test();
  },[])
  return <h2>Hello World</h2>;
}

export default App;