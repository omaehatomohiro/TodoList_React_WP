import React from 'react';

export default function ImcompleteTasks(props) {

    const {
        incompleteTasks,
        moveToComplete,
        deleteTask,
    } = props;

    return (
        <React.Fragment>
            <ul>
                {
                incompleteTasks.map( (task, index) => {
                    return (
                        <li key={index}>
                            <h3>{task}</h3>
                            <div>
                                <button onClick={ () => moveToComplete(index)}>{task}完了</button>
                                <button onClick={ () => deleteTask(index)}>{task}削除</button>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </React.Fragment>
    )
}