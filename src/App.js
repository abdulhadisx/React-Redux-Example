import "./App.css"
import { useDispatch,useSelector } from "react-redux";
import{incNumber,decNumber} from "./actions/index"

const App=()=> {
  const myState=useSelector((state)=>state.changeNumber)
  const dispatch =useDispatch();
  return (
    <>
<div className="container">

  <h1>Increament/Decrement counter</h1>
  <h4>using React and Redux</h4>
  <div className="quantity">
    <a title="Decrement" className="quantity_minus" onClick={()=>dispatch(decNumber())}><span>-</span></a>
    <input type="text" className="quantity_input" name="quantity" value={myState}/>
    <a title="Increment" className="quantity_plus" onClick={()=>dispatch(incNumber())}><span>+</span></a>
  </div>
</div>
     

    </>
  );
}

export default App;
