import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
import { useSprings, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import styles from './DetailImg1.module.css';

const navUris:string[] = ['nav1.png', 'nav2.png', 'nav3.png', 'nav4.png', 'nav5.png', 'nav6.png'];
const pages:string[] = navUris.map(navUri => require(`../../images/${navUri}`));

export const DetailImg1 = () => {
    const index = useRef(0);
    const [springsProps, set] = useSprings(pages.length, i => ({
        x: i * window.innerWidth,
        scale: 1,
        display: 'block'
    }));
    const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
        if (down && distance > window.innerWidth / 2)
        // @ts-ignore
        { cancel(index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)) }
        // @ts-ignore
        set(i => {
            if (i < index.current - 1 || i > index.current + 1) { return { display: 'none' } }
            const x = (i - index.current) * window.innerWidth + (down ? mx : 0);
            const scale = down ? 1 - distance / window.innerWidth / 2 : 1;
            return { x, scale, display: 'block' };
        });
    });
    return (
        <div className={styles.root}>
            {springsProps.map(({ x, display, scale }, i) =>
                <animated.div className={styles.root1} {...bind()} key={i} style={{ display, transform: interpolate([x], (x) => `translate(${x}px,0)`) }}>
                    <animated.div className={styles.root2} style={{ scale, backgroundImage: `url(${pages[i]})` }} />
                </animated.div>
            )}
        </div>
    );
};