import React from 'react'

function Card() {
  return (
    <div>
      <div className="border-2 border-gray-900 md:max-w-[260px] md:max-w-[220px] sm:max-w-[220px] max-w-[210px] rounded-lg mx-auto">
        <img
          className="md:w-[240px] md:h-[190px] md:w-[200px] md:h-[170px] w-[190px] h-[150px]  mx-auto p-2"
          src=""
          alt="no photo"
        />
        <div className="bg-gray-100 p-2 rounded-b-lg">
          <h1>image1</h1>
          <button>download</button>
        </div>
      </div>
    </div>
  );
}

export default Card