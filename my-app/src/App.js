import {List} from "./List";
import {useState} from "react";


function App() {
    const [visibleList, setVisibleList] = useState(true)

    const toggleVisibleList = () => {
        setVisibleList(visble => !visble)
    }
  return (
    <div>
        {visibleList && <List visibleList={visibleList}/>}
        <button onClick={toggleVisibleList}>показать / скрыть</button>
    </div>
  );
}

export default App;
