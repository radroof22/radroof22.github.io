import React from 'react'
import Layout from '../components/Layout'
import Projects from "../projects.json"
import Card from "../components/Card"

export default function MachineLearning() {
    const mlProjects = Projects.filter(item => item.category === "machine-learning");
    return (
        <Layout>
            <div className="container px-20">
                <h1 className="text-5xl py-5 mb-10 text-slime">Resume</h1>
                <h2 className="text-4xl italic pb-20">Formal resume and guide to my skills and knowledge</h2>
            </div>
        
            <div className="md:flex md:justify-around container p-2">
                <iframe width="960" height="1080" src="https://docs.google.com/document/d/e/2PACX-1vT_WfES3fX2MbaQeWtpO4kM2MxE9PVlO9WsH4NCwO71XRq6GLYac8i3UxgxE8UdE_YDCgQD4qydKE1G/pub?embedded=true"></iframe>
            </div>  
        </Layout>
    )
}
