import { Link } from 'react-router-dom';

interface IDummyLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const DummyLink = ({ children, className }: IDummyLinkProps) => {
  return (
    <Link className={className} to={'/#'}>
      {children}
    </Link>
  );
};

export default DummyLink;
