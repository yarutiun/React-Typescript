import React from 'react';
import {useState} from 'react'

const EventExample: React.FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setDrag] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag');
    }

    const overHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(true);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
        console.log('DROPED');
    }
    
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
    }

    return(
        <div>
            <input value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler}>
                Press me
            </button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div onDragOver={overHandler} onDrop={dropHandler} onDragLeave={leaveHandler} style={{width: 200, height: 200, background: isDrag ? 'red' : 'green', marginTop: 15, marginBottom: 15}}></div>
        </div>
    )
}

export default EventExample;