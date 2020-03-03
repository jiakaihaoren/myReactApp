import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styles from './index.module.css';
import { DetailImg1 } from './DetailImg1';

const trans = (s:number):string => `scale(${s})`;

interface NavDetailProps{
    navSrc:string,
    showNav:()=>void
}
export const NavDetail = (props: NavDetailProps) => {
    const { navSrc, showNav } = props;
    const [propsSpring, set] = useSpring(() => ({s: 1, config: { mass: 5, tension: 350, friction: 40 } }));
    const history = useHistory();
    const toNav = () => {
        // history.push('/animation');
        showNav();
    };
    return (
        <div>
            <DetailImg1></DetailImg1>
            {/* <animated.div
                className={styles.card}
                onMouseMove={() => set({ s: 1.1 })}
                onMouseLeave={() => set({ s: 1 })}
                onClick={() => { toNav() }}
                // @ts-ignore
                style={{ transform: propsSpring.s.interpolate(trans), backgroundImage: `url(${navSrc})` }}
            >返回</animated.div> */}
        </div>
    );
};