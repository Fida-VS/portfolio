import styles from "./page.module.css";
import { useSelector } from "react-redux";

export const Page = ({ children }) => {
  
  const width = useSelector((state) => state.app.sliderWidth);

  return (
    <div
      className={styles.page__mainContainer}
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};
