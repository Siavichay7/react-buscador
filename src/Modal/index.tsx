import React from 'react'
import ReactDom from 'react-dom'
import "./Modal.css";

export const Modal = ({children}: any) => {
    return ReactDom.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal') as HTMLElement
    )
}