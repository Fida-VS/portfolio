
import { Content } from "../../components/content/content";
import { Sidebar } from "../../components/sidebar/sidebar";
import styles from "./main.module.css";

export const Main = () => {

  return (
    <div className={styles.main}>
      <Sidebar />
      <Content />
    </div>
  );
};
