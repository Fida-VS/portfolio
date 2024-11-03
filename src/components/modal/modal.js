import { useDispatch, useSelector } from "react-redux";
import { InfiniteSlider } from "../infiniteSlider/infiniteSlider";
import styles from "./modal.module.css";
import { setIsOpenFalse } from "../../store/appSlice";


export const Modal = () => {

   const isOpen = useSelector(state => state.app.isOpen);
   const images = useSelector(state => state.app.sliderImages)

  const dispatch = useDispatch();
  

  if(!isOpen){
  	return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.box}>
        <div className={styles.title}>Title</div>
        <InfiniteSlider infinite>
		     
       {
        images.map((img) => (
          <InfiniteSlider.Page>
              <div className={styles.item}>
                <img src={img[0]} alt={`${img[1]}-screen`} />
              </div>
              </InfiniteSlider.Page>
        ))
       }

		</InfiniteSlider>
    <div className={styles.description}>Тестовое задание - небольшое SPA-приложение, взаимодействующее с сервером. Реализованы страницы: авторизация и страница с таблицей, данные для которой получены с сервера. Можно взаимодействовать с таблицей - добавлять/редактировать/удалять записи. Изменения сразу отображаются в таблице. Данные для авторизации: логин - userN, где вместо N нужно ввести число, например user1, user2… user33. Пароль - password – одинаков для всех логинов.</div>
      </div>
      <button type="button" className={styles.delete_button} onClick={() => dispatch(setIsOpenFalse())}>✖</button>
    </div>
  );
};
