import React, { useState } from 'react';
import './Project.css';
import project1 from '../../assets/img/gallery1.jpg';
import project2 from '../../assets/img/gallery2.jpg';
import project3 from '../../assets/img/gallery3.jpg';
import project4 from '../../assets/img/gallery4.jpg';
import project5 from '../../assets/img/gallery5.jpg';
import project6 from '../../assets/img/gallery6.jpg';

export default function Project() {
    const [zoomImg, setZoomImg] = useState(null);

    return (
        <>
            <div className='project'>
                <div className='project-text'>
                    <p className="project-desc">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله درست را
                    </p>
                    <h1 className="project-title">پروژه های ما</h1>
                </div>
                <div className="project-container">
                    {[project1, project2, project3, project4, project5, project6].map((img, idx) => (
                        <div className="project-box" key={idx}>
                            <img
                                src={img}
                                alt={`project${idx + 1}`}
                                className="project-img"
                                onClick={() => setZoomImg(img)}
                                style={{ cursor: 'zoom-in' }}
                            />
                        </div>
                    ))}
                </div>
                {zoomImg && (
                    <div className="zoom-overlay" onClick={() => setZoomImg(null)}>
                        <img src={zoomImg} alt="zoom" className="zoom-img" />
                    </div>
                )}
            </div>
        </>
    );
}