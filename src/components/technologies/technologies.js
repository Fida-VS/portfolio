import React from 'react'; 
import styles from './technologies.module.css';


export const Technologies = ({children}) => {


    return(
        <div className={styles.technologies}>
           {children}
        </div>
    );
}