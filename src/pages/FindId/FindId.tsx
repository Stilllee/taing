import Input from '@components/common/Input/Input';
import styles from './FindId.module.scss';
import Button from '@components/common/Button/Button';

const FindId = () => {
  return (
    <main className={styles.FindId}>
      <h1 className={styles.title}>계정 찾기</h1>
      <div className={styles.FindWrapper}>
        <form className={styles.emailBox}>
          <h4>이메일로 찾기</h4>
          <p>가입 시 등록한 이메일을 입력해주세요.</p>
          <Input type={'email'} placeholderText={'이메일'} />
          <Button type={'submit'} title={'확인'} state={'active'} />
        </form>
        <div className={styles.boundary}>
          <p>또는</p>
        </div>
        <div className={styles.findSelf}>
          <h4>본인인증으로 찾기</h4>
          <p>이미 본인인증이 완료된 계정에 한하여 아이디 찾기가 가능합니다.</p>
          <Button type={'button'} title={'본인인증하기'} state={'active'} />
        </div>
      </div>
    </main>
  );
};

export default FindId;
