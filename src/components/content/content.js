import { InfiniteSlider } from '../infiniteSlider/infiniteSlider';
import { Modal } from '../modal/modal';
import { SLIDER_PRIAN_IMAGES, SLIDER_REPOS_IMAGES } from '../../constants';
import styles from './content.module.css';
import { setSliderImages } from '../../store/appSlice';
import { setIsOpenTrue } from '../../store/appSlice';
import { useDispatch } from 'react-redux';

export const Content = () => {

  const dispatch = useDispatch();

  const onClickSliderHandler = (array) => {
    
    dispatch(setIsOpenTrue());
    dispatch(setSliderImages(array))
  }

    return(
     
        <div className={styles.content}>
            <h2>Проекты</h2>
            <div className={styles.projects}>

      <div>

        <div className={styles.slider_box}  onClick={() => onClickSliderHandler(SLIDER_PRIAN_IMAGES)}>
            <InfiniteSlider infinite >

            {
        SLIDER_PRIAN_IMAGES.map((img) => (
          <InfiniteSlider.Page>
              <div className={styles.item}>
                <img src={img[0]} alt={`${img[1]}-screen`} />
              </div>
              </InfiniteSlider.Page>
        ))
       }
                
            </InfiniteSlider>
            </div>

            <Modal />
            </div>




            <div>

            <div className={styles.slider_box} onClick={() => onClickSliderHandler(SLIDER_REPOS_IMAGES)}>
            <InfiniteSlider infinite >

            {
        SLIDER_REPOS_IMAGES.map((img) => (
          <InfiniteSlider.Page>
              <div className={styles.item}>
                <img src={img[0]} alt={`${img[1]}-screen`} />
              </div>
              </InfiniteSlider.Page>
        ))
       }
                
            </InfiniteSlider>
            </div>
            <Modal />

            </div>
          
          </div>
        </div>
      
    );
}