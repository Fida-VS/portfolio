
import { Content } from "../../components/content/content";
import { Sidebar } from "../../components/sidebar/sidebar";
import { SidebarScale } from "../../components/sidebar-125-scale/sidebar125";
import styles from "./main.module.css";

export const Main = () => {

  const ratio = window.devicePixelRatio;


  return (
    <div className={styles.main}>
      { ratio > 1 ? <SidebarScale /> : <Sidebar /> }
      <Content />
    </div>
  );
};
