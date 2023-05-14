import React from 'react'
import Card from './Card'

function ImagesSection() {
  return (
    <div className="p-14">
      <div className="p-2 grid lg:grid-cols-4 md:grid-cols-3 md:gap-x-2 sm:grid-cols-2 grid-cols-1 gap-y-8 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default ImagesSection