import React, { useState } from 'react';

function Index() {
  return (
    <div className='main'>
       <div>
      <h1>instruction</h1>
      <ul>
        <p>build a container</p>
        <p>create a separate function and use it as a component</p>
        <p>pass props "calory and food" and call it to the main component</p>
      </ul>
    </div>
      <Section />
    </div>
  );
}



function Section() {
  const foodList = [
    {
      name: "Pizza",
      cal: 56,
    },
    {
      name: "Berger",
      cal: 69,
    },
    {
      name: "Coke",
      cal: 500,
    },
    {
      name: "Brown",
      cal: 180,
    },
    {
      name: "Fried Rice",
      cal: 90,
    },
  ];

  return (
    <div>
      <h2>Calorie Read Only</h2>
      <div className="itemBox">
        {foodList.map((food, index) => (
          <ItemBox key={index} food={food.name} cal={food.cal} />
        ))}
      </div>
    </div>
  );
}

function ItemBox(props) {
  return (
    <div className="items">
      <h2>{props.food}</h2>
      <hr />
      <p>you have consumed {props.cal} cals today</p>
    </div>
  );
}

export default Index;
