import * as React from 'react';
// import produce from 'immer';

/**
 *
 *
 * @class BaseComponent
 * @extends {React.Component<P, S>}
 * @template P
 * @template S
 */

type fun = (draft: any) => void;

/**
 * UI基础组件
 */
export default class BaseComponent<P = {}, S = {}> extends React.Component<P, S> {


    render() {
        return <div></div>;
    }
}
