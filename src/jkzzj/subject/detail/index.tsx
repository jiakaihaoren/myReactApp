import React from 'react';
// import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import { DetailImg1 } from './detailImg/DetailImg1';
import { SideLeaf } from '../sideLeaf';

interface NavDetailProps{
    navIndex:number,
    showNav:()=>void
}
export const NavDetail = (props: NavDetailProps) => {
    const { navIndex, showNav } = props;
    // const history = useHistory();
    const toNav = () => {
        // history.push('/animation');
        showNav();
    };
    return (
        <div className={styles.body}>
            <DetailImg1 navIndex={navIndex}></DetailImg1>
            <div className={styles.sideLeaf} onClick={() => { toNav() }}>
                <SideLeaf navIndex={navIndex}><span>返回</span></SideLeaf>
            </div>
        </div>
    );
};