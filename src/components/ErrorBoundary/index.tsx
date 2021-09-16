import React from 'react';
import GlobalError from './GlobalError';
import ViewError from './ViewError';

type ErrComType = 'view' | 'global';

interface IErrorBoundaryProps {
  type: ErrComType;
  message?: string;
  isDialog?: boolean;
}

interface State {
  hasError: boolean;
  error?: any;
}

export default class ErrorBoundary extends React.Component<IErrorBoundaryProps, State> {
  static defaultProps: IErrorBoundaryProps = {
    type: 'global',
    message: '页面崩溃啦！',
    isDialog: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  componentDidCatch(error: any, errorInfo: any) {
    console.log('ErrorBoundary', error, errorInfo);
    this.setState({
      error,
    });
    //TODO 上报错误日志
  }

  getErrorComponent(type: ErrComType) {
    switch (type) {
      case 'view':
        return ViewError;
      default:
        return GlobalError;
    }
  }

  renderErrorComponent() {
    // const { message } = this.props;
    // const { error } = this.state;
    // const Com = this.getErrorComponent(type);

    return <div>123</div>;
    //return this.getErrorComponent()
    // return <Com message={props.message} />;
  }

  render() {
    if (this.state.hasError) {
      return this.renderErrorComponent();
    }
    return this.props.children;
  }
}

export function withErrorBoundary<T>(Com: any, options: IErrorBoundaryProps & T) {
  return (props: any) => (
    <ErrorBoundary {...options}>
      <Com {...props} />
    </ErrorBoundary>
  );
}
