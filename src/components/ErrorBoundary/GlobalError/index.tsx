import React from 'react';
import { classNames } from '@/util/index';
import Modal from 'react-modal';
import './index.scss';

export interface IGlobalErrorProps {
  message?: string;
  isDialog?: boolean;
}

const onReload = (e: React.MouseEvent) => {
  e.preventDefault();
  window.location.href = window.location.href.split('#')[0];
};

const GlobalError: React.FC<IGlobalErrorProps> = ({ message, isDialog }) => {
  if (isDialog === false) {
    return (
      <div className="error-custom-style">
        <div className="error-boundary">
          {message}
          <span className="reload" onClick={onReload}>
            刷新
          </span>
        </div>
      </div>
    );
  }

  return (
    <Modal
      isOpen
      className={classNames('error-boundary')}
      overlayClassName={classNames('error-boundary-modal-overlay', 'error-custom-modal-style')}
      appElement={document.body}
    >
      <div>
        {message}
        <span className="reload" onClick={onReload}>
          刷新
        </span>
      </div>
    </Modal>
  );
};

GlobalError.defaultProps = {
  message: '页面崩溃啦！',
};

export default GlobalError;
