import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
// eslint-disable-next-line no-unused-vars
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import styles from './DetailImg1.module.css';
import { navImgs } from '../../utils';

interface DetailImg1Props{
    navIndex:number
}
export const DetailImg1 = (props: DetailImg1Props) => {
    const { navIndex } = props;
    const pages:string[] = navImgs[navIndex].map(navImg => require(`../../../images/jkzzj/${navImg}`));
    const index = useRef(0);
    const [springsProps, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth / 2, sc: 1, display: 'block' }));
    const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
        if (down && distance > window.innerWidth / 2 / 2)
        // @ts-ignore
        { cancel(index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)) }
        // @ts-ignore
        set(i => {
            if (i < index.current - 1 || i > index.current + 1) { return { display: 'none' } }
            const x = (i - index.current) * window.innerWidth / 2 + (down ? xDelta : 0);
            const sc = down ? 1 - distance / window.innerWidth / 2 / 2 : 1;
            return { x, sc, display: 'block' };
        });
    });
    return (
        <div className={styles.root}>
            {springsProps.map(({ x, display, sc }, i) =>
                <animated.div className={styles.root1} {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
                    <animated.div className={styles.root2} style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
                </animated.div>)}
        </div>
    );
};