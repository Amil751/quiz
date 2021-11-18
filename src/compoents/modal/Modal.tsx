import { jsx } from '@emotion/react';
import React from 'react';
import classes from './Modal.module.css'
interface Props{
   children: JSX.Element,
}
const Modal:React.FC <Props>= ({children}) => {
    return (
        <div className={classes.modal}>
            {children}
        </div>
    );
};

export default Modal;