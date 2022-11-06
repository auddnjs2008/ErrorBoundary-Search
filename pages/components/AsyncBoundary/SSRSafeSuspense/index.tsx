import { ComponentProps, Suspense } from 'react';
import useMounted from './useMounted';

const SSRSafeSuspense = (props: ComponentProps<typeof Suspense>) => {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }

  return <>{props.fallback}</>;
};

export default SSRSafeSuspense;
