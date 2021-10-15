import { useEffect, useState } from 'react';

function App() {
  const [ssssssssssssssssssssssssssssssssssssssss, setState] = useState<boolean>(false);
  useEffect(() => {
    setState(true);
    console.log(ssssssssssssssssssssssssssssssssssssssss);
  }, [ssssssssssssssssssssssssssssssssssssssss]);
  return <h2>Hello World</h2>;
}

export default App;
