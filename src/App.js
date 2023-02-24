import { useState } from 'react';
import Mycomponet from './Mycomponet';


function App() {

  const [inputs, setInputs] = useState([]);

  const handleAddInput = () => {
    setInputs([...inputs, <input key={inputs.length} type="text" />]);
  };

  return (
    <div>
      {/* <input key={inputs.length} type="text" />
      {inputs.map((input) => input)}
      <button onClick={handleAddInput}>Add Input</button> */}

    <Mycomponet />

   
    </div>
  );
}


export default App;
