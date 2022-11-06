import React, { ReactNode } from 'react';

type RenderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
  reset: (...args: unknown[]) => void | (() => void);
};

type RenderFallbackType = <ErrorType extends Error>(
  props: RenderFallbackProps<ErrorType>
) => ReactNode;

type TErrorState = {
  error: Error | null;
};

interface ErrorBoundaryProps {
  renderFallback: RenderFallbackType;
  children: ReactNode;
  onReset?: () => void;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  public state: TErrorState;
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    // 다음 렌더링에서 폴백 UI 가 보이도록 상태를 업데이트
    console.log('derived', error);
    return { error };
  }

  resetErrorBoundary = () => {
    this.setState({ error: null });
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    if (this.state.error === null) {
      return;
    }

    // TriggerReset
  }

  render(): React.ReactNode {
    const { children, renderFallback, onReset } = this.props;
    const { error } = this.state;

    if (error !== null) {
      return renderFallback({ error, reset: onReset ? onReset : this.resetErrorBoundary });
    }

    return children;
  }
}

export default ErrorBoundary;
