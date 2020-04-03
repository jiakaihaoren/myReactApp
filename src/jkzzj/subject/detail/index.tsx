import React from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import styles from './index.module.css';
import { DetailImg } from './detailImg/DetailImg';
import { SideLeaf } from '../sideLeaf';

interface NavDetailProps{
    navIndex:number,
    showNav:()=>void,
    showAnimated:boolean
}
export const NavDetail = (props: NavDetailProps) => {
    const { navIndex, showNav, showAnimated } = props;
    // const { xy } = useSpring({from: {xy: [0, 0] }, xy: [300, 100], config: {duration: 1000} });
    const [springProps, setSpringProps] = useSpring(() => ({xy: [0, 0], config: { duration: 300 } }));
    setSpringProps({xy: showAnimated ? [4.7, 7.5] : [-3, -3]});
    const toNav = () => {
        showNav();
    };
    return (
        <div className={styles.body}>
            <DetailImg navIndex={navIndex}></DetailImg>
            <animated.div className={styles.sideLeaf}
                onClick={() => { toNav() }}
                // @ts-ignore
                style={{transform: springProps.xy.interpolate((x, y) => `translate3d(${x}rem, ${y}rem, 0)`)}}
            >
                <SideLeaf navIndex={navIndex} showAnimated={false}><span>返回</span></SideLeaf>
            </animated.div>
        </div>
    );
};