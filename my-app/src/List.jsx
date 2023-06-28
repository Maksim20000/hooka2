import React, {useEffect, useState} from "react";

// export class List extends React.Component{
//     state = {
//         numbers: [1,2,3]
//     }
//     addNumbers = () => {
//         const number = Math.round(Math.random() * 10)
//         this.setState({
//             numbers: [...this.state.numbers, number]
//         })
//     }
//
//     componentDidMount() {
//         console.log('компонента была отражена')
//     }
//
//     componentWillUnmount() {
//         console.log('окмпонент будет удален')
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         if (this.state.numbers.length !== prevState.length){
//             console.log('количество неравно')
//         }
//     }
//
//     render() {
//         return(
//             <div>
//                 <ul>
//                     {
//                         this.state.numbers.map((num, index) => <li key={index}>{num}</li>)
//                     }
//                 </ul>
//                 <button onClick={this.addNumbers}>Новое число</button>
//             </div>
//         )
//     }
// }



export const List = (props) => {
    const [numbers, setNumbers] = useState([1,2])
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('компонент был отображен')
    }, [])

    useEffect(() => {
        console.log('компонент была обновлена')
    }, [numbers])
    useEffect(() => {
        console.log('пред')
        return() =>{
            console.log('компонент была удалена')
        }
    }, [])
    const addNumber = () => {
        const la = Math.round(Math.random() * 10)
        setNumbers([...numbers, la])
    }
  return(
      <div>
          <h2>
              {count}
          </h2>
          <button onClick={() => setCount(count + 1)}>+</button>
          <ul>
              {
                  numbers.map((num, index) => <li key={index}>{num}</li>)
              }
          </ul>
          <button onClick={addNumber}>Новое число</button>
      </div>
  )
}