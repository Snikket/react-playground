import './ExpenseItem.css';
import './ExpenseDate.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

const ExpenseItem = (props) => {
    let originalButtonName = "Change Title";
    const [title, setTitle] = useState(props.title);
    const [buttonName, setButton] = useState(originalButtonName);
    const clickHandler = () => {
        console.log("hello");
        setTitle('Updated!');
        setButton('Changed !');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>{buttonName}</button>
        </Card>)

}

export default ExpenseItem