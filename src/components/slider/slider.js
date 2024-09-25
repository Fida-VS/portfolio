import { useEffect, useState, Children, cloneElement } from 'react';
import styles from './slider.module.css';

const PAGE_WIDTH = 450;

export const Slider = ({children}) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleArrowLeftClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH;

            return Math.min(newOffset, 0);
        });
    };

    const handleArrowRightClick = () => {
       setOffset((currentOffset) => {
        const newOffset = currentOffset - PAGE_WIDTH;

        const maxOffset = -(PAGE_WIDTH * (pages.length - 1)); 

        return Math.max(newOffset, maxOffset);
       })
    };

    useEffect(() => {
        setPages(

            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        maxWidth: `${PAGE_WIDTH}px`,
                        minWidth: `${PAGE_WIDTH}px`
                    }
                })
            })

        );
    }, [children])

    return(
        <div className={styles.slider}>
            <button className={styles.arrow} onClick={handleArrowLeftClick}>prev</button>
            <div className={styles.window}>
                <div className={styles.allPagesContainer}
                style={{
                    transform: `translateX(${offset}px)`
                }}
                >{pages}</div>
            </div>
            <button className={styles.arrow} onClick={handleArrowRightClick}>next</button>
        </div>
    );
}