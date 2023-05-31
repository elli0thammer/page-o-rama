import React from 'react';
import s from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

  const rootClasses = visible ? `${s.myModal} ${s.active}` : s.myModal

  return (
    <div className={rootClasses} onClick={() => setVisible(false)}>
      <div className={s.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <div className={s.closeModal} onClick={() => setVisible(false)}></div>
      </div>
    </div>
  );
};

export default MyModal;
