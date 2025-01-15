import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./mobileProjectInfo.module.css";



export const MobileProjectInfo = ({id}) => {

  const isMobileProjectInfo = useSelector((state) => state.app.mobileProjectInfos.find((info) => info.id === id)?.isVisible ?? false);

  const projects = useSelector((state) => state.app.sliderImages);


  const cx = classNames.bind(styles);

  const projectInfoTextClass = cx({
    projectInfo__text: true,
    visible: isMobileProjectInfo,
    hidden: !isMobileProjectInfo,
  });

  if (!isMobileProjectInfo) {
    return null;
  }

  return (
    <div className={styles.projectInfo}>
      <div className={projectInfoTextClass}>{projects[0][3]}</div>
    </div>
  );
};
