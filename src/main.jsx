import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const skills=[
 ["React","Frontend"],["JavaScript","Frontend"],["Node.js","Backend"],["Express","Backend"],
 ["Python","Data"],["Pandas","Data"],["NumPy","Data"],["Matplotlib","Data"],
 ["Three.js","Visualization"],["Git","Tools"],["Canva","Design"],["Photoshop","Design"]
];

const projects=[
 {num:"01",title:"Ocean Data Visualization Platform",desc:"Interactive web platform concept for visualizing numerical ocean-model outputs and in-situ Argo observations for INCOIS / Smart India Hackathon.",tags:["Python","JSON","Three.js","Data Viz"],featured:true},
 {num:"02",title:"Fusion Arena",desc:"A coaching-brand concept with package design, social creatives and digital-first presentation built around a clear visual identity.",tags:["Canva","Design","Branding"]},
 {num:"03",title:"Data → Frontend Pipeline",desc:"A practical data-processing workflow that transforms large ocean datasets into lightweight, frontend-friendly JSON slices.",tags:["Python","Pandas","JSON","ETL"]}
];

function App(){
 const [dark,setDark]=useState(true);
 const [menu,setMenu]=useState(false);
 const [active,setActive]=useState("All");
 const filters=["All","Development","Data","Design"];
 const visibleSkills=skills.filter(s=>active==="All"||s[1]===active);
 return <div className={dark?"site dark":"site"}>
  <nav className="nav">
   <a className="logo" href="#home"><span>&lt;/&gt;</span> RJ<span className="dot">.</span></a>
   <div className={menu?"links open":"links"}>
    <a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#skills" onClick={()=>setMenu(false)}>Skills</a>
    <a href="#projects" onClick={()=>setMenu(false)}>Projects</a><a href="#experience" onClick={()=>setMenu(false)}>Experience</a>
   </div>
   <div className="navRight"><button className="theme" onClick={()=>setDark(!dark)}>{dark?"☼":"☾"}</button><a className="contactBtn" href="#contact">Let's talk ↗</a><button className="hamb" onClick={()=>setMenu(!menu)}>☰</button></div>
  </nav>

  <main>
   <section className="hero" id="home">
    <div className="heroCopy">
     <div className="status"><i/> AVAILABLE FOR BUILDING COOL THINGS</div>
     <p className="kicker">HELLO, I'M</p>
     <h1>Rajdeep<br/><em>Jha.</em></h1>
     <p className="lead">Developer • Data Explorer • Builder</p>
     <p className="intro">I like turning messy ideas and data into clean, useful digital experiences — from web interfaces to data pipelines and interactive visualizations.</p>
     <div className="heroBtns"><a className="primary" href="#projects">View my work <span>↓</span></a><a className="ghost" href="#about">More about me</a></div>
    </div>
    <div className="heroVisual">
      <div className="orb"><div className="orbInner">&lt;code<br/>build<br/>repeat /&gt;</div></div>
      <div className="float f1">PYTHON</div><div className="float f2">REACT</div><div className="float f3">DATA</div>
      <div className="gridline"/>
    </div>
   </section>

   <div className="ticker"><span>WEB DEVELOPMENT</span><b>✦</b><span>DATA SCIENCE</span><b>✦</b><span>3D VISUALIZATION</span><b>✦</b><span>MECHATRONICS</span><b>✦</b><span>CREATIVE DESIGN</span></div>

   <section className="section about" id="about">
    <div className="sectionLabel">01 / ABOUT</div>
    <div className="aboutGrid"><div><h2>Curious by default.<br/><em>Builder by choice.</em></h2></div>
    <div className="aboutText"><p>My interests sit at the intersection of <strong>software, data, visualization and hardware.</strong> I enjoy learning by making — whether that means building a React interface, processing a large dataset, or exploring robotics and mechatronics.</p><p>I've worked on academic and real-world projects, including an internship with <strong>BLW Engine Valves</strong> and a fully sponsored <strong>APAL Germany project</strong>.</p>
    <div className="facts"><div><b>96.43</b><small>JEE Main percentile</small></div><div><b>66</b><small>All Delhi Rank · CMSTCS</small></div><div><b>∞</b><small>Things left to build</small></div></div></div></div>
   </section>

   <section className="section" id="skills">
    <div className="sectionHead"><div><div className="sectionLabel">02 / TOOLKIT</div><h2>Things I work with.</h2></div>
    <div className="filters">{filters.map(f=><button className={active===f?"sel":""} onClick={()=>setActive(f)} key={f}>{f}</button>)}</div></div>
    <div className="skillGrid">{visibleSkills.map(([name,cat],i)=><div className="skill" key={name}><span>{String(i+1).padStart(2,"0")}</span><b>{name}</b><small>{cat}</small></div>)}</div>
   </section>

   <section className="section projects" id="projects">
    <div className="sectionHead"><div><div className="sectionLabel">03 / SELECTED WORK</div><h2>Built, not just planned.</h2></div><span className="count">03 PROJECTS</span></div>
    <div className="projectList">{projects.map(p=><article className={p.featured?"project featured":"project"} key={p.num}>
      <div className="projectNum">{p.num}</div><div className="projectBody"><div className="projectTop"><span>{p.featured?"FEATURED PROJECT":"PROJECT"}</span><span>↗</span></div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><i key={t}>{t}</i>)}</div></div>
      {p.featured&&<div className="projectArt"><div className="mapDots"/><div className="dataCard"><small>OCEAN MODEL</small><b>27.24°C</b><span>INDIAN OCEAN</span></div></div>}
    </article>)}</div>
   </section>

   <section className="section experience" id="experience">
    <div className="sectionLabel">04 / EXPERIENCE</div>
    <div className="timeline">
     <div className="timeItem"><span>2026 — PRESENT</span><div><h3>Smart India Hackathon · INCOIS Project</h3><p>Working on data processing for an interactive ocean visualization platform: cleaning model data, handling Argo observations, generating JSON and preparing data for frontend visualization.</p></div></div>
     <div className="timeItem"><span>PROJECT</span><div><h3>APAL Germany</h3><p>Selected for a fully sponsored international project, gaining exposure to collaborative technical work and cross-cultural learning.</p></div></div>
     <div className="timeItem"><span>INTERNSHIP</span><div><h3>BLW Engine Valves</h3><p>Industry exposure through an internship focused on engineering and manufacturing environments.</p></div></div>
    </div>
   </section>

   <section className="cta" id="contact">
    <div className="sectionLabel">05 / CONTACT</div><h2>Have an idea?<br/><em>Let's build it.</em></h2><p>I'm always interested in interesting projects, hackathons, collaborations and things worth learning.</p>
    <a href="mailto:261310033@nitdelhi.ac.in className="primary big">Start a conversation ↗</a>
   </section>
  </main>
  <footer><span>© 2026 RAJDEEP JHA</span><span>BUILT WITH REACT</span><span>DELHI, INDIA</span></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
