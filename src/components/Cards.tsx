import React from 'react';
import './Cards.module.css';
import MentorsImage from "../images/mentors.jpeg";
import Resources from "../images/resources.jpeg";
import Talent from "../images/talent-pipeline.jpeg";

type Course = {
    image: any;
    title: string;
    description: string;
}

const Card = ({ course }: { course: Course }) => {

    return (
        <div className='col-4 p-2'>
            <div className='border mb-2 p-4 d-flex flex-column align-items-center'>
                <div className='h4'>{course.title}</div>
                <img src={course.image} className='img-fluid'/>
                <div>{course.description}</div>
                <button className='btn btn-outline-primary btn-lg mt-2'>
                    Read More..
                </button>
            </div>
        </div>
    )
};

const courses = [
    {
        image: MentorsImage,
        title: "Mentorships",
        description: "Accelerate learning by offering mentorship pathways that connect partners with HBCUs."
    },
    {
        image: Talent,
        title: "Talent Pipeline",
        description: "Create a robust pipeline of qualified and career-ready talent."
    },
    {
        image: Resources,
        title: "Resources",
        description: "Provide partners with the tools, direction, and expertise to help HBCU students believe bigger."
    }
]

const Cards = () => {

    return (
        <div className='row'>
            {courses.map(c => <Card course={c} />)}
        </div>
    )
};

export default Cards;