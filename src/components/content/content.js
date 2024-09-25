import { Slider } from '../slider/slider';
import styles from './content.module.css';

export const Content = () => {


    return(
        <div className={styles.content}>
            <h2>Проекты</h2>
            <div className={styles.projects}>
            <Slider>
                <div className={styles.item}>Item 1</div>
                <div className={styles.item}>Item 2</div>
                <div className={styles.item}>Item 3</div>
            </Slider>
            </div>
        </div>
    );
}