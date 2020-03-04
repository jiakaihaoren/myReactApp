import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styles from './index.module.css';
import { navUris } from '../utils';

const trans = (s:number):string => `scale(${s})`;

interface SideLeafProps{
    children: React.ReactElement,
    navIndex:number,
    showDetail?:(id:number)=>void
}

export const SideLeaf : React.FC<SideLeafProps> = (props: SideLeafProps) => {
    const { navIndex, showDetail, children } = props;
    const navSrc:string = require(`../../images/${navUris[navIndex]}`);
    const [propsSpring, set] = useSpring(() => ({s: 1, config: { mass: 5, tension: 350, friction: 40 } }));
    // const history = useHistory();
    const toNavDetail = () => {
        // history.push('/animation');
        if (typeof showDetail === 'function') { showDetail(navIndex) }
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
            >{children}</animated.div>
        </div>
    );
};

// export default withRouter(SideLeaf);