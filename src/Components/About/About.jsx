import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpeg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p> Hi, I’m Ashutosh, a final-year B.Tech Electronics student at APJ Abdul Kalam University, India, passionate about technology and innovation, with a strong interest in AI, Data Science, Machine Learning, and Deep Learning.</p>
                <h3>Skills : </h3>
                <p>🔹 Coding languages : Python (DSA), Java(DSA), API Development.</p>
                <p>🔹 Data Technologies: SQL, MongoDB, Tableau, Power BI.</p>
                <p>🔹 Libraries: Pandas, NumPy, Matplotlib, Scikit-Learn, TensorFlow.</p>
                <p>🔹 GenAI Stack: LangChain, LangGraph, HuggingFace Transformers, RAG Pipelines, VectorDBs , LlamaIndex, Prompt Engineering .</p>
                <p>🔹 AI & Data Science: Machine learning, Deep learning, NLP, CV, LLMs.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p> Python DSA </p>
                    <div className="progress">
                        <div className="progress-fill" style={{width:"80%"}}></div>
                    </div>
                </div>

                <div className="about-skill">
                    <p> Basic Tools </p>
                    <div className="progress">
                        <div className="progress-fill" style={{width:"75%"}}></div>
                    </div>
                </div>

                <div className="about-skill">
                    <p> Data Science</p>
                    <div className="progress">
                        <div className="progress-fill" style={{width:"65%"}}></div>
                    </div>
                </div>

            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>0.3</h1>
            <p>YEARS OF EXPERIENCE</p>
         </div>
         <hr />
         <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
