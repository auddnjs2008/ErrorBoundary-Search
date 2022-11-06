import { useQuery } from 'react-query';
import testRecoil from '../recoil/testRecoil';
import { useSetRecoilState } from 'recoil';

const TextComponent = () => {
  console.log('husky testest');
  const setError = useSetRecoilState(testRecoil);
  const { data, error } = useQuery('testApi', () => Promise.reject({ message: 'OMG' }), {
    retry: 1,
    suspense: true,
    useErrorBoundary: true,
  });

  console.log(error);
  return <div>text</div>;
};

export default TextComponent;
