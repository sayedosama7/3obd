import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from '../NavBar'
import ScrollToTop from 'react-scroll-to-top'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const AllProjects = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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
            img_src: "images/projects/coffee.PNG",
            title: "coffee shop",
            link_github: "https://github.com/sayedosama7/coffee-react-app",
            link_vercel: "https://coffee-react-app.vercel.app/",
        },
        {
            id: 13,
            img_src: "images/projects/friutkha.PNG",
            title: "friutkha shop",
            link_github: "https://github.com/sayedosama7/friutkha-react",
            link_vercel: "https://friutkha-react.vercel.app/",
        },
        {
            id: 14,
            img_src: "images/projects/journal.PNG",
            title: "journal",
            link_github: "https://github.com/sayedosama7/the-journal-react-app",
            link_vercel: "https://the-journal-react-app.vercel.app/",
        },
        {
            id: 15,
            img_src: "images/projects/henna-app.PNG",
            title: "henna app",
            link_github: "https://github.com/sayedosama7/team-4-task-1",
            link_vercel: "https://team-4-task-1.vercel.app/",
        },
        {
            id: 16,
            img_src: "images/projects/phone-app.PNG",
            title: "phone app",
            link_github: "https://github.com/sayedosama7/task-lec-21-22",
            link_vercel: "https://task-lec-21-22.vercel.app/",
        },
        {
            id: 17,
            img_src: "images/projects/validate.PNG",
            title: "form validation with js",
            link_github: "https://github.com/sayedosama7/form-validation-with-javascript",
            link_vercel: "https://form-validation-with-javascript-delta.vercel.app/registeration.html",
        },
        {
            id: 18,
            img_src: "images/projects/ai-images.PNG",
            title: "ai images generator",
            link_github: "https://github.com/sayedosama7/ai",
            link_vercel: "https://ai-sigma-five.vercel.app/",
        },
        {
            id: 19,
            img_src: "images/projects/portfolio.PNG",
            title: "portfolio",
            link_github: "https://github.com/sayedosama7/portfolio",
            link_vercel: "https://portfolio-sayed.vercel.app/",
        },
        {
            id: 20,
            img_src: "images/projects/clothing.PNG",
            title: "clothing shop",
            link_github: "https://github.com/sayedosama7/sixteen-clothing-shop",
            link_vercel: "https://sixteen-clothing-shop.vercel.app/",
        },
        {
            id: 21,
            img_src: "images/projects/hospital.PNG",
            title: "hospital",
            link_github: "https://github.com/sayedosama7/hospital",
            link_vercel: "https://hospital-lake.vercel.app/",
        },
        {
            id: 22,
            img_src: "images/projects/Browniess.PNG",
            title: "Brownies",
            link_github: "https://github.com/sayedosama7/Brownies-full-react",
            link_vercel: "https://brownies-full-react.vercel.app/",
        },
        {
            id: 23,
            img_src: "images/projects/browniees.PNG",
            title: "Brownies",
            link_github: "https://github.com/sayedosama7/brownies-html-css",
            link_vercel: "https://brownies-html-css.vercel.app/",
        },
        {
            id: 24,
            img_src: "images/projects/restaurants.PNG",
            title: "restaurants",
            link_github: "https://github.com/sayedosama7/restaurants",
            link_vercel: "https://restaurants-rho.vercel.app/",
        },
        {
            id: 25,
            img_src: "images/projects/template.PNG",
            title: "elzero template 3",
            link_github: "https://github.com/sayedosama7/elzero-template-3",
            link_vercel: "https://elzero-template-3.vercel.app/",
        },
        {
            id: 26,
            img_src: "images/projects/coffee_2.PNG",
            title: "coffee",
            link_github: "https://github.com/sayedosama7/coffee_2",
            link_vercel: "https://coffee-2.vercel.app/",
        },
        {
            id: 27,
            img_src: "images/projects/coffee_3.PNG",
            title: "coffee",
            link_github: "https://github.com/sayedosama7/coffee",
            link_vercel: "https://coffee-amber.vercel.app/",
        },
        {
            id: 28,
            img_src: "images/projects/icream.PNG",
            title: "icream",
            link_github: "https://github.com/sayedosama7/icream",
            link_vercel: "https://icream.vercel.app/",
        },
        {
            id: 29,
            img_src: "images/projects/food-hut.PNG",
            title: "food hut",
            link_github: "https://github.com/sayedosama7/food-hut",
            link_vercel: "https://food-hut.vercel.app/",
        },
        {
            id: 30,
            img_src: "images/projects/Nikee.PNG",
            title: "Nike",
            link_github: "https://github.com/sayedosama7/Nike-E-commerce",
            link_vercel: "https://nike-e-commerce-two.vercel.app/",
        },
        {
            id: 31,
            img_src: "images/projects/Drniks.PNG",
            title: "Restaurant Drniks",
            link_github: "https://restaurant-and-drniks.vercel.app/",
            link_vercel: "https://restaurant-and-drniks.vercel.app/",
        },
        {
            id: 32,
            img_src: "images/projects/brownies2.PNG",
            title: "brownies",
            link_github: "https://github.com/sayedosama7/brownies2",
            link_vercel: "https://brownies-two.vercel.app/",
        },
        // {
        //     id: 33,
        //     img_src:"images/projects/click2.PNG",
        //     title: "click here please",
        //     link_github: "https://github.com/sayedosama7/click-here-please",
        //     link_vercel: "https://click-here-please.vercel.app/",
        // },
        // {
        //     id: 34,
        //     img_src:"images/projects/scroll.PNG",
        //     title: "scroll to top",
        //     link_github: "https://github.com/sayedosama7/scroll-to-top-with-js",
        //     link_vercel: "https://scroll-to-top-with-js.vercel.app/",
        // },
    ]

    return (
        <div className='portfolio-page'>
            <NavBar />
            <Container className='all-portfolio text-white text-center fw-bold'>
                <Row>
                    <Col md='12' className='project-title'>
                        <h2 className=''>All Projects</h2>
                        <p className='mb-5'>Here you can see some of my projects</p>
                    </Col>
                    {projects.map((project) => (
                        <Col key={project.id} className='mb-4 wow fadeInUp' data-wow-delay=".3s" md="4">
                            <div className="projects">
                                <img className='img-fluid' src={project.img_src} alt="projects" />
                                <div className="icons">
                                    <p>{project.title}</p>
                                    <a href={project.link_github} target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                                    <a href={project.link_vercel} target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
                                </div>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
            <ScrollToTop smooth color='#225C8B' />
        </div>
    )
}

export default AllProjects