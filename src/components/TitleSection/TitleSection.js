import React from 'react';
import styles from './TitleSection.module.css';

const TitleSection = ({title}) => {
    return(
    <>
        <h1 className = {styles.title}>
         {title}
        </h1>
    </>
    );

}

export default TitleSection;