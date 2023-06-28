import {useState} from "react";


function App() {
    const [numbers, setNumbers] = useState([1,2])

    const addNumber = () => {
        const la = 3
        setNumbers([...numbers, la])
    }
  return (
    <div>
      <ul>
          {
              numbers.map((num, index) => <li key={index}>{num}</li>)
          }
      </ul>
      <button onClick={addNumber}>Новое число</button>
    </div>
  );
}

export default App;
