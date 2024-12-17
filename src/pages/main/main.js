
import { Content } from "../../components/content/content";
import { Sidebar } from "../../components/sidebar/sidebar";
import { SidebarScale } from "../../components/sidebar-125-scale/sidebar125";
import { isMobile } from 'react-device-detect';
import styles from "./main.module.css";
import { ContentMobile } from "../../components/contentMobile/contentMobile";

export const Main = () => {

  const ratio = window.devicePixelRatio;


  return (
    <div className={styles.main}>
      { ratio > 1 ? <SidebarScale /> : <Sidebar /> }
      { isMobile ? <ContentMobile /> : <Content /> }
    </div>
  );
};
