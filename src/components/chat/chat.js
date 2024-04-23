import React from 'react'
import * as styles from "./chat.module.css"

const Chat = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.line} />
        <div className={styles.header}>
        <div className={styles.title}>
        Got a project brewing?
        </div>Let's chat!
        </div>
        <div className={styles.body}>
          <div className={styles.bodyText}>
          Fill the brief
          </div>
          <div className={styles.arrow}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#EDFF23"/>
            <path d="M18.5739 21.269L17.5511 20.252L21.1023 16.7065H8V15.2292H21.1023L17.5511 11.6781L18.5739 10.6667L23.875 15.9679L18.5739 21.269Z" fill="black"/>
          </svg>
          </div>
        </div>
        <div className={styles.footer}>
          
            Say hello via email
            contact@wearemaverick.pl 
            
        
        </div>
      </div>
    </div>
  )
}

export default Chat