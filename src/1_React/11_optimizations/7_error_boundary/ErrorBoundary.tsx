import React, { FC, ReactElement, ErrorInfo } from 'react';

interface ErrorBoundaryPropsI {
  children: ReactElement;
  fallback: FC<{ errorMsg: string }>;
}

interface ErrorBoundaryStateI {
  errorMsg: string;
}

export function ErrorBoundaryFallback({ errorMsg }: ErrorBoundaryStateI) {
  return <h2>{errorMsg}</h2>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryPropsI, ErrorBoundaryStateI> {
  constructor(props: ErrorBoundaryPropsI) {
    super(props);
    this.state = { errorMsg: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryStateI {
    console.log(error);
    return { errorMsg: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // logErrorToMyServices(error, info);
    console.log(error, info);
  }

  render() {
    const { errorMsg } = this.state;
    const { fallback: Fallback, children } = this.props;

    if (errorMsg) {
      if (Fallback) {
        return <Fallback errorMsg={errorMsg} />;
      }

      return errorMsg;
    }

    return children;
  }
}
