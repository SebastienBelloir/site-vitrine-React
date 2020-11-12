import React from 'react';
import styled from 'styled-components';
import { Layout } from '../styles';
import Toggle from './Toggle';
import { animateSharedLayout } from 'framer-motion';
import { UseScroll } from "./UseScroll";
import { scrollReveal } from "../animation";


const FaqSection = () => {
    const [element, controls] = UseScroll();
    return (
        <Faq
            variants={scrollReveal}
            ref={element}
            animate={controls}
            initial="hidden">
            <h2>Any questions <span>FAQ</span></h2>
            <animateSharedLayout>
                <Toggle title="How Do I Start ?">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus at tempora, assumenda unde, eius,
                            consequatur repudiandae vero ullam praesentium in? Corporis voluptas excepturi ipsa laudantium. Labore alias tempore consequuntur?</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus at tempora, assumenda unde, eius,
                            consequatur repudiandae vero ullam praesentium in? Corporis voluptas excepturi ipsa laudantium. Labore alias tempore consequuntur?</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="Payments methods">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus at tempora, assumenda unde, eius,
                            consequatur repudiandae vero ullam praesentium in? Corporis voluptas excepturi ipsa laudantium. Labore alias tempore consequuntur?</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="What products do you offer">
                    <div className="question">

                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus at tempora, assumenda unde, eius,
                            consequatur repudiandae vero ullam praesentium in? Corporis voluptas excepturi ipsa laudantium. Labore alias tempore consequuntur?</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Toggle>
            </animateSharedLayout>
        </Faq>
    )
}

const Faq = styled(Layout)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height:0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}
`;

export default FaqSection;