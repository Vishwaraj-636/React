import React, { useState, useEffect, createContext } from 'react';
export const UserDataContext = createContext()
const UserContext = (props) => {
    const data =[
            {
                "id": 1,
                "name": "Rahul Sharma",
                "username": "rahul_dev",
                "posts": [
                    {
                        "postId": 101,
                        "title": "Learning React",
                        "content": "Today I learned about useState and useEffect in React.",
                        "likes": 120,
                        "comments": 15
                    },
                    {
                        "postId": 102,
                        "title": "Frontend Journey",
                        "content": "Building my first project using Tailwind CSS.",
                        "likes": 95,
                        "comments": 10
                    }
                ]
            },
            {
                "id": 2,
                "name": "Ananya Verma",
                "username": "ananya_codes",
                "posts": [
                    {
                        "postId": 103,
                        "title": "AI Basics",
                        "content": "Started learning Machine Learning today!",
                        "likes": 200,
                        "comments": 25
                    }
                ]
            },
            {
                "id": 3,
                "name": "Vikram Patel",
                "username": "vikram_tech",
                "posts": [
                    {
                        "postId": 104,
                        "title": "Node.js API",
                        "content": "Created my first REST API using Express.",
                        "likes": 150,
                        "comments": 18
                    },
                    {
                        "postId": 105,
                        "title": "MongoDB",
                        "content": "Learning database integration with MongoDB.",
                        "likes": 130,
                        "comments": 12
                    }
                ]
            },
            {
                "id": 4,
                "name": "Priya Nair",
                "username": "priya_uiux",
                "posts": [
                    {
                        "postId": 106,
                        "title": "UI Design",
                        "content": "Designed a mobile app prototype using Figma.",
                        "likes": 175,
                        "comments": 20
                    }
                ]
            },
            {
                "id": 5,
                "name": "Arjun Mehta",
                "username": "arjun_builds",
                "posts": [
                    {
                        "postId": 107,
                        "title": "Full Stack App",
                        "content": "Working on MERN stack project.",
                        "likes": 220,
                        "comments": 30
                    },
                    {
                        "postId": 108,
                        "title": "Deployment",
                        "content": "Deployed my app on Vercel.",
                        "likes": 160,
                        "comments": 22
                    }
                ]
            }
        ]
    return (
        <UserDataContext.Provider value={data}>
            {props.children}
        </UserDataContext.Provider>
    );
};

export default UserContext;