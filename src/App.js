import React from 'react';
import Layout from "./components/Layout";
import Home from "./components/Home";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 export const URL = process.env.REACT_APP_SERVER_URL;
const App = () => {

    return (
        <>
            <div className="app">
                <div className="task-container">
                    <Layout>

                        <Home/>
                    </Layout>
                </div>
                <ToastContainer/>
            </div>
        </>
    );
};

export default App;