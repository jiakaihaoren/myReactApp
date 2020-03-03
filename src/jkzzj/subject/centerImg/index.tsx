import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './index.module.css';
import imgSrc from '../../images/jkzzj/subjectImg.jpg';

const calc = (x:number, y:number):number[] =>
    [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x:number, y:number, s:number):string =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const CenterImg = () => {
    const [propsSpring, set] = useSpring(() => ({xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    return (
        <div className={styles.wrap}>
            <animated.img
                className={styles.card}
                src={imgSrc}
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                // @ts-ignore
                style={{ transform: propsSpring.xys.interpolate(trans) }}
            />
        </div>
    );
};