import { Link } from 'react-router-dom';

interface IDummyLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const DummyLink = ({ children, className }: IDummyLinkProps) => {
  return (
    <Link
      className={className}
      to={'/#'}
      aria-label="실제로 이동하지 않는 더미 링크"
    >
      {children}
    </Link>
  );
};

export default DummyLink;
