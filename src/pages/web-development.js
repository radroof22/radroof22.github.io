import React from 'react'
import Layout from '../components/Layout'
import Projects from "../projects.json"
import Card from "../components/Card"

export default function WebDevelopment() {
    const webProjects = Projects.filter(item => item.category === "web-development");
    return (
        <Layout>
            <div className="container px-20">
                <h1 className="text-5xl py-5 mb-10 text-slime">Web Development</h1>
                <h2 className="text-4xl italic pb-20">Building websites that create impactful good in the world</h2>
            </div>
            <div className="md:flex md:justify-around container p-5">
                {webProjects.map((val, i) => 
                    <div className="mb-2" key={i} >
                        <Card image={val.image} overview={val.overview} tags={val.tags} title={val.title} link={val.link}/>
                    </div>
                )}
            </div>  
        </Layout>
    )
}
