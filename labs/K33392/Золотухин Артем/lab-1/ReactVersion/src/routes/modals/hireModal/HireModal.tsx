import React from 'react'
import ReactDom from 'react-dom'
import styles from './hireModal.module.css'
import * as AiIcons from 'react-icons/ai'
export default function HireModal({
  isOpen,
  children,
  onClose,
  onNavigateBack,
}) {
  if (!isOpen) return null

  return ReactDom.createPortal(
    <>
      <div className={styles['overlay']} />
      <div className={styles['modal']}>
        <AiIcons.AiOutlineClose
          className={styles['close-btn']}
          onClick={onClose}
          width={30}
          height={30}
        />
        {children}
        <button className={styles['nav-back-btn']} onClick={onNavigateBack}>
          Посмотреть другие варианты
        </button>
      </div>
    </>,
    document.getElementById('portal')!
  )
}
