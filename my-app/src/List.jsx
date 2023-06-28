import React from "react";
export class List extends React.Component{
    state = {
        numbers: [1,2,3]
    }
    // addNumbers: () => {
    //     let laee4 = Math.round(Math.random() * 10)
    //     setNumbers([...numbers, la])
    // }
    render() {
        return(
            <div>
                <ul>
                    {
                        this.state.numbers.map((num, index) => <li key={index}>{num}</li>)
                    }
                </ul>
                {/*<button onClick={addNumber}>Новое число</button>*/}
            </div>
        )
    }
}

// export const List = (props) => {
//     const [numbers, setNumbers] = useState([1,2])
//
//     const addNumber = () => {
//         const la = Math.round(Math.random() * 10)
//         setNumbers([...numbers, la])
//     }
//   return(
//       <div>
//           <ul>
//               {
//                   numbers.map((num, index) => <li key={index}>{num}</li>)
//               }
//           </ul>
//           <button onClick={addNumber}>Новое число</button>
//       </div>
//   )
// }