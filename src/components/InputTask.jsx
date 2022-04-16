import React from 'react';

export default function InputTask(props){
    
    const {
        taskVal,
        onChange,
        onClick,
        disabled
    } = props;

    return (
        <React.Fragment>
            <div>
                <input 
                    placeholder="タスクを追加" 
                    value={taskVal}
                    onChange={onChange}
                    disabled={disabled}
                />
            </div>
            <button onClick={onClick}>追加</button>
        </React.Fragment>
    )
}