import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './RevealForAboutComponent.module.css';

const ReactReveal = () => {
  return (
    <>
      <div className={styles.block}>
        <Fade top>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className={styles.title}>{'Наша команда'}</h1>
            <ul>
              <li className={styles.title}>
                <a href="https://github.com/NickBGor">Никита</a>
              </li>
              <li className={styles.title}>
                <a href="https://github.com/AlexanderGlazyrin">Александр</a>
              </li>
              <li className={styles.title}>
                <a href="https://github.com/kreand">Андрей</a>
              </li>
              <li className={styles.title}>
                <a href="https://github.com/KosenkowDmitrii">Дмитрий</a>
              </li>
              <li className={styles.title}>
                <a href="https://github.com/pitertsev">Иван</a>
              </li>
            </ul>
          </div>
        </Fade>
      </div>
      <div className={styles.block}>
        <Fade top>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className={styles.title}>{'Стек технологий'}</h1>
            <img alt={'as'} src="https://i.postimg.cc/wv1Wn5Nc/together.png" />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default ReactReveal;
