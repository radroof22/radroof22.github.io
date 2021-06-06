import React from 'react'
import Layout from '../components/Layout'

export default function MachineLearning() {
    return (
        <Layout>
            <div className="container px-20">
                <h1 className="text-5xl py-5 mb-10 text-slime">Resume</h1>
                <h2 className="text-4xl italic mb-7">Formal resume and guide to my skills and knowledge</h2>
                <a className= "hover:text-slime pb-20 mb-10" href="https://docs.google.com/document/d/1Rf7nDRZKPexHhrDrGMDzDPXRaeOA3v_kXFBnw6eBA6Q/edit" >
                    <p>Downloadable Link</p>
                </a>
            </div>
        
            <div className="md:flex md:justify-around container p-2 mt-10">
                
                <iframe title="resume" width="960" height="1080" src="https://docs.google.com/document/d/e/2PACX-1vT_WfES3fX2MbaQeWtpO4kM2MxE9PVlO9WsH4NCwO71XRq6GLYac8i3UxgxE8UdE_YDCgQD4qydKE1G/pub?embedded=true"></iframe>
            </div>  
        </Layout>
    )
}
