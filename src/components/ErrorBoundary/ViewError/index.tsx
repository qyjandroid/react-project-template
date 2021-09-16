import React from 'react';
import './index.scss';

export interface IViewErrorProps {
  message?: string;
}

const onReload = (e: React.MouseEvent) => {
  e.preventDefault();
  window.location.href = window.location.href.split('#')[0];
};

const ViewError: React.FC<IViewErrorProps> = ({ message }) => (
  <div className="error-custom-style-page">
    <div className="error-custom-style-mantle-page">
      <div className="error-boundary-page">
        {message}
        <span className="reload-page" onClick={onReload}>
          刷新
        </span>
      </div>
    </div>
  </div>
);

ViewError.defaultProps = {
  message: '加载失败,请重试!',
};

export default ViewError;
