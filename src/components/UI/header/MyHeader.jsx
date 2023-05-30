import React from 'react';
import s from './MyHeader.module.css'

const MyHeader = ({title}) => {
  return (
    <h1 className={s.header}>{title}</h1>
  );
};

export default MyHeader;
