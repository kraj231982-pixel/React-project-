import React, { useState, useEffect } from "react";

export default function JobPortal() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Chennai",
      type: "Full Time",
      salary: "₹8 LPA",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Creative Labs",
      location: "Bangalore",
      type: "Remote",
      salary: "₹6 LPA",
    },
    {
      id: 3,
      title: "React Developer",
      company: "CodeCraft",
      location: "Hyderabad",
      type: "Full Time",
      salary: "₹10 LPA",
    },
    {
      id: 4,
      title: "Backend Engineer",
      company: "CloudWorks",
      location: "Pune",
      type: "Part Time",
      salary: "₹7 LPA",
    },
  ];

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || job.location === location)
  );

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Poppins',sans-serif;
      }

      body{
        background:linear-gradient(135deg,#4f46e5,#7c3aed,#9333ea);
      }

      .container{
        min-height:100vh;
        padding:40px;
      }

      .hero{
        text-align:center;
        color:white;
        margin-bottom:40px;
        animation:fadeIn 1s ease;
      }

      .hero h1{
        font-size:4rem;
        margin-bottom:10px;
      }

      .hero p{
        opacity:.9;
        font-size:1.1rem;
      }

      .searchBox{
        max-width:900px;
        margin:auto;
        display:flex;
        gap:15px;
        padding:20px;
        border-radius:20px;
        background:rgba(255,255,255,.15);
        backdrop-filter:blur(15px);
        box-shadow:0 8px 25px rgba(0,0,0,.2);
      }

      .searchBox input,
      .searchBox select{
        flex:1;
        padding:14px;
        border:none;
        border-radius:12px;
        outline:none;
        font-size:16px;
      }

      .jobsGrid{
        margin-top:40px;
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
        gap:25px;
      }

      .card{
        position:relative;
        overflow:hidden;
        background:rgba(255,255,255,.15);
        backdrop-filter:blur(15px);
        border-radius:20px;
        padding:25px;
        color:white;
        transition:.4s;
        border:1px solid rgba(255,255,255,.2);
      }

      .card:hover{
        transform:translateY(-10px) scale(1.03);
        box-shadow:0 15px 30px rgba(0,0,0,.25);
      }

      .card::before{
        content:'';
        position:absolute;
        width:180px;
        height:180px;
        background:rgba(255,255,255,.15);
        border-radius:50%;
        top:-70px;
        right:-70px;
        transition:.5s;
      }

      .card:hover::before{
        transform:scale(1.8);
      }

      .card h2{
        margin-bottom:10px;
      }

      .company{
        color:#ddd;
        margin-bottom:15px;
      }

      .info{
        margin:8px 0;
      }

      .salary{
        color:#4ade80;
        font-size:1.4rem;
        font-weight:bold;
        margin:15px 0;
      }

      button{
        width:100%;
        padding:12px;
        border:none;
        border-radius:12px;
        font-weight:bold;
        cursor:pointer;
        background:white;
        color:#6d28d9;
        transition:.3s;
      }

      button:hover{
        transform:scale(1.05);
        background:#f5f5f5;
      }

      .empty{
        color:white;
        text-align:center;
        font-size:1.4rem;
        margin-top:40px;
      }

      @keyframes fadeIn{
        from{
          opacity:0;
          transform:translateY(-30px);
        }
        to{
          opacity:1;
          transform:translateY(0);
        }
      }

      @media(max-width:768px){
        .hero h1{
          font-size:2.5rem;
        }

        .searchBox{
          flex-direction:column;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="container">
      <div className="hero">
        <h1>🚀 Dream Job Portal</h1>
        <p>Find your dream career with smart search & filters</p>
      </div>

      <div className="searchBox">
        <input
          type="text"
          placeholder="🔍 Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option>Chennai</option>
          <option>Bangalore</option>
          <option>Hyderabad</option>
          <option>Pune</option>
        </select>
      </div>

      <div className="jobsGrid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="card" key={job.id}>
              <h2>{job.title}</h2>

              <div className="company">{job.company}</div>

              <div className="info">📍 {job.location}</div>

              <div className="info">💼 {job.type}</div>

              <div className="salary">{job.salary}</div>

              <button>Apply Now</button>
            </div>
          ))
        ) : (
          <div className="empty">😔 No jobs found</div>
        )}
      </div>
    </div>
  );
}