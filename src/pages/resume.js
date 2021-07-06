import React from 'react'
import Layout from '../components/Layout'

export default function MachineLearning() {
    return (
        <Layout>
            <div className="container px-20">
                <h1 className="text-5xl py-5 mb-10 text-slime">Resume</h1>
                <h2 className="text-4xl italic mb-7">Formal resume and guide to my skills and knowledge</h2>
                <a className= "hover:text-slime pb-20 mb-10" href="https://drive.google.com/file/d/1jBLXd24co0p__7WptnC9nvX5OGRobfCv/view?usp=sharing" >
                    <p>Downloadable Link</p>
                </a>
            </div>
        
            <div className="md:flex md:justify-around container p-2 mt-10">
                
                <iframe title="resume" width="960" height="1080" src="https://drive.google.com/file/d/1jBLXd24co0p__7WptnC9nvX5OGRobfCv/view?usp=sharing"></iframe>
            </div>  
        </Layout>
    )
}
