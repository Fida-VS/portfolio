
import {
  SLIDER_MAZE_IMAGES,
  SLIDER_PRIAN_IMAGES,
  SLIDER_REPOS_IMAGES,
  SLIDER_TODO_IMAGES,
} from "../../constants";
import styles from "./contentMobile.module.css";
import { setSliderImages } from "../../store/appSlice";
import { useDispatch } from "react-redux";
import { Technologies } from "../technologies/technologies";
import { MobileSlider } from "../mobileSlider/mobileSlider";


export const ContentMobile = () => {

  const dispatch = useDispatch();

  const onClickSliderHandler = (array) => {
    dispatch(setSliderImages(array));
  };

  const SLIDER_WIDTH = 300;

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <div>Проекты</div>
      </div>
      <div className={styles.projects}>
        {/* MAZE PROJECT */}

        <div className={styles.project}>
          <div className={styles.title}>Лабиринт</div>
          <div>
            <div
              className={styles.slider_box}
              onClick={() => onClickSliderHandler(SLIDER_MAZE_IMAGES)}
            >
              <MobileSlider infinite>
                {SLIDER_MAZE_IMAGES.map((img, index) => (
                  <div
                        className={styles.page__mainContainer}
                        style={{
                          minWidth: `${SLIDER_WIDTH}px`,
                          maxWidth: `${SLIDER_WIDTH}px`,
                        }} key={`mobile-slider-page-${index}`}>
                    <div className={styles.item}>
                      <img src={img[0]} alt={`${img[1]}-screen`} />
                    </div>
                  </div>
                ))}
              </MobileSlider>
            </div>

          </div>
          <Technologies>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.js}`}></div>
              <div className={styles.technology}>JavaScript</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.react}`}></div>
              <div className={styles.technology}>React</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.redux}`}></div>
              <div className={styles.technology}>Redux</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.html}`}></div>
              <div className={styles.technology}>HTML</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.css}`}></div>
              <div className={styles.technology}>CSS</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.node}`}></div>
              <div className={styles.technology}>Node.js</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.mongo}`}></div>
              <div className={styles.technology}>MongoDB</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.docker}`}></div>
              <div className={styles.technology}>Docker</div>
            </div>
          </Technologies>
        </div>

        {/* PRIAN PROJECT */}

        <div className={styles.project}>
          <div className={styles.title}>Таблица</div>
          <div>
            <div
              className={styles.slider_box}
              onClick={() => onClickSliderHandler(SLIDER_PRIAN_IMAGES)}
            >
              <MobileSlider infinite>
                {SLIDER_PRIAN_IMAGES.map((img, index) => (
                  <div
                        className={styles.page__mainContainer}
                        style={{
                          minWidth: `${SLIDER_WIDTH}px`,
                          maxWidth: `${SLIDER_WIDTH}px`,
                        }} key={`mobile-slider-page-${index}`}>
                    <div className={styles.item}>
                      <img src={img[0]} alt={`${img[1]}-screen`} />
                    </div>
                  </div>
                ))}
              </MobileSlider>
            </div>
          </div>
          <Technologies>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.js}`}></div>
              <div className={styles.technology}>JavaScript</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.react}`}></div>
              <div className={styles.technology}>React</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.redux}`}></div>
              <div className={styles.technology}>Redux</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.html}`}></div>
              <div className={styles.technology}>HTML</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.css}`}></div>
              <div className={styles.technology}>CSS</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.mui}`}></div>
              <div className={styles.technology}>MUI</div>
            </div>
          </Technologies>
        </div>

        {/* REPOS PROJECT */}

        <div className={styles.project}>
          <div className={styles.title}>Поиск репозиториев</div>
          <div>
            <div
              className={styles.slider_box}
              onClick={() => onClickSliderHandler(SLIDER_REPOS_IMAGES)}
            >
              <MobileSlider infinite>
                {SLIDER_REPOS_IMAGES.map((img, index) => (
                  <div
                        className={styles.page__mainContainer}
                        style={{
                          minWidth: `${SLIDER_WIDTH}px`,
                          maxWidth: `${SLIDER_WIDTH}px`,
                        }} key={`mobile-slider-page-${index}`}>
                    <div className={styles.item}>
                      <img src={img[0]} alt={`${img[1]}-screen`} />
                    </div>
                  </div>
                ))}
              </MobileSlider>
            </div>
          </div>

          <Technologies>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.ts}`}></div>
              <div className={styles.technology}>TypeScript</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.react}`}></div>
              <div className={styles.technology}>React</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.redux}`}></div>
              <div className={styles.technology}>Redux Toolkit</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.html}`}></div>
              <div className={styles.technology}>HTML</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.css}`}></div>
              <div className={styles.technology}>CSS</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.mui}`}></div>
              <div className={styles.technology}>MUI</div>
            </div>
          </Technologies>
        </div>

        {/* TODO PROJECT */}

        <div className={styles.project}>
          <div className={styles.title}>Список дел</div>
          <div>
            <div
              className={styles.slider_box}
              onClick={() => onClickSliderHandler(SLIDER_TODO_IMAGES)}
            >
              <MobileSlider infinite>
                {SLIDER_TODO_IMAGES.map((img, index) => (
                  <div
                        className={styles.page__mainContainer}
                        style={{
                          minWidth: `${SLIDER_WIDTH}px`,
                          maxWidth: `${SLIDER_WIDTH}px`,
                        }} key={`mobile-slider-page-${index}`}>
                    <div className={styles.item}>
                      <img src={img[0]} alt={`${img[1]}-screen`} />
                    </div>
                  </div>
                ))}
              </MobileSlider>
            </div>
          </div>

          <Technologies>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.ts}`}></div>
              <div className={styles.technology}>TypeScript</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.react}`}></div>
              <div className={styles.technology}>React</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.redux}`}></div>
              <div className={styles.technology}>Redux Toolkit</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.html}`}></div>
              <div className={styles.technology}>HTML</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.css}`}></div>
              <div className={styles.technology}>CSS</div>
            </div>
            <div className={styles.technology_box}>
              <div className={`${styles.circle} ${styles.mui}`}></div>
              <div className={styles.technology}>MUI</div>
            </div>
          </Technologies>
        </div>
      </div>
    </div>
  );
};