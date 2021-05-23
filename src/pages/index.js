import React from 'react'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="container p-7 bg-night text-white">
        <h1 className="text-4xl text-slime my-5">Hi, I am <span className="font-bold text-white">Rohan</span></h1>
        <h2 className="text-3xl text-slime italic">Student, Developer, Innovator</h2>
      </div>
    </Layout>
  )
}
