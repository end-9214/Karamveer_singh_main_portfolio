import './education.scss';

const Education = () => {
    return (
        <div className='Education'>
            <h1 className="Heading">EDUCATION</h1>
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2020</div>
                    <div className="timeline-content">
                        <h3>10th Grade</h3>
                        <p>Completed my 10th grade from Army Public School ASC C&C Bangalore, Karnataka.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2022</div>
                    <div className="timeline-content">
                        <h3>High School</h3>
                        <p>Completed my 12th grade from Army Public School Roorkee, Uttarakhand.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2026</div>
                    <div className="timeline-content">
                        <h3>College</h3>
                        <p>I am currently pursuing B.Tech in Artificial Intelligence and Machine Learning from Guru Gobind Singh Indraprastha University, New Delhi.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2024</div>
                    <div className="timeline-content">
                        <h3>Internship</h3>
                        <p>I worked with Haxsploit company.</p>
                    </div>
                </div>
            </div>
            <div className="stars"></div>
        </div>
    );
}

export default Education;
