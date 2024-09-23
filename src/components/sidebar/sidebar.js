import styles from './sidebar.module.css';

export const Sidebar = () => {


    return(
        <div className={styles.sidebar}>

            <div className={styles.profile}>
                <img src='https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f600/u1f600_u1f920.png' alt='avatar' />

                <div className={styles.profile__header}>
                    <div>Судницына Вера</div>
                    <div>Front-end разработчик</div>
                </div>

                <div className={styles.social}>
                    
                </div>

                <div className={styles.profile__text}></div>

                <div className={styles.profile__skills}>
                    
                </div>

                </div> 

        </div>
    );
}