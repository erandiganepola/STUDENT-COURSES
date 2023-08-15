import React from 'react';
import './Cards.module.css';

type Course = {
    title: string;
    description: string;
}

const Card = ({ course }: { course: Course }) => {

    return (
        <div className='col-4 p-2'>
            <div className='border mb-2 p-4 d-flex flex-column align-items-center'>
                <div className='h4'>{course.title}</div>
                <div>{course.description}</div>
                <button className='btn btn-outline-primary btn-lg mt-2'>
                    Enroll
                </button>
            </div>
        </div>
    )
};

const courses = [
    {
        title: "Socially Just Coding: Develop in Swift",
        description: "An 8-week course that teaches the foundations of coding with Swift, Apple's seamless and straightforward programming language. Through various projects, you'll learn about the impact of innovation while exploring iOS app development."
    },
    {
        title: "Pocket to Production: Creating Content",
        description: "This course looks at the Black experience in cinema, music production, podcasting, live sound, and storytelling to equip you with the tools and resources to create authentic media content using Apple products."
    },
    {
        title: "How AI Impacts Culture",
        description: "This course explores the use of AI in different industries while highlighting its ability to mimic human intelligence and handle large data efficiently while discussing machine learning and deep learning as supporting technologies."
    },
    {
        title: "Discovering Your Professional Superpowers",
        description: "Uncover your talents, build a professional brand, and navigate the job market. Through self-reflection exercises, discussions, expert lectures, and training, you'll develop your personal brand and master resume writing, networking, and interviewing to secure a position that aligns with your passions."
    },
    {
        title: "The Art of Storytelling",
        description: "Craft compelling, culturally relevant stories using tools like iMovie and Keynote. Learn screenwriting fundamentals, character development, and creative processes. Create scripts that showcase your narrative skills and produce polished films for a successful screenwriting career."
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