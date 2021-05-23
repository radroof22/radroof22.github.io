import React from 'react'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-flow-col auto-cols-max container p-7 bg-night text-white mb-5">
        <div>
          <h1 className="text-5xl text-slime my-5">Hi 👋 I am <span className="font-bold text-white">Rohan</span></h1>
          <h2 className="text-4xl text-slime italic mb-10">Student, Developer, Innovator</h2>
          <div className="flex justify-between my-5">
            <button className="bg-slime hover:bg-slime-200 text-night py-2 px-4 mr-5 rounded">About Me</button>
            <button className="bg-night hover:bg-night-200 text-slime py-2 px-4 ml-5 rounded border border-solid border-slime">Featured Projects</button>
          </div>
        </div>
        <div className="container p-5">
          <p>Image</p>
        </div>
      </div>
      
      <div className="mt-5 conatiner p-7">
        <h2 className="text-4xl text-slime font-bold">About me</h2>
        <p className="py-3">My name is Rohan Mehta and I am interested in innovating and making the world a better place. I am currently at Souderton Area High School and going to attend Georgia Tech to study computer science. On my personal time, I enjoy web and mobile app development, machine learning, and data science. I also enjoy watching movies, spending time with friends and family, and Taco Bell. My side interests include learning about space and medicine</p>
        <p className="py-3">I am interested in Entrepeneurship and Innovation and helping others getting more and most with what they have.</p>
        <p className="py-3">I am currently working on building a mobile app to help weight lifters optimize their talent and social connections.</p>
      </div>
      <div className="mt-5 conatiner p-7">
        <h2 className="text-4xl text-slime font-bold">Featured Projects</h2>
          
      </div>
      
    </Layout>
  )
}
