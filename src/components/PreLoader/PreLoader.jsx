import React from 'react';
import s from './PreLoader.module.css'

const PreLoader = () => {
  return (
    <div className={s.preloader}>
      <div className={s.loader}></div>
    </div>
  );
};

export default PreLoader;
