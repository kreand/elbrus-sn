import React from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'antd';
import styles from './RevealForAboutComponent.module.css';

const ReactReveal = () => {
  return (
    <>
      <div className={styles.block}>
        <Fade top>
          <Row gutter={16} justify={'center'}>
            <h1 className={styles.title}>{'Наша команда'}</h1>
          </Row>
          <Row gutter={16} justify={'center'} style={{ marginTop: '7%' }}>
            <Col span={4} align={'middle'} justify={'middle'}>
              <img
                alt={''}
                style={{ width: '100%' }}
                src="https://res.cloudinary.com/elbrus-coding-bootcamp/image/upload/v1603369669/developers_photo/sufx5krro5vpdcpgsr30.png"
              />
              <a
                className={styles.titleName}
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/AlexanderGlazyrin"
              >
                Александр
              </a>
            </Col>
            <Col span={4} align={'middle'} justify={'middle'}>
              <img
                alt={''}
                style={{ width: '100%' }}
                src="https://res.cloudinary.com/elbrus-coding-bootcamp/image/upload/v1603369669/developers_photo/mtiygrija2zmz40rcpxj.png"
              />
              <a
                className={styles.titleName}
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/kreand"
              >
                Андрей
              </a>
            </Col>
            <Col span={4} align={'middle'} justify={'middle'}>
              <img
                alt={''}
                style={{ width: '100%' }}
                src="https://res.cloudinary.com/elbrus-coding-bootcamp/image/upload/v1603369669/developers_photo/kfykou1ritxad7kwvn24.png"
              />
              <a
                className={styles.titleName}
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/NickBGor"
              >
                Никита
              </a>
            </Col>
            <Col span={4} align={'middle'} justify={'middle'}>
              <img
                alt={''}
                style={{ width: '100%' }}
                src="https://res.cloudinary.com/elbrus-coding-bootcamp/image/upload/v1603369823/developers_photo/cpzxy4qjuhhgawyhn3aq.png"
              />
              <a
                className={styles.titleName}
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/KosenkowDmitrii"
              >
                Дмитрий
              </a>
            </Col>
            <Col span={4} align={'middle'} justify={'middle'}>
              <img
                alt={''}
                style={{ width: '100%' }}
                src="https://res.cloudinary.com/elbrus-coding-bootcamp/image/upload/v1603369669/developers_photo/tkpc8poprrptdprad54l.png"
              />
              <a
                className={styles.titleName}
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/pitertsev"
              >
                Иван
              </a>
            </Col>
          </Row>
        </Fade>
      </div>
      <div className={styles.block}>
        <Fade top>
          <Row>
            <Col
              offset={4}
              span={16}
              justify={'center'}
              style={{ marginTop: '1%' }}
            >
              <h1 className={styles.title}>{'Стек технологий'}</h1>
            </Col>
          </Row>
          <Row>
            <Col offset={4} span={16} style={{ marginTop: '3%' }}>
              <img
                style={{ width: '100%', height: '62vh' }}
                alt={''}
                src="https://i.postimg.cc/wv1Wn5Nc/together.png"
              />
            </Col>
          </Row>
        </Fade>
      </div>
    </>
  );
};

export default ReactReveal;
