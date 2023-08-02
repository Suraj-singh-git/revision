import React, { useState } from 'react'

function index2() {
    const [isBoxVisible, setIsBoxVisible] = useState(true);

    const toggleBoxes = () => {
      setIsBoxVisible(!isBoxVisible);
    };
  return (
    <>
    <button onClick={toggleBoxes} className='btn'>Toggle Boxes</button>
    {isBoxVisible && (
        <div className="box">
        <div className="mainBox">
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div> 
        <div className="mainBox">
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
        </div>
        <div className="mainBox">
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div>
        <div className="mainBox">
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
        </div>
        <div className="mainBox">
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div>
        <div className="mainBox">
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
        </div>
        <div className="mainBox">
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
        </div>
        <div className="mainBox">
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
        </div>
      </div>
      )}
     {!isBoxVisible && (
        <div className="box-2 text-center">
            <div className="image-container">
                <img src="https://proza.ru/pics/2014/06/25/546.jpg" className='w-100 h-100' alt="Box Image" />
            </div>
            <div className="content">
                <h2>Heading</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                augue eu diam ultricies, et feugiat quam venenatis.
                </p>
            </div>
        </div>
      )}



     
        
    </>
  )
}

export default index2