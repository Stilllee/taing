import { useLocation } from 'react-router';
import styles from './Header.module.scss';
import { useState } from 'react';
const Header = () => {
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const onShowProfile = () => setOpenProfile(true);
  const onCloseProfile = () => setOpenProfile(false);

  return (
    <div
      className={`${styles.header} ${
        [
          '/onboarding',
          '/findId',
          '/findPassword',
          '/login',
          '/signup',
        ].includes(pathname)
          ? styles.simple
          : ' '
      }`}
    >
      <a href="/">
        <h1 className={styles.logo}></h1>
      </a>
      <ul className={styles.nav}>
        <li>
          <a className={styles.live} href="#">
            <span className={styles.liveIcon}></span>
            <span>실시간</span>
          </a>
        </li>
        <li>
          <a className={styles.tv} href="#">
            TV 프로그램
          </a>
        </li>
        <li>
          <a className={styles.movie} href="#">
            영화
          </a>
        </li>
        <li>
          <a className={styles.paramount} href="#"></a>
        </li>
      </ul>
      <ul className={styles.aside}>
        <li>
          {openModal ? (
            <button onClick={onCloseModal} className={styles.close}></button>
          ) : (
            <button onClick={onOpenModal} className={styles.search}></button>
          )}
        </li>

        <li>
          <button
            onMouseEnter={onShowProfile}
            onMouseLeave={onCloseProfile}
            className={styles.profile}
          ></button>
        </li>
      </ul>
      {/* 임시 프로필 */}
      {openProfile && <div>프로필</div>}
    </div>
  );
};

export default Header;
