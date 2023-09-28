import { useLocation } from 'react-router';
import styles from './Footer.module.scss';
import DummyLink from '../common/DummyLink/DummyLink';

const FooterInfo = () => (
  <div className={styles.info}>
    <div className={styles.notice}>
      <span className={styles.title}>공지사항</span>
      <DummyLink>[안내] 합병보고 주주총회에 갈음하는 공고</DummyLink>
    </div>
    <div className={styles.brandLink}>
      <div>
        <DummyLink>브랜드 바로가기 +</DummyLink>
      </div>
      <div>
        <DummyLink>그룹 계열사 바로가기 +</DummyLink>
      </div>
    </div>
  </div>
);

const FooterList = () => {
  const listItems = [
    '고객센터',
    '이용약관',
    '개인정보처리방침',
    '청소년 보호정책',
    '법적고지',
    '이벤트',
    '인재채용',
  ];
  return (
    <ul className={styles.list}>
      {listItems.map(item => (
        <li key={item}>
          <DummyLink>{item}</DummyLink>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  const location = useLocation();
  const hideInfo = [
    '/onboarding',
    '/login-selection',
    '/signup',
    '/login',
    '/find-id',
    '/find-password',
  ].includes(location.pathname);

  return (
    <footer className={styles.Footer}>
      <div className={styles.wrapper}>
        {!hideInfo && <FooterInfo />}
        <nav>
          <FooterList />
        </nav>
        <address>
          <div className={styles.copyrightBox}>
            <p>
              <span>대표이사 : 최주희</span>
              <DummyLink>
                <span>사업자정보확인</span>
              </DummyLink>
              <span>사업자등록번호 : 188-88-01893</span>
              <span>통신판매신고번호 : 2020-서울마포-3641호</span>
            </p>
            <p>
              <span>
                사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브
                15층(상암동)
              </span>
              <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
            </p>
            <p>
              <DummyLink>
                <span>고객문의 바로가기</span>
              </DummyLink>
              <DummyLink>
                <span>대표메일 : tving@cj.net</span>
              </DummyLink>
              <DummyLink>
                <span>
                  고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)
                </span>
              </DummyLink>
            </p>
            <p>
              <span>
                ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780
              </span>
              <span>Mnet 고객센터(방송편성문의) : 1855-1631</span>
            </p>
          </div>
        </address>
        <section className={styles.snsWrapper}>
          <a
            className={`${styles.youtube} ${styles.sns}`}
            href="https://www.youtube.com/c/TVING_official"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className={`${styles.instagram} ${styles.sns}`}
            href="https://www.instagram.com/tving.official/"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className={`${styles.twitter} ${styles.sns}`}
            href="https://twitter.com/tvingdotcom"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className={`${styles.facebook} ${styles.sns}`}
            href="https://www.facebook.com/CJTVING/"
            target="_blank"
            rel="noreferrer"
          ></a>
        </section>
        <small>Copyright &copy; 주식회사 티빙 All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
