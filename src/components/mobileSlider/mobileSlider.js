import { Page } from "../page/page";
import styles from "./mobileSlider.module.css";
import { Children, cloneElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenTrue } from "../../store/appSlice";


const TRANSITION_DURATION = 300;

export const MobileSlider = ({ children, infinite }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(250);
  const [clonesCount, setClonesCount] = useState({ head: 1, tail: 1 });
  const [transitionDuration, setTransitionDuration] =
    useState(TRANSITION_DURATION);

  const isOpen = useSelector((state) => state.app.isOpen);
  const width = 250;
 

  const dispatch = useDispatch();

  const handleArrowLeftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;

      return Math.min(newOffset, 0);
    });
  };

  const handleArrowRightClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;

      const maxOffset = -(width * (pages.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };

  const handleScrollLastSlide = () => {
    if (isOpen) return;
    setOffset(pages.length - 1);
  };

  const handleScrollBack = () => {
    if (isOpen) return;
    setOffset(0 - width);
  };

  useEffect(() => {
    setOffset(-(clonesCount.head * width));
  }, [clonesCount, width, dispatch]);

  useEffect(() => {
    if (infinite) {
      setPages([
        cloneElement(children[Children.count(children) - 1]),
        ...children,
        cloneElement(children[0]),
      ]);
      setClonesCount({ head: 1, tail: 1 });
      return;
    }

    setPages(children);
  }, [children, infinite]);

  useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION);
      }, TRANSITION_DURATION);
    }
  }, [transitionDuration]);

  useEffect(() => {
    if (!infinite) return;

    if (offset === 0) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(width * (pages.length - 1 - clonesCount.tail)));
      }, TRANSITION_DURATION);
      return;
    }

    if (offset === -(width * (pages.length - 1))) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(clonesCount.head * width));
      }, TRANSITION_DURATION);
      return;
    }
  }, [infinite, offset, width, pages, clonesCount]);

  return (
      <div className={styles.slider_box}>
        <div className={styles.arrow} onClick={handleArrowLeftClick}>
          ❮
        </div>
        <div className={styles.slider}>
          <div
            className={styles.window}
            onMouseOver={handleScrollLastSlide}
            onMouseLeave={handleScrollBack}
            onClick={() => dispatch(setIsOpenTrue())}
          >
            <div
              className={styles.allPagesContainer}
              style={{
                transitionDuration: `${transitionDuration}ms`,
                transform: `translateX(${offset}px)`,
              }}
            >
              {pages.map((page, index) => (
    cloneElement(page, { key: `page-${index}` })
  ))}
            </div>
          </div>
        </div>
        <div className={styles.arrow} onClick={handleArrowRightClick}>
          ❯
        </div>
      </div>
  );
};

MobileSlider.Page = Page;
