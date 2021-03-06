
import React from 'react'

export default function Card(props) {
    return (

    <a href={props.link} >
      <div className="static max-w-sm h-full rounded overflow-hidden shadow-lg bg-slime hover:bg-mint">
        <img className="w-full" src={props.image} alt={"Image of " + props.title} />
        <div className="px-6 py-4">
          <div className="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            {props.overview}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.tags.map((t, i) => 
            <span key={i} className="bg-mint inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{"#"+t.name}</span>
          )}
        </div>
      </div>
    </a>
  
    )
}