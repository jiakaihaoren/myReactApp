import React, { useState } from 'react';
import styles from './index.module.css';
import { CenterImg } from './centerImg';
import { SideLeaf } from './sideLeaf';
import { NavDetail } from './detail';
import { navTexts } from './utils';

// const navSrcs:string[] = navUris.map(navUri => require(`../images/${navUri}`));

export const Subject = () => {
    const [navIndex, setNavIndex] = useState<number>(-1);
    const showDetail = (index:number) => {
        setNavIndex(index);
    };
    return (
        <div className={styles.body}>
            {navIndex === -1 ?
                <div className={styles.home}>
                    <div className={styles.nav}>
                        <SideLeaf navIndex={0} showDetail={showDetail}><span>{navTexts[0]}</span></SideLeaf>
                        <SideLeaf navIndex={5} showDetail={showDetail}><span>{navTexts[5]}</span></SideLeaf>
                    </div>
                    <div className={styles.nav}>
                        <SideLeaf navIndex={1} showDetail={showDetail}><span>{navTexts[1]}</span></SideLeaf>
                        <CenterImg></CenterImg>
                        <SideLeaf navIndex={4} showDetail={showDetail}><span>{navTexts[4]}</span></SideLeaf>
                    </div>
                    <div className={styles.nav}>
                        <SideLeaf navIndex={2} showDetail={showDetail}><span>{navTexts[2]}</span></SideLeaf>
                        <SideLeaf navIndex={3} showDetail={showDetail}><span>{navTexts[3]}</span></SideLeaf>
                    </div>
                </div> :
                <div>
                    <NavDetail navIndex={navIndex} showNav={() => { setNavIndex(-1) }}></NavDetail>
                </div>}
        </div>
    );
};