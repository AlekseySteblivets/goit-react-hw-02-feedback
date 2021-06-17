import React from 'react';
import styles from './TitleSection.module.css';
import PropTypes from 'prop-types';

const TitleSection = ({title}) => {
    return(
    <>
        <h1 className = {styles.title}>
         {title}
        </h1>
    </>
    );

}

TitleSection.propTypes = {
    title: PropTypes.string.isRequired,
}

export default TitleSection;