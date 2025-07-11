import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    const tx = useRef(0);

 const slideforward = () => {
    if (tx.current > -50) {
        tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
};

const slidebackword = () => {
    if (tx.current < 0) {
        tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
};


   

    return (
       <div className='testimonials' id="testimonials">

            <img src={next_icon} alt='' className='next-btn' onClick={slideforward} />
            <img src={back_icon} alt='' className='back-btn ' onClick={slidebackword} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt='' />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at
                                Edusity was one of the best
                                decisions I've ever made.
                                The supportive community, state-of-the-art
                                facilities, and commitment to academic
                                excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt='' />
                                <div>
                                    <h3>Rohan Roy</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at
                                Edusity was one of the best
                                decisions I've ever made.
                                The supportive community, state-of-the-art
                                facilities, and commitment to academic
                                excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt='' />
                                <div>
                                    <h3>Janhvi Naik</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at
                                Edusity was one of the best
                                decisions I've ever made.
                                The supportive community, state-of-the-art
                                facilities, and commitment to academic
                                excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt='' />
                                <div>
                                    <h3>Mohan Singh</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at
                                Edusity was one of the best
                                decisions I've ever made.
                                The supportive community, state-of-the-art
                                facilities, and commitment to academic
                                excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
