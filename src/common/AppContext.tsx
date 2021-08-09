import React from "react";
import BaseComponent from "@/components/BaseComponent";
import TContext from "./TContext";
import { IAppContext } from '@/types/IContext';


const AppContext = TContext<IAppContext>({} as any);

export default AppContext;

export const { Consumer } = AppContext;

export const { Provider } = AppContext;

export function withAppContext<T>(Com: React.ComponentType<IAppContext>) {
    return class Component<P extends IAppContext & T, S> extends BaseComponent<P, S> {
        render() {
            const { props } = this;
            return (
                <AppContext.Consumer>
                    {
                        context => <Com {...props} {...context} />
                    }
                </AppContext.Consumer>
            );
        }
    };
}



export const withAppContextDecorators: any = withAppContext;