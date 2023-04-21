import React from 'react';
import {FaEdit,FaCheckDouble,FaRegTrashAlt} from "react-icons/fa";

const Task = () => {
    return (
        <>
            <div className="task">
               <p><b>1.</b>
                   Task 1
               </p>
                <div className="task-icons">
                    <FaEdit color={"purple"}/>
                    <FaCheckDouble color={"green"}/>
                    <FaRegTrashAlt color={"red"}/>
                </div>
            </div>
        </>
    );
};

export default Task;