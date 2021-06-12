import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad}) => {
    return(
    <>
        <div className = {styles.button}>
            <button onClick = {() => onLeaveFeedbackGood()}>Good </button>
            <button onClick = {() => onLeaveFeedbackNeutral()}>Neutral</button>
            <button onClick = {() => onLeaveFeedbackBad()}>Bad</button>
        </div>


    </>
    );

}

export default FeedbackOptions;
