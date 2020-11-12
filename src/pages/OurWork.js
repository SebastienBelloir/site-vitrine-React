import React from 'react';
//Images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
//styled
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnimation, lineAnim, sliderAnim, sliderContainer } from '../animation';
import { UseScroll } from '../components/UseScroll';
import ScrollTop from "../components/ScrollTop";


const OurWork = () => {
    const [element, controls] = UseScroll();
    const [element2, controls2] = UseScroll();
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: '#fff' }}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={sliderAnim}></Frame1>
                <Frame2 variants={sliderAnim}></Frame2>
                <Frame3 variants={sliderAnim}></Frame3>
                <Frame4 variants={sliderAnim}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie ref={element} variants={fade} animate={controls} initial="hidden">
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                        <motion.img variants={photoAnimation} src={theracer} alt="theracer" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <motion.img variants={photoAnimation} src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;


export default OurWork;