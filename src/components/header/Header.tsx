import { useLocation } from 'react-router';
import styles from './Header.module.scss';
import { useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProfileModal from '@components/ProfileModal/ProfileModal';
const Header = () => {
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
  );
  const [openSearchModal, setOpenSerchModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const onOpenSearchModal = () => setOpenSerchModal(true);
  const onCloseSearchModal = () => setOpenSerchModal(false);

  const toggleProfile = () => {
    setOpenProfile(prevOpenProfile => !prevOpenProfile);
  };
  return (
    <motion.div
      style={{ backgroundColor }}
      className={`${styles.header} ${
        [
          '/onboarding',
          '/login-selection',
          '/find-id',
          '/find-password',
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
          {openSearchModal ? (
            <button
              onClick={onCloseSearchModal}
              className={styles.close}
            ></button>
          ) : (
            <button
              onClick={onOpenSearchModal}
              className={styles.search}
            ></button>
          )}
        </li>

        <li>
          <button
            onMouseEnter={toggleProfile}
            onMouseLeave={toggleProfile}
            className={styles.profile}
          ></button>
        </li>
      </ul>

      {openProfile && (
        <ProfileModal
          show={openProfile}
          onMouseEnter={toggleProfile}
          onMouseLeave={toggleProfile}
        />
      )}
    </motion.div>
  );
};

export default Header;
