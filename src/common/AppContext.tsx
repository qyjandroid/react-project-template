import React, { ComponentClass } from 'react';
import BaseComponent from '@/components/BaseComponent';
import TContext from './TContext';
import { IAppContext } from '@/types/IContext';

const AppContext = TContext<IAppContext>({} as any);

export default AppContext;

export const { Consumer } = AppContext;

export const { Provider } = AppContext;

export function withAppContext<T>(Com: React.ComponentType<IAppContext>) {
  return class<P extends IAppContext & T, S> extends BaseComponent<P, S> {
    render() {
      const { props } = this;
      return (
        <AppContext.Consumer>{context => <Com {...props} {...context} />}</AppContext.Consumer>
      );
    }
  };
}

export type ComponentDecorator<P = any> = <T extends ComponentClass<P>>(WrappedComponent: T) => T;

// export const withRouter: ComponentDecorator = nativeWithRouter as any

export const withAppContextDecorators: ComponentDecorator = withAppContext as any;
