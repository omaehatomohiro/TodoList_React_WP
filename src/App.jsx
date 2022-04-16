
import React, { useState, useEffect } from 'react';
import './style.css';

import InputTask from './components/InputTask';
import IncompleteTasks from './components/IncompleteTasks';
import CompleteTasks from './components/CompleteTasks';

export default function App() {

    const [taskVal, setTaskVal] = useState('');
    const [incompleteTasks, setIncompleteTasks] = useState([1]);
    const [completeTasks, setCompleteTasks] = useState([]);

    const inputTaskChange = (e) => {
        setTaskVal(e.target.value);
    }

    const addTask = () => {
        if(taskVal.trim() === '') return false;
        setIncompleteTasks([...incompleteTasks,taskVal])
        setTaskVal('');
    }

    const moveToComplete = (index) => {
        const tasks = [...incompleteTasks];
        tasks.splice(index,1);
        setIncompleteTasks(tasks);
        const task = incompleteTasks[index];
        setCompleteTasks([...completeTasks,task]);
    }

    const deleteTask = (index) => {
        const tasks = [...incompleteTasks];
        tasks.splice(index,1);
        console.log(tasks);
        setIncompleteTasks(tasks)
    }

    const backToImcomplete = (index) => {
        const backTask = completeTasks[index];
        const tasks = [...completeTasks];
        tasks.splice(index,1);
        console.log('complete-tasks',tasks)
        setCompleteTasks(tasks);
        setIncompleteTasks([...incompleteTasks,backTask])
    }


    return (
        <div>
            <div className='input-section'>
                <InputTask 
                    taskVal={taskVal} 
                    onChange={inputTaskChange} 
                    onClick={addTask}
                    disabled={incompleteTasks.length >= 2}
                />
            </div>
            <div className='incomplete-section'>
                <h2>未完了タスク</h2>
                {incompleteTasks.length >= 2 && (<p>2個までです</p>)}
                <IncompleteTasks 
                    incompleteTasks={incompleteTasks}
                    moveToComplete={moveToComplete}
                    deleteTask={deleteTask}
                />
            </div>
            <div className='complete-section'>
                <h2>完了タスク</h2>
                <CompleteTasks
                    completeTasks={completeTasks}
                    backToImcomplete={backToImcomplete}
                />
            </div>
        </div>
    );
}
