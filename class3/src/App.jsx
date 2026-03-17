import React from 'react'
import Card from './components/Card'
import amazon from './assets/amazon.jpg'
import adobe from './assets/adobe.jpg'
import google from './assets/google.jpg'
import ms from './assets/ms.jpg'
import netflix from './assets/netflix.jpg'
import spotify from './assets/spotify.jpg'

const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Amazon",
      logo: amazon,
      posted: "5 days ago",
      role: "Senior UI/UX Designer",
      type: "Part-Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
      applyLink: "#"
    },
    {
      id: 2,
      company: "Google",
      logo: google,
      posted: "2 days ago",
      role: "Product Designer",
      type: "Full-Time",
      level: "Mid Level",
      salary: "$100/hr",
      location: "Bangalore, India",
      applyLink: "#"
    },
    {
      id: 3,
      company: "Microsoft",
      logo: ms,
      posted: "1 week ago",
      role: "UX Researcher",
      type: "Full-Time",
      level: "Senior Level",
      salary: "$110/hr",
      location: "Hyderabad, India",
      applyLink: "#"
    },
    {
      id: 4,
      company: "Adobe",
      logo: adobe,
      posted: "3 days ago",
      role: "Visual Designer",
      type: "Contract",
      level: "Mid Level",
      salary: "$95/hr",
      location: "Pune, India",
      applyLink: "#"
    },
    {
      id: 5,
      company: "Netflix",
      logo: netflix,
      posted: "6 days ago",
      role: "UI Designer",
      type: "Full-Time",
      level: "Junior Level",
      salary: "$85/hr",
      location: "Delhi, India",
      applyLink: "#"
    },
    {
      id: 6,
      company: "Spotify",
      logo: spotify,
      posted: "4 days ago",
      role: "Interaction Designer",
      type: "Part-Time",
      level: "Senior Level",
      salary: "$105/hr",
      location: "Chennai, India",
      applyLink: "#"
    }
  ];
  return (

    <div className='p-3 h-screen  bg-black flex items-center flex-wrap justify-center gap-5 overflow-auto'>
      
      {jobs.map(function (elem) {
        return <Card user={elem.company} logo={elem.logo} location={elem.location} posted={elem.posted} role={elem.role} type={elem.type} level={elem.level} salary={elem.salary} />
      })}
    </div>
  )
}

export default App
