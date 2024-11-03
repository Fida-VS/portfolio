import { useContext } from 'react';
import { SliderContext } from '../infiniteSlider/slider-context';
import styles from './page.module.css';


export const Page = ({children}) => {

const { width } = useContext(SliderContext);

    return (
        <div className={styles.page__mainContainer} style={{
            minWidth: `${width}px`,
            maxWidth: `${width}px`,
          }}>
            {children}
        </div>
    )
}