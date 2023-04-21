import React from 'react';

const TaskForm = ({handleInputChange, createTask, name}) => {

    return (
        <>
            <form className={"task-form"} onSubmit={createTask}>
                <input type="text" placeholder={"Add a Task"} name={"name"} value={name} onChange={handleInputChange}/>
                <button type={"submit"}>Add</button>

            </form>
        </>
    );
};

export default TaskForm;