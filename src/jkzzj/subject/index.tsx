import React, { useState } from 'react';
import styles from './index.module.css';
import { CenterImg } from './centerImg';
import { SideLeaf } from './sideLeaf';
import { NavDetail } from './detail';
import { navTexts, sourceUrl } from './utils';

export const Subject = () => {
    const [navIndex, setNavIndex] = useState<number>(-1);
    const [showAnimated, setShowAnimated] = useState<boolean>(false);
    const showDetail = (index:number) => {
        if (index !== -1) {
            setShowAnimated(true);
        }
        if (index === -1) {
            setShowAnimated(false);
        }
        setTimeout(() => {
            setNavIndex(index);
        }, 1000);
    };

    const bgMusicSource = (index:number):string => {
        switch (index) {
            case 0:
                return '周三 - 一个歌手的情书 (Live).mp3';
            case 1:
                return '阿肆 _ 林宥嘉 - 致姗姗来迟的你.mp3';
            case 2:
                return '马良 - 往后余生 (Demo).mp3';
            case 3:
                return '赵雷 - 开往北京的火车.mp3';
            case 4:
                return '莫文蔚 - 慢慢喜欢你.mp3';
            case 5:
                return '赵雷 - 成都.mp3';
            default:
                return '陈芳语 - 爱你 (铃声).mp3';
        }
    };
    const bgMusic = `${sourceUrl}/music/${bgMusicSource(navIndex)}`;
    return (
        <div className={styles.body}>
            <audio id="bg-music" src={bgMusic} preload="auto" autoPlay loop></audio>
            <div className={styles.centerImg}>
                <CenterImg showAnimated={showAnimated}></CenterImg>
            </div>
            {navIndex === -1 ?
                <div className={styles.home}>
                    <div className={styles.nav}>
                        <SideLeaf navIndex={0} showDetail={showDetail} showAnimated={showAnimated}><span>{navTexts[0]}</span></SideLeaf>
                        <SideLeaf navIndex={5} showDetail={showDetail} showAnimated={showAnimated}><span>{navTexts[5]}</span></SideLeaf>
                    </div>
                    <div className={styles.navCenter}>
                        <SideLeaf navIndex={1} showDetail={showDetail} showAnimated={showAnimated}><span>{navTexts[1]}</span></SideLeaf>
                        <SideLeaf navIndex={4} showDetail={showDetail} showAnimated={showAnimated}><span>{navTexts[4]}</span></SideLeaf>
                    </div>
                    <div className={styles.nav}>
                        <SideLeaf navIndex={2} showDetail={showDetail} showAnimated={showAnimated}><span>{navTexts[2]}</span></SideLeaf>
                        <SideLeaf navIndex={3} showDetail={showDetail} showAnimated={showAnimated}><span>{navTexts[3]}</span></SideLeaf>
                    </div>
                </div> :
                <div>
                    <NavDetail navIndex={navIndex} showNav={() => { showDetail(-1) }} showAnimated={showAnimated}></NavDetail>
                </div>}
        </div>
    );
};