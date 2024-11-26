import { useDispatch, useSelector } from "react-redux";
import { InfiniteSlider } from "../infiniteSlider/infiniteSlider";
import styles from "./modal.module.css";
import { setIsOpenFalse } from "../../store/appSlice";

export const Modal = () => {
  const isOpen = useSelector((state) => state.app.isOpen);
  const images = useSelector((state) => state.app.sliderImages);

  const sortedImages = images.slice(0, -1);

  const dispatch = useDispatch();

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.box}>
        <div className={styles.title}>{images[0][2]}</div>
        <InfiniteSlider infinite>
          {sortedImages.map((img) => (
            <InfiniteSlider.Page>
              <div className={styles.item}>
                <img src={img[0]} alt={`${img[1]}-screen`} />
              </div>
            </InfiniteSlider.Page>
          ))}
        </InfiniteSlider>
        <div className={styles.buttons}>
          <div>
            <a href={images[0][4]}>Демо</a>
          </div>
          <div>
            <a href={images[0][5]}>GitHub</a>
          </div>
        </div>
        <div className={styles.description}>{images[0][3]}</div>
        <div
          className={styles.delete_button}
          onClick={() => dispatch(setIsOpenFalse())}
        >
          ✖
        </div>
      </div>
    </div>
  );
};
