import React from 'react'
import Layout from '../components/Layout'
import FeaturedProject from "../components/Featured-Project"
import { StaticImage } from "gatsby-plugin-image"
import Card from "../components/Card"

export default function Home() {
  return (
    <Layout>
      <div className="md:flex md:justify-between container p-7 bg-night text-white mb-5 w-full">
        <div className="w-3/4">
          <h1 className="text-5xl text-slime my-5 mb-10">Hi <span role="img" aria-label="hi emoji">👋</span> I am <span className="font-bold text-white">Rohan</span></h1>
          <h2 className="text-4xl text-slime italic mb-20">Student, Developer, Innovator</h2>
          <div className="md:flex my-5">
            <button className="bg-slime hover:bg-mint text-gray-900 py-2 px-4 mr-5 rounded">About Me</button>
            <button className="bg-night hover:bg-midnight text-slime py-2 px-4 mr-10 rounded border border-solid border-slime">Featured Projects</button>
          </div>
        </div>
        <div className="flex flex-wrap w-1/4 content-center">
          <StaticImage className="rounded-3xl" src="../images/me.jpg" alt="A dinosaur" width={300} height={400}/>
        </div>
      </div>
      
      <div className="md:flex md:justify-between container mt-5 conatiner p-7">
        <div className="w-3/4">
          <h2 className="text-4xl text-slime font-bold">About me</h2>
          <p className="py-3">My name is Rohan Mehta and I am interested in innovating and making the world a better place. I am currently at Souderton Area High School and going to attend Georgia Tech to study computer science. On my personal time, I enjoy web and mobile app development, machine learning, and data science. I also enjoy watching movies, spending time with friends and family, and Taco Bell. My side interests include learning about space and medicine</p>
          <p className="py-3">I am interested in Entrepeneurship and Innovation and helping others getting more and most with what they have.</p>
          <p className="py-3">I am currently working on building a mobile app to help weight lifters optimize their talent and social connections.</p>
        </div>
        <div className="w-1/4"></div>
      </div>
      <div className="mt-5 container">
        <h2 className="p-7 text-4xl text-slime font-bold">Featured Projects</h2>
        
      </div>
      <div className="md:flex md:justify-around container p-5">
        <Card />
        <Card/>
        <Card />
      </div>      
      
    </Layout>
  )
}
