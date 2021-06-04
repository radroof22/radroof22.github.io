import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Card() {
    return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slime">
      <StaticImage className="w-full" src="https://user-images.githubusercontent.com/23004551/119425305-1e756c80-bcd5-11eb-86af-e4d66b0dcda7.png" alt="Self-Driving Car" />
      <div className="px-6 py-4">
        <div className="text-gray-900 font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="bg-mint inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#python</span>
        <span className="bg-mint inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ml</span>
        <span className="bg-mint inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#robotics</span>
      </div>
    </div>
  
    )
}