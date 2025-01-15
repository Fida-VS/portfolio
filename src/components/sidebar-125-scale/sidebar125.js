import { ICONS, ICONS_SOCIAL } from "../../constants";
import avatar from "./../../img/avatar/avatar2.jpg";
import { useState } from "react";
import classNames from "classnames/bind";
import { isMobile } from "react-device-detect";
import styles from "./sidebar125.module.css";

export const SidebarScale = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const cx = classNames.bind(styles);

  const sidebarClass = cx({
    sidebar: true,
    opened: isProfileOpen,
  });

  const profileClass = cx({
    profile: true,
    opened: isProfileOpen,
  });

  const avatarClass = cx({
    avatar_box: !isMobile,
    avatar_box_mobile: isMobile,
  });

  const profileButtonClass = cx({
    button_only_mobile: true,
    button_up: isProfileOpen,
  });

  
  return (
    <div className={sidebarClass}>
      <div
        className={profileButtonClass}
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        ❯
      </div>

      <div className={profileClass}>
        <div className={avatarClass}>
          <div className={styles.avatar}>
            <img src={avatar} alt="avatar" />
          </div>

          <div className={styles.profile__header}>
            <div>Судницына Вера</div>
            <div>Front-end разработчик</div>
          </div>
        </div>

        <div className={`disappearing_box ${isProfileOpen ? "" : "hidden"}`}>
          <div className={styles.social}>
            <div className={styles.social_links}>
              <div className={styles.social__item}>
                <a href="https://balashiha.hh.ru/resume/23509aa3ff081fe8d60039ed1f4b4a71565048">
                  <img src={ICONS_SOCIAL.HEAD_HUNTER} alt="headHunter" />
                </a>
              </div>
              <div className={styles.social__item}>
                <a href="https://github.com/Fida-VS">
                  <img src={ICONS_SOCIAL.GIT_HUB} alt="gitHub" />
                </a>
              </div>
              <div className={styles.social__item}>
                <a href="https://t.me/FidaSD">
                  <img src={ICONS_SOCIAL.TELEGRAM} alt="telegram" />
                </a>
              </div>
              <div className={styles.social__item}>
                <a href="https://vk.com/id46562054">
                  <img src={ICONS_SOCIAL.VKONTAKTE} alt="vkontakte" />
                </a>
              </div>
            </div>

            <div className={styles.social_text}>
              <div>Телефон: + 7 905 605 21 73</div>
              <div>Email: poletaeva69vera@mail.ru</div>
            </div>
          </div>

          <div className={styles.profile__skills}>
            <div className={styles.technologies_title}>Стек технологий</div>
            <div className={styles.profile__skills__box}>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.JAVA_SCRIPT} alt="js" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.TYPE_SCRIPT} alt="ts" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.REACT} alt="react" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.REDUX} alt="redux" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.GIT} alt="git" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.NODE_JS} alt="nodejs" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.DOCKER} alt="docker" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.EXPRESS} alt="express" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.MONGO_DB} alt="mongodb" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.WEBPACK} alt="webpack" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.HTML} alt="html" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.CSS} alt="css" />
              </div>
              <div className={styles.profile__skills__item}>
                <img src={ICONS.MUI} alt="mui" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
