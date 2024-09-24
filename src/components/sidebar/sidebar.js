import styles from './sidebar.module.css';

export const Sidebar = () => {


    return(
        <div className={styles.sidebar}>

            <div className={styles.profile}>
                <img src='https://sun9-18.userapi.com/impf/UiB86PsAQMNuiqGiVPSnG8yHjNl-YvQHSk4KDw/2qKfOtgAnMk.jpg?size=682x1024&quality=96&sign=52880c93de9bf1b4d52dc5b1ac3f72e8&type=album' alt='avatar' />

                <div className={styles.profile__header}>
                    <h3>Судницына Вера</h3>
                    <h4>Front-end разработчик</h4>
                </div>

                <div className={styles.social}>
                    <div className={styles.social__item}></div>
                    <div className={styles.social__item}></div>
                    <div className={styles.social__item}></div>
                    <div className={styles.social__item}></div>
                </div>

                <div className={styles.profile__text}>Какой-то текст</div>

                <div className={styles.profile__skills}>
                    <h3>Зырь чо умею</h3>
                    <div className={styles.profile__skills__box}>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                        <div className={styles.profile__skills__item}></div>
                    </div>
                </div>

                </div> 

        </div>
    );
}