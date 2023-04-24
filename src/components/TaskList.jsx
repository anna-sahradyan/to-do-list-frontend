import React, {useEffect, useState} from 'react';
import TaskForm from "./TaskForm";
import Task from "./Task";
import {toast} from "react-toastify";
import axios from "axios";
//import {URL} from "../App.js";
import {BASE_URL} from "./api/helper";
import Loading from "./Loading";



const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        completed: false
    });
    const [isEditing, setIsEditing] = useState(false)
    const [taskID, setTaskID] = useState("")
    const {name} = formData;
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }
    //?getTasks
    const getTasks = async () => {
        setIsLoading(true)
        try {
            const {data} = await axios.get(`${BASE_URL}/api/tasks`)
            setTasks(data)
            console.log(data)
            setIsLoading(false)
        } catch (err) {
            toast.error(err.message)

        }
    }

    useEffect(() => {
        getTasks()
    }, [])
    //?createTask
    const createTask = async (e) => {
        e.preventDefault();
        if (name === "") {
            return toast.error("Input field cannot be empty");
        }
        try {
            await axios.post(`${BASE_URL}
/api/tasks`, formData);
            toast.success("Task added")
            setFormData({...formData, name: ""});
            getTasks()
        } catch (err) {
            toast.error(err.message)
            console.log(err)
        }

    }
    //?deleteTask
    const deleteTask = async (id) => {
        try {
            await axios.delete(`${BASE_URL}
/api/tasks/${id}`);
            getTasks();
        } catch (err) {
            toast.error(err.message)
        }
    }
//?getTask
    const getSingleTask = async (task) => {
        setFormData({name: task.name, completed: false})
        setTaskID(task._id);
        setIsEditing(true)

    }
    //?updatedTask
    const updateTask = async (e) => {
        e.preventDefault();
        if (name === "") {
            return toast.error("Input field cannot be empty.")
        }
        try {
            await axios.put(`${BASE_URL}
/api/tasks/${taskID}`, formData)
            setFormData({...formData, name: ""});
            setIsEditing(false);
            getTasks();
        } catch (err) {
            toast.error(err.message)
        }
    }
//?complete
    const setToComplete = async (task) => {
        const newFormData = {
            name: task.name,
            completed: true
        }
        try {
            axios.put(`${BASE_URL}
/api/tasks/${task._id}`, newFormData);
            getTasks();
        } catch (err) {
            toast.error(err.message)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        const cTask = tasks.filter((task) => {
            return task.completed === true;
        })
        setCompletedTasks(cTask)

    }, [tasks])
    return (
        <>
            <TaskForm
                name={name} handleInputChange={handleInputChange} createTask={createTask}
                isEditing={isEditing}
                updateTask={updateTask}
            />
            {tasks.length > 0 && (
                <div className="--flex-between --pb">
                    <p>
                        <b>Total Tasks:</b> {tasks.length}
                    </p>
                    <p>
                        <b>Completed Tasks:</b> {completedTasks.length}
                    </p>
                </div>
            )}

            <hr/>
            {isLoading && (
                <div className="--flex-center">
                   <Loading/>
                </div>
            )}
            {!isLoading && tasks.length === 0 ? (<p className={"--py"}>No task added. Please add a task</p>) : (<>
                {tasks.map((task, index) => {
                    return <Task key={`${task}_${index}`} task={task} index={index} deleteTask={deleteTask}
                                 getSingleTask={getSingleTask} setToComplete={setToComplete}/>

                })}
            </>)}


        </>
    );
};

export default TaskList;