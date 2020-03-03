import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styles from './index.module.css';

const trans = (s:number):string => `scale(${s})`;

interface SideLeafProps{
    navIndex:number,
    navSrc: string,
    navText: string,
    showDetail:(id:number)=>void
}
export const SideLeaf = (props: SideLeafProps) => {
    const { navIndex, navSrc, navText, showDetail } = props;
    const [propsSpring, set] = useSpring(() => ({s: 1, config: { mass: 5, tension: 350, friction: 40 } }));
    const history = useHistory();
    const toNavDetail = () => {
        // history.push('/animation');
        showDetail(navIndex);
    };
    return (
        <div>
            <animated.div
                className={styles.card}
                onMouseMove={() => set({ s: 1.1 })}
                onMouseLeave={() => set({ s: 1 })}
                onClick={() => { toNavDetail() }}
                // @ts-ignore
                style={{ transform: propsSpring.s.interpolate(trans), backgroundImage: `url(${navSrc})` }}
            >{navText}</animated.div>
        </div>
    );
};

// export default withRouter(SideLeaf);