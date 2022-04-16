import React from 'react';

export default function CompleteTasks(props) {

    const {
        completeTasks,
        backToImcomplete
    } = props;

    return (
        <React.Fragment>
            <ul>
                {
                    completeTasks.map( (task, index) => {
                        return (
                            <li key={index}>
                                <h3>{task}</h3>
                                <div>
                                    <button onClick={ () => backToImcomplete(index)}>戻す</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}