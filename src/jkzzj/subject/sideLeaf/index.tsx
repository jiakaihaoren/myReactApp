import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './index.module.css';
import { sourceUrl } from '../utils';
const navUris:string[] = ['nav1.png', 'nav2.png', 'nav3.png', 'nav4.png', 'nav5.png', 'nav6.png'];

const trans = (s:number):string => `scale(${s})`;

interface SideLeafProps{
    children: React.ReactElement,
    navIndex:number,
    showDetail?:(id:number)=>void
    showAnimated:boolean
}

export const SideLeaf : React.FC<SideLeafProps> = (props: SideLeafProps) => {
    const { navIndex, showDetail, children, showAnimated } = props;
    const [springProps, setSpringProps] = useSpring(() => ({s: 1, config: { duration: 300 } }));
    const {s} = useSpring({s: 1, config: { duration: 500 }, from: {s: 0} });
    setSpringProps({s: showAnimated ? 0 : 1});
    const toNavDetail = () => {
        if (showDetail) {
            showDetail(navIndex);
        }
    };
    const imageUrl = `${sourceUrl}/images/${navUris[navIndex]}`;
    return (
        <animated.div style={{transform: s.interpolate(trans)}}>
            <animated.div
                className={styles.card}
                onMouseMove={() => !showAnimated && setSpringProps({ s: 1.1 })}
                onMouseLeave={() => !showAnimated && setSpringProps({ s: 1 })}
                onClick={() => { toNavDetail() }}
                // @ts-ignore
                style={{ transform: springProps.s.interpolate(trans), backgroundImage: `url(${imageUrl})` }}
            >{children}</animated.div>
        </animated.div>
    );
};