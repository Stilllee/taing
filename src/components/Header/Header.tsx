import { useLocation } from 'react-router';
import styles from './Header.module.scss';
import { useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import ProfileModal from '@components/ProfileModal/ProfileModal';
import SearchModal from '../SearchModal/SearchModal';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { Link } from 'react-router-dom';
const Header = () => {
  const { lockScroll, openScroll } = useBodyScrollLock();
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const isOnboarding = ['/onboarding'].includes(pathname);
  const isAuthPage = [
    '/profile',
    '/profile-edit',
    '/login-selection',
    '/find-id',
    '/find-password',
    '/login',
    '/signup',
  ].includes(pathname);
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
  );
  const [openSearchModal, setOpenSerchModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const headerClassNames = [
    styles.header,
    isOnboarding && styles.simple,
    isAuthPage && styles.auth,
  ]
    .filter(Boolean)
    .join(' ');

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
    <motion.div style={{ backgroundColor }} className={headerClassNames}>
      <a href="/">
        <h1 className={styles.logo}></h1>
      </a>
      <ul className={styles.nav}>
        <li>
          <Link
            className={styles.live}
            to={'/#'}
            aria-label="실제로 이동하지 않는 더미 링크"
          >
            <span className={styles.liveIcon}></span>
            <span>실시간</span>
          </Link>
        </li>
        <li>
          <Link
            className={styles.tv}
            to={'/#'}
            aria-label="실제로 이동하지 않는 더미 링크"
          >
            TV 프로그램
          </Link>
        </li>
        <li>
          <Link
            className={styles.movie}
            to={'/#'}
            aria-label="실제로 이동하지 않는 더미 링크"
          >
            영화
          </Link>
        </li>
        <li>
          <Link
            className={styles.paramount}
            to={'/#'}
            aria-label="실제로 이동하지 않는 더미 링크"
          ></Link>
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
