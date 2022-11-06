import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import testRecoil from '../recoil/testRecoil';

interface IErrorComponent {
  children: ReactNode;
}

const ErrorComponent = ({ children }: IErrorComponent) => {
  const errorValue = useRecoilValue(testRecoil);

  useEffect(() => {
    if (errorValue.message) {
      alert(errorValue.message);
    }
  }, [errorValue.message]);

  return (
    <div>
      <h1>{errorValue?.message}</h1>
      {children}
    </div>
  );
};

export default ErrorComponent;
