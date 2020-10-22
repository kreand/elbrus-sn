import React from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'antd';
import styles from './RevealForAboutComponent.module.css';

const ReactReveal = () => {
    return (
        <>
            <div className={styles.block}>
                <Fade top>
                        <Row gutter={16} justify={"center"}>
                        <h1 className={styles.title}>{'Наша команда'}</h1>
                        </Row>
                        <Row gutter={16} justify={"center"} >
                          <Col span={4} align={"middle"} justify={"middle"}>
                              <a className={styles.title} href="https://github.com/AlexanderGlazyrin">Александр</a>
                          </Col>
                          <Col span={4} align={"middle"} justify={"middle"}>
                              <a className={styles.title} href="https://github.com/kreand">Андрей</a>
                          </Col>
                          <Col span={4} align={"middle"} justify={"middle"}>
                              <a className={styles.title} href="https://github.com/NickBGor">Никита</a>
                          </Col >
                            <Col span={4} align={"middle"} justify={"middle"}>
                                <a className={styles.title} href="https://github.com/KosenkowDmitrii">Дмитрий</a>
                            </Col>
                            <Col span={4} align={"middle"} justify={"middle"}>
                                <a className={styles.title} href="https://github.com/pitertsev">Иван</a>
                            </Col>
                        </Row>
                </Fade>
            </div>
            <div className={styles.block}>
                <Fade top>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h1 className={styles.title}>{'Стек технологий'}</h1>
                        <img alt={'as'} src="https://i.postimg.cc/wv1Wn5Nc/together.png"/>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default ReactReveal;
