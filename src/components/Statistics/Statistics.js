import React from 'react';
import styles from './Statistics.module.css';
import Notification from '../../components/Notification';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    if(good === 0 && neutral === 0 && bad === 0 ) {
        return (
            <div className = {styles.statistics}>
                 <h2>Statistics</h2>
                 <Notification message="No feedback given" />
            </div>
           
        )
    }
    else {
    return(
    <>
        <div className = {styles.statistics}>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total()} </p>
            <p>Positive feedback: {positivePercentage()}% </p>

        </div>
    </>
    );
    }


}

export default Statistics;