import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
      
    </div>
  );
}
function ExternalUsers (){
   const [users, setUsers] =useState([]);
  //  useEffect(()=>{}, [])
  // const myfunc = ()=>{}
   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data))
   }, [])
  return (
    <div>
      <h2>Extarnel Users</h2>
      <p> {users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return (
    <div style={{border: '2px solid red', margin: '20px', background:'purple', color:'white'}}>
      <h2>Name : {props.name}</h2>
      <h3>Email : {props.email}</h3>
    </div>
  )
}
// counter comment korsi app a
function Counter(){
  const [count, setCount] =useState(333);

 
 /*  const IncreaseCount = () =>{
    const newCount = count +1
    setCount(newCount);
  } */
  // sortcut
  const IncreaseCount = () => setCount(count +1);
  const DecreaseCount = () => setCount(count -1);

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  )
}
// app sortcut er vitore silo
 /* const products =[
    {name: 'laptop' , price:'53000'},
    {name: 'phone' , price:'13000'},
    {name: 'wacth' , price:'500'},
    {name: 'tablet' , price:'153000'}
  ] */
{/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name='laptop' price='150000'></Product>
      <Product name='phone' price='75000'></Product>
      <Product name='wacth' price='4000'></Product> */}
/* function Product(props){
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
} */

export default App;
