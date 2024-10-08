import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <div>
            <Container className='header pt-5'>
                <Row>

                    <Col className='header-caption' data-wow-delay=".1s" md="12" lg="6">
                        <h4 className='text-blue wow fadeInLeft m-0 p-0' data-wow-delay=".3s">hello, i'm adbelrahman elhelw </h4>
                        <p className='text-blue wow fadeInLeft m-0 p-0' data-wow-delay=".5s">i'm</p>

                        <div className='text-blue wow fadeInLeft' data-wow-delay=".7s">
                            <TypeAnimation
                                sequence={[
                                    'back end developer',
                                    1000,
                                    ' asp.net developer',
                                    1000
                                ]}
                                speed={50}
                                className='text-animation'
                                repeat={Infinity}
                            />
                        </div>

                        <a href="Sayed Osama Mohamed Resume.pdf" className='btn btn-info p-3 mt-5 wow fadeInUp' data-wow-delay="1.5s" download="Sayed Osama Mohamed Resume.pdf">Download CV <i className="fa-solid fa-download"></i></a>
                    </Col>

                    <Col md="12" lg="6">
                        <div className='position-realative wow fadeInDown' data-wow-delay=".4s">
                            <img className='m-auto d-block' src='images/my-photo.jpg' alt='my-img' />
                        </div>
                        <div className='header-icons'>
                            <div className='bootstrap'>
                                <img className='position-absolute' src='images/header-icons/bootstrap.png' alt='my-img' />
                            </div>

                            <div className='css'>
                                <img className='position-absolute' src='images/header-icons/css.png' alt='my-img' />
                            </div>

                            <div className='html'>
                                <img className='position-absolute' src='images/header-icons/html.png' alt='my-img' />
                            </div>

                            <div className='js'>
                                <img className='position-absolute' src='images/header-icons/js.png' alt='my-img' />
                            </div>

                            <div className='react'>
                                <img className='position-absolute' src='images/header-icons/react-query.png' alt='my-img' />
                            </div>

                            <div className='github'>
                                <img className='position-absolute' src='images/header-icons/github.png' alt='my-img' />
                            </div>

                            <div className='git'>
                                <img className='position-absolute' src='images/header-icons/ts.png' alt='my-img' />
                            </div>

                            <div className='tailwind'>
                                <img className='position-absolute' src='images/header-icons/tailwind.jpg' alt='my-img' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header