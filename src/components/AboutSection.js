import React from 'react';
import home1 from '../img/home1.png';
//styles
import { Layout, Description, Hide, Image } from "../styles";
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnimation } from '../animation';
import Wave from './Wave';



const AboutSection = () => {
    return (
        <Layout>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2
                            variants={titleAnim}
                        >
                            We work to make
                            </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                            variants={titleAnim}>your <span>dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                            variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt="home 1" />
            </Image>
            <Wave />
        </Layout>
    );
};





export default AboutSection;