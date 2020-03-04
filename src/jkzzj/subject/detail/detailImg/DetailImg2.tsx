// import React, { useState } from 'react';
// import { useSprings, animated, interpolate } from 'react-spring';
// import { useDrag } from 'react-use-gesture';
// import styles from './DetailImg.module.css';

// const navUris:string[] = ['nav1.png', 'nav2.png', 'nav3.png', 'nav4.png', 'nav5.png', 'nav6.png'];
// const pages:string[] = navUris.map(navUri => require(`../../../images/${navUri}`));

// export const DetailImg = () => {
//     const [gone] = useState(new Set<number>());
//     const [springsProps, setSpringsProps] = useSprings(pages.length, i => ({
//         xy: [0, 0],
//         scale: 1,
//         display: 'block'
//     }));
//     const bind = useDrag(({args: [i], down, direction: [xDir, yDir], movement: [mx, my], dragging }) => {
//         if (dragging){
//             // @ts-ignore
//             setSpringsProps(index => {
//                 if (i === index) {
//                     const isGone = mx > window.innerWidth / 2 || my > window.innerHeight / 2;
//                     // return { xy: [isGone ? down ? window.innerWidth / 2 : 0 : down ? mx : 0, down ? isGone ? window.innerHeight / 2 : my : 0], immediate: down};
//                     return { xy: [isGone ? window.innerWidth / 2 : mx, isGone ? window.innerHeight / 2 : my], immediate: down};
//                 }
//                 return;
//             });
//         }
//     });
//     return (
//         <div className={styles.root}>
//             {springsProps.map(({ xy, display, scale }, i) =>
//                 <animated.div
//                     key={i}
//                     className={styles.root2}
//                     {...bind(i)}
//                     // @ts-ignore
//                     style={{ transform: interpolate(xy, (x, y) => `translate(${x}px,${y}px)`), display, scale, backgroundImage: `url(${pages[i]})` }}
//                 ></animated.div>
//             )}
//         </div>
//     );
// };
export const test = null;