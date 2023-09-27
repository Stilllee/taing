import { useLocation } from 'react-router';
import styles from './Header.module.scss';
import { useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProfileModal from '@components/ProfileModal/ProfileModal';
import SearchModal from '../SearchModal/SearchModal';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
const Header = () => {
  const { lockScroll, openScroll } = useBodyScrollLock();
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
  );
  const [openSearchModal, setOpenSerchModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const onOpenSearchModal = () => {
    lockScroll();
    setOpenSerchModal(true);
  };
  const onCloseSearchModal = () => {
    openScroll();
    setOpenSerchModal(false);
  };
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
          '/profile',
          '/profile-edit',
        ].includes(pathname)
          ? styles.simple
          : ' '
      }`}
    >
      <a href="/">
        <h1 className={styles.logo}></h1>
      </a>
      <ul className={styles.nav}>
        <li className={styles.live}>
          <span className={styles.liveIcon}></span>
          <span className={styles.liveText}>실시간</span>
        </li>
        <li className={styles.tv}>TV 프로그램</li>
        <li className={styles.movie}>영화</li>
        <li className={styles.paramount}></li>
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
      {openSearchModal && <SearchModal />}
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
