import * as rr from 'react-redux';
import * as _ from 'lodash';

const mapStateToProps = (filter: any) => (state: any) => {
  const keys = Object.keys(filter);
  if (!filter || keys.length === 0) {
    return state;
  }
  const retState = keys.reduce((obj, name: string) => {
    const path = filter[name];
    if (typeof path === 'object') {
      // eslint-disable-next-line
      obj[name] = mapStateToProps(path)(state[name]);
    } else {
      // eslint-disable-next-line
      obj[name] = typeof path === 'boolean' ? _.get(state, name) : _.get(state, path);
    }
    return obj;
  }, {});
  return retState;
};

const mapDispatchToProps = (filter: Record<string, string | Function>) => dispatch => {
  const keys = Object.keys(filter);
  if (!filter || keys.length === 0) {
    return {};
  }
  const ret = Object.keys(filter).reduce((obj, name) => {
    const path = filter[name];
    if (typeof path !== 'string') {
      obj[name] = (...args) => {
        dispatch(path(...args));
      };
    } else {
      const paths = path.split('.');
      const type = paths.length === 1 ? paths[0] : paths[paths.length - 1];
      // eslint-disable-next-line
      obj[name] = payload => dispatch({ type, payload });
    }

    return obj;
  }, {});

  return ret;
};

const connect =
  (stateFilter: any = {}, dispatchFilter: any = {}): Function =>
  target => {
    const ret = rr.connect(mapStateToProps(stateFilter), mapDispatchToProps(dispatchFilter), null, {
      forwardRef: true,
    })(target);
    ret.compName = target.name;
    return ret;
  };

export default connect;
