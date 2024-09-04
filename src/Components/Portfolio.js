import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: "nike e-commerce",
      img_src: "images/projects/nike.PNG",
      link_github: "https://github.com/sayedosama7/nike",
      link_vercel: "https://nike-iota-nine.vercel.app/",
    },
    {
      id: 2,
      img_src: "images/projects/amazon.PNG",
      title: "amazon",
      link_github: "https://github.com/sayedosama7/amazon",
      link_vercel: "https://amazon-delta-sable.vercel.app/",
    },
    {
      id: 3,
      img_src: "images/projects/brownies.PNG",
      title: "brownies dessert shop",
      link_github: "https://github.com/sayedosama7/brownies-react",
      link_vercel: "https://brownies-react.vercel.app/",
    },
    {
      id: 4,
      img_src: "images/projects/kian-academy.png",
      title: "kian academy",
      link_github: "https://github.com/sayedosama7/front-end-kian",
      link_vercel: "https://front-end-kian-k4na.vercel.app/",
    },
    {
      id: 5,
      img_src: "images/projects/orange-bay-dashboard.png",
      title: "orange bay dashboard",
      link_github: "https://github.com/sayedosama7/elgzera",
      link_vercel: "https://elgzera-alpha.vercel.app/Home",
    },
    {
      id: 6,
      img_src: "images/projects/shaghaf-dashboard.png",
      title: "shaghaf dashboard",
      link_github: "https://github.com/sayedosama7/shaghaf",
      link_vercel: "https://shaghaf-gamma.vercel.app/add-room",
    },
    {
      id: 7,
      img_src: "images/projects/swimming-dashboard.png",
      title: "swimming dashboard",
      link_github: "https://github.com/sayedosama7/swimming-dashboard",
      link_vercel: "https://swimming-dashboard-lake.vercel.app/",
    },
    {
      id: 8,
      img_src: "images/projects/nursery-dashboard.png",
      title: "nursery dashboard",
      link_github: "https://github.com/sayedosama7/nursery",
      link_vercel: "https://nursery-three.vercel.app/",
    },
    {
      id: 9,
      img_src: "images/projects/bmp-law.png",
      title: "bmp law",
      link_github: "https://github.com/sayedosama7/bmp-law",
      link_vercel: "https://bmp-law.vercel.app/",
    },
    {
      id: 10,
      img_src: "images/projects/retaurant.PNG",
      title: "retaurant shop",
      link_github: "https://github.com/sayedosama7/restaurant-react-app",
      link_vercel: "https://restaurant-react-app-five.vercel.app/",
    },
    {
      id: 11,
      img_src: "images/projects/honey.PNG",
      title: "honey shop",
      link_github: "https://github.com/sayedosama7/honey-react-app",
      link_vercel: "https://honey-react-app.vercel.app/",
    },
    {
      id: 12,
      img_src: "images/projects/friutkha.PNG",
      title: "friutkha shop",
      link_github: "https://github.com/sayedosama7/friutkha-react",
      link_vercel: "https://friutkha-react.vercel.app/",
    },
    // {
    //   id: 13,
    //   img_src: "images/projects/coffee.PNG",
    //   title: "coffee shop",
    //   link_github: "https://github.com/sayedosama7/coffee-react-app",
    //   link_vercel: "https://coffee-react-app.vercel.app/",
    // },

  ]
  return (
    <div>
      <Container fluid className='Portfolio text-white text-center fw-bold' id='portfolio'>
        <Row>
          <h2 className='wow fadeInDown'>my Portfolio</h2>
          <p className='mb-5 wow fadeInDown'>Here you can see some of my projects</p>

          {projects.map((project) => (
            <Col key={project.id} className='mb-4 wow fadeInUp' data-wow-delay=".1s" md="4">
              <div className="projects">
                <img className='img-fluid' src={project.img_src} alt="projects" />
                <div className="icons">
                  <p>{project.title}</p>
                  <a href={project.link_github} target='_blank' rel="noreferrer"><i className='fab fa-github text-white m-2'></i></a>
                  <a href={project.link_vercel} target='_blank' rel="noreferrer"><i className='fas fa-link text-white m-2'></i></a>
                </div>
              </div>
            </Col>
          ))}
          <Link className=' wow fadeInUp' data-wow-delay=".6s" to="/all-projects"><button type='button' className='btn btn-primary'>all projects<i className='fas fa-arrow-right ml-2 animate__animated animate__flash animate__infinite animate__slow'></i></button></Link>

        </Row>
      </Container>
    </div>
  )
}

export default Portfolio