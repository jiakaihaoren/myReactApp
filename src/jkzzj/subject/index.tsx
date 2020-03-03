import React, { useState } from 'react';
import styles from './index.module.css';
import { CenterImg } from './centerImg';
import { SideLeaf } from './sideLeaf';
import { NavDetail } from './detail';

const navUris:string[] = ['nav1.png', 'nav2.png', 'nav3.png', 'nav4.png', 'nav5.png', 'nav6.png'];
const navSrcs:string[] = navUris.map(navUri => require(`../images/${navUri}`));
const navText:string[] = ['初识&相恋', '毕业&生日', '稻城', '长沙&雷子', '公园&山顶&滑雪', '成都&酒馆&熊猫'];

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
                        <SideLeaf navSrc={navSrcs[0]} navText={navText[0]} navIndex={0} showDetail={showDetail}></SideLeaf>
                        <SideLeaf navSrc={navSrcs[5]} navText={navText[5]} navIndex={5} showDetail={showDetail}></SideLeaf>
                    </div>
                    <div className={styles.nav}>
                        <SideLeaf navSrc={navSrcs[1]} navText={navText[1]} navIndex={1} showDetail={showDetail}></SideLeaf>
                        <CenterImg></CenterImg>
                        <SideLeaf navSrc={navSrcs[4]} navText={navText[4]} navIndex={5} showDetail={showDetail}></SideLeaf>
                    </div>
                    <div className={styles.nav}>
                        <SideLeaf navSrc={navSrcs[2]} navText={navText[2]} navIndex={2} showDetail={showDetail}></SideLeaf>
                        <SideLeaf navSrc={navSrcs[3]} navText={navText[3]} navIndex={3} showDetail={showDetail}></SideLeaf>
                    </div>
                </div> :
                <div>
                    <NavDetail navSrc={navSrcs[navIndex]} showNav={() => { setNavIndex(-1) }}></NavDetail>
                </div>}
        </div>
    );
};