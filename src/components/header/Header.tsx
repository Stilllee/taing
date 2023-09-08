import { useLocation } from 'react-router';
import styles from './Header.module.scss';
import { useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
const Header = () => {
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
  );
  const [openModal, setOpenModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);
  const onShowProfile = () => setOpenProfile(true);
  const onCloseProfile = () => setOpenProfile(false);

  return (
    <motion.div
      style={{ backgroundColor }}
      className={`${styles.header} ${
        [
          '/onboarding',
          '/login-selection',
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
          <Link className={styles.live} to={'/live'}>
            <span className={styles.liveIcon}></span>
            <span>실시간</span>
          </Link>
        </li>
        <li>
          <Link className={styles.tv} to={'/tv'}>
            TV 프로그램
          </Link>
        </li>
        <li>
          <Link className={styles.movie} to={'/movie'}>
            영화
          </Link>
        </li>
        <li>
          <Link className={styles.paramount} to={'/movie'}></Link>
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
    </motion.div>
  );
};

export default Header;
