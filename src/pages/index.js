import React from 'react'
import Layout from '../components/Layout'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Card from "../components/Card"
import Projects from "../projects.json"

export default function Home() {
  let featuredProjects = Projects.filter(item => item.featured);
  return (
    <Layout>
      <div className="md:flex md:justify-between container p-7 bg-night text-white  w-full">
        <div className="w-3/4">
          <h1 className="text-5xl text-slime my-5 mb-10">Hi, I am <span className="font-bold text-white">Rohan</span></h1>
          <h2 className="text-4xl text-slime italic mb-20">Student, Developer, Innovator</h2>
          <div className="md:flex my-5">
            <Link to="#about-me"><button className="bg-slime hover:bg-mint text-gray-900 py-2 px-4 mr-5 mb-2 rounded">About Me</button></Link>
            <Link to="#featured-projects"><button className="bg-night hover:bg-midnight text-slime py-2 px-4 mr-10 rounded border border-solid border-slime">Featured Projects</button></Link>
          </div>
        </div>
        <div className="flex flex-wrap w-1/4 content-center">
          <StaticImage className="rounded-3xl" src="../images/me.jpg" alt="A dinosaur" width={300} height={400}/>
        </div>
      </div>
      
      <div className="md:flex md:justify-between container container p-7">
        <div className="w-3/4" id="about-me">
          <h2 className="text-4xl text-slime font-bold">About me</h2>
          <p className="py-3">My name is Rohan Mehta and I am passionate about innovating and 
          making the world a better place. I am going to attend Georgia Tech to study 
          computer science in Fall of 2021. I build web and mobile 
          apps, machine learning, and data science projects. My hobbies include watching movies, 
          exercise, and Taco Bell. </p>
          <p className="py-3">I am interested in entrepeneurship and innovation to help my community. 
          Currrently, I am developing a mobile app to help weightlifters enhance their workout performance and social connections.</p>
        </div>
        <div className="w-1/4"></div>
      </div>
      <div className="mt-5 container" id="featured-projects">
        <h2 className="p-7 text-4xl text-slime font-bold">Featured Projects</h2>
      </div>
      <div className="md:flex md:justify-around container p-5">
        {featuredProjects.map((val, i) => 
          <div className="mb-2" key={i} >
          <Card image={val.image} overview={val.overview} tags={val.tags} title={val.title} link={val.link}/>
          </div>
        )}
      </div>      
      
    </Layout>
  )
}
