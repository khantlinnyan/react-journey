import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  let num = 0;
  const [count, setCount] = useState(num);
  function increase() {
    setCount((num)=> num + 1);
    setCount((num)=> num + 1);
  }
  return (
    <div className="App">
      <CardList/>
      <p className="text-red600 text-lg mt-5">{count}</p>
      <button className="text-lg text-bold bg-red-600 rounded-sm p-2" onClick={increase}>Add num</button>
      
    </div>
  );
}
const cards = [
  {
  id: 1,
  image: "https://via.placeholder.com/150/92c952",
  title: "Card Title Two",
  description: "Hey8"
 }
,{
  id: 2,
  image: "https://via.placeholder.com/150/771796",
  title: "Card Title Two",
  description: "Hey2"
 }
,{
  id: 3,
  image: "https://via.placeholder.com/150/771796",
  title: "Card Title Three",
  description: "Hey3"
 }];
function CardList() {
  return <main className='card-list'>
  {cards.map((card)=> {
    const {image, title, description} = card
    return <Card key={card.id} {...card}/>
  })}
    
  </main>
}
function Card(props) {
  const {image , title, description} = props;
  return (
    <section className='card'>
      <img src={image}/>
      <h1 className="text-3xl text-" style={{marginTop: "1rem"}}>{title}</h1>
      <p className='text-lg'>{description}</p>
    </section>
  )
}

export default App;
