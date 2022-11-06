import { ComponentProps } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import isExpectedError from '../../utils/isExpectedError';
import ErrorBoundary from './ErrorBoundary';
import SSRSafeSuspense from './SSRSafeSuspense';

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface Props extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  pendingFallback: ComponentProps<typeof SSRSafeSuspense>['fallback'];
  rejectedFallback: ErrorBoundaryProps['renderFallback'];
}

const AsyncBoundary = ({ pendingFallback, rejectedFallback, children }: Props) => {
  const { reset } = useQueryErrorResetBoundary();

  const filterRejectedFallback = ({ error, reset }: { error: any; reset: any }) => {
    if (isExpectedError(error)) {
      return rejectedFallback({ error, reset });
    }
    // 에러 로그 수집
    console.log('에러 로그 수집 필요');
  };

  return (
    <ErrorBoundary onReset={reset} renderFallback={filterRejectedFallback}>
      <SSRSafeSuspense fallback={pendingFallback}>{children}</SSRSafeSuspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
