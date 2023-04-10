import React from 'react';
import Task from "./Task";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Home = () => {
    return (
        <>
            <Task/>
            <TaskForm/>
            <TaskList/>
        </>
    );
};

export default Home;