import React, {useState} from 'react';
import { useSpring, useSprings, animated, useTrail } from 'react-spring';
import { Button } from 'antd';

export const Animation = () => {
    const message = 'I love you';
    const messageArr = message.split(' ');
    const [toggle, setToggle] = useState(true);
    const props1 = useSpring({ opacity: 1, from: { opacity: 0 }});
    const props2 = useSpring({opacity: toggle ? 1 : 0});
    const [props3, set1] = useSpring(() => ({opacity: 1}));
    const springs = useSprings(messageArr.length, messageArr.map(item => ({ opacity: 1 / item.length, from: {opacity: 1} })));
    const [springs1, set] = useSprings(messageArr.length, index => ({opacity: 1}));
    // @ts-ignore
    const [trail, setTrail, stop] = useTrail(3, () => ({height: 100, from: {height: 0}}));
    const animatedClickHandle = (index: number) => {
        // @ts-ignore
        set(springIndex => {
            if (springIndex === index)
            { return { opacity: 0 } }
            return null;
        });
    };
    return (
        <div>
            <animated.div style={props1}>I will fade in</animated.div>
            <animated.div style={props2}>I will fade in and out1</animated.div>
            <Button onClick={() => { setToggle(!toggle) }}>Toggle1</Button>
            <animated.div style={props3}>I will fade in and out2</animated.div>
            <Button onClick={() => { set1({opacity: 0}) }}>Toggle2</Button>
            {springs1.map((props, index) =>
                <animated.div
                    style={props}
                    key={index}
                    onClick={() => { animatedClickHandle(index) }}
                >
                    {messageArr[index]}
                </animated.div>)}
            {/* {trail.map((props, index) => <animated.div style={props}>hahahhahahahah</animated.div>)} */}
        </div>
    );
};