import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './index.module.css';
import {sourceUrl} from '../utils';

const trans = (x:number, y:number, s:number):string =>
    `translate3d(${x}%, ${y}%, 0) scale(${s})`;

interface CenterImgProps{
    showAnimated:boolean
}
export const CenterImg = (props:CenterImgProps) => {
    const {showAnimated} = props;
    const [propsSpring, set] = useSpring(() => ({xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    set({ xys: showAnimated ? [-200, -100, 1] : [-50, -50, 1] });
    const imageUrl = `${sourceUrl}/images/jkzzj/subjectImg.jpg`;
    return (
        <animated.div className={styles.wrap}
            onMouseMove={() => !showAnimated && set({ xys: [-50, -50, 1.1] })}
            onMouseLeave={() => !showAnimated && set({ xys: [-50, -50, 1] })}
            // onClick={() => set({ xys: [20, 20, 1] })}
            // @ts-ignore
            style={{ transform: propsSpring.xys.interpolate(trans) }}
        >
            <img
                className={styles.card}
                src={imageUrl}
            />
        </animated.div>
    );
};