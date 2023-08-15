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
        title: "Socially Just Coding: Develop in Swift",
        description: "An 8-week course that teaches the foundations of coding with Swift, Apple's seamless and straightforward programming language. Through various projects, you'll learn about the impact of innovation while exploring iOS app development."
    },
    {
        title: "Socially Just Coding: Develop in Swift",
        description: "An 8-week course that teaches the foundations of coding with Swift, Apple's seamless and straightforward programming language. Through various projects, you'll learn about the impact of innovation while exploring iOS app development."
    },
    {
        title: "Socially Just Coding: Develop in Swift",
        description: "An 8-week course that teaches the foundations of coding with Swift, Apple's seamless and straightforward programming language. Through various projects, you'll learn about the impact of innovation while exploring iOS app development."
    },
    {
        title: "Socially Just Coding: Develop in Swift",
        description: "An 8-week course that teaches the foundations of coding with Swift, Apple's seamless and straightforward programming language. Through various projects, you'll learn about the impact of innovation while exploring iOS app development."
    },
    {
        title: "Socially Just Coding: Develop in Swift",
        description: "An 8-week course that teaches the foundations of coding with Swift, Apple's seamless and straightforward programming language. Through various projects, you'll learn about the impact of innovation while exploring iOS app development."
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