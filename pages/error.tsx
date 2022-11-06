import { useRecoilValue } from 'recoil';
import testRecoil from './recoil/testRecoil';

const ErrorPage = () => {
  const errorValue = useRecoilValue(testRecoil);

  return <div>{errorValue.message} in Page</div>;
};

export default ErrorPage;
