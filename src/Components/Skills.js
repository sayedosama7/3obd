/* eslint-disable react/style-prop-object */
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Skills = () => {
    return (
        <div>
            <Container className='skills py-5' id='skills'>
                <Row>
                    <h2 className='text-blue text-center fw-bold wow bounceInDown'>my skills</h2>
                    <Col md="12" className='text-center mt-2'>
                        <img className='wow bounceInUp' data-wow-delay=".1s" src='images/header-icons/html.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".1s"  src='images/header-icons/css.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".2s"  src='images/header-icons/bootstrap.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".2s"  src='images/header-icons/tailwind.jpg' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".3s"  src='images/header-icons/js.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".3s"  src='images/header-icons/ts.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".3s"  src='images/header-icons/react.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".4s"  src='images/header-icons/sass.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".4s"  src='images/header-icons/git.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".5s"  src='images/header-icons/github.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".5s"  src='images/header-icons/react-redux.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".6s"  src='images/header-icons/material-ui.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".6s"  src='images/header-icons/react-prime.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".6s"  src='images/header-icons/framer-motion.png' alt='' />
                        <img className='wow bounceInUp' data-wow-delay=".6s"  src='images/header-icons/react-query.png' alt='' />
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Skills