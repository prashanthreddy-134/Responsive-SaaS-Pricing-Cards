import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Check, ArrowRight, Sparkles, Zap, ShieldCheck} from 'lucide-react';
import './style.css';

const plans = [
 {name:'Starter',desc:'For side projects and getting started',monthly:0,yearly:0,cta:'Start for free',icon:Sparkles,features:['1 workspace','Up to 3 projects','Community support','Core analytics']},
 {name:'Pro',desc:'For makers ready to move faster',monthly:19,yearly:15,cta:'Choose Pro',popular:true,icon:Zap,features:['Unlimited projects','Advanced analytics','Team collaboration','Priority support','Custom integrations']},
 {name:'Scale',desc:'Powerful tools for growing teams',monthly:49,yearly:39,cta:'Choose Scale',best:true,icon:ShieldCheck,features:['Everything in Pro','Unlimited team members','Role-based access','Dedicated onboarding','Advanced security']}
];
function App(){
 const [yearly,setYearly]=useState(false);
 return <main className="page"><nav><div className="brand"><span className="brand-mark">◈</span> orbit<span className="dot">.</span></div><span className="nav-note">Plans built for momentum</span><a className="nav-link" href="#plans">Explore plans <ArrowRight size={15}/></a></nav>
 <section className="hero"><div className="eyebrow"><span/> SIMPLE, TRANSPARENT PRICING</div><h1>Big ideas deserve<br/><em>better tools.</em></h1><p className="subtitle">Everything you need to build, launch, and grow — without the guesswork.</p>
 <div className="billing"><span className={!yearly?'selected':''}>Monthly</span><button className={'switch '+(yearly?'on':'')} onClick={()=>setYearly(!yearly)} aria-label="Toggle yearly billing"><i/></button><span className={yearly?'selected':''}>Yearly</span><small>Save up to 21%</small></div></section>
 <section className="cards" id="plans">{plans.map(p=>{let Icon=p.icon;return <article className={'plan '+(p.popular?'featured':'')} key={p.name}>{p.popular&&<div className="ribbon">MOST POPULAR</div>}{p.best&&<div className="best-ribbon">BEST VALUE</div>}<div className="plan-icon"><Icon size={20}/></div><h2>{p.name}</h2><p className="desc">{p.desc}</p><div className="price"><strong>${yearly?p.yearly:p.monthly}</strong><span>/ user / month</span></div><p className="billed">{p.monthly===0?'No credit card required':yearly?'Billed annually':'Billed monthly'}</p><button className={'cta '+(p.popular?'primary':'')} onClick={()=>alert(`${p.name} selected. Connect this button to your signup flow.`)}>{p.cta}<ArrowRight size={16}/></button><div className="rule"/><p className="includes">WHAT'S INCLUDED</p><ul>{p.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul></article>})}</section>
 <footer><span>◈ orbit.</span><span>Clear pricing. More building.</span><span>© 2026 Orbit UI</span></footer></main>
}
createRoot(document.getElementById('root')).render(<App/>);
