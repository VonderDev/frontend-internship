import { memo, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const bounceUp = keyframes`
  from {
    transform: scale(0)
    
  }
  to {
    transform: scale(1)
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const heartBeat = keyframes`
  0% { 
    transform: scale(1);
  }
  50% { 
    transform: scale(0.8);
  }
  100% { 
    transform: scale(1);
  }
`;

const upAndDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
`;

const slideInLeft = keyframes`
  0% {
    transform: translateX(-900px);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-150%);
  }
`;
const slideOutRight = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(150%);
  }
`;

const slideInRight = keyframes`
   0% {
    transform: translateX(900px);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideFromBottom = keyframes`
   0% {
    transform: translateY(900px);
  }
  100% {
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const bounceIn = keyframes`
   0% {
     opacity: 0.4;
    transform: scale(0);
   }
   50% {
     opacity: 0.8;
     transform: scale(1.2);
   }
   100%{
     opacity: 1;
     transform: scale(1);
   }
  `;

const jelloVertical = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  15% {
    transform: scale3d(0.75, 1.25, 1);
  }
  20% {
    transform: scale3d(1.25, 0.75, 1);
  }
  25% {
    transform: scale3d(0.85, 1.15, 1);
  }
  32% {
    transform: scale3d(1.05, 0.95, 1);
  }
  37% {
    transform: scale3d(0.95, 1.05, 1);
  }
  50% {
    transform: scale3d(1, 1, 1);
  }
`;

type AnimationType =
    | 'fadeIn'
    | 'bounceUp'
    | 'slideInLeft'
    | 'slideInRight'
    | 'slideFromBottom'
    | 'heartBeat'
    | 'upAndDown'
    | 'fadeOut'
    | 'bounceIn'
    | 'jelloVertical'
    | 'slideOutLeft'
    | 'slideOutRight';

type AnimationProps = {
    duration?: number;
    delay?: number;
    children: React.ReactChild | React.ReactNode;
    delegated?: any;
    style?: any;
    type?: AnimationType;
    playing?: boolean;
    onExit?: AnimationType;
    onEnter?: AnimationType;
    triggerKey?: any;
};

const fadeInAnimation = css`
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
`;

const bounceUpAnimation = css`
    animation-name: ${bounceUp};
    animation-fill-mode: backwards;
`;

const slideInLeftAnimation = css`
    animation: ${slideInLeft} forwards;
    transform: translateX(-900px);
    width: 100%;
`;

const slideOutLeftAnimation = css`
    animation: ${slideOutLeft} forwards;
    animation-duration: 0.5s !important;
    width: 100%;
`;
const slideOutRightAnimation = css`
    animation: ${slideOutRight} forwards;
    animation-duration: 0.5s !important;
    width: 100%;
`;

const slideInRightAnimation = css`
    animation: ${slideInRight} forwards;
    transform: translateX(900px);
    width: 100%;
`;

const slideFromBottomAnimation = css`
    animation: ${slideFromBottom} forwards;
    transform: translateY(900px);
    width: 100%;
`;

const heartBeatAnimation = css`
    animation: ${heartBeat} 4.72s ease infinite;
    transform-origin: 50% 50%;
`;

const upAndDownAnimation = css`
    animation: ${upAndDown} 1s linear infinite;
`;

const bounceInAnimation = css`
    animation: ${bounceIn} 0.4s backwards;
    transition-duration: 0.4s;
`;

const fadeOutAnimation = css`
    animation: ${fadeOut} 1s ease-out both;
`;

const jelloAnimation = css`
    animation: ${jelloVertical} 2.5s infinite both !important;
`;

const Wrapper = styled.div<{
    type?: AnimationType;
}>`
    @media (prefers-reduced-motion: no-preference) {
        ${({ type }) => {
            switch (type) {
                case 'fadeIn':
                    return fadeInAnimation;
                case 'bounceUp':
                    return bounceUpAnimation;
                case 'slideInLeft':
                    return slideInLeftAnimation;
                case 'slideOutLeft':
                    return slideOutLeftAnimation;
                case 'slideOutRight':
                    return slideOutRightAnimation;
                case 'slideInRight':
                    return slideInRightAnimation;
                case 'slideFromBottom':
                    return slideFromBottomAnimation;
                case 'heartBeat':
                    return heartBeatAnimation;
                case 'upAndDown':
                    return upAndDownAnimation;
                case 'fadeOut':
                    return fadeOutAnimation;
                case 'bounceIn':
                    return bounceInAnimation;
                case 'jelloVertical':
                    return jelloAnimation;
                default:
                    return fadeInAnimation;
            }
        }}
    }
`;
function useDisplayTimeOut(time: number) {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplay(true);
        }, time);
        return () => clearTimeout(timeout);
    }, [time]);

    return display;
}

/**
 * Renders a <Animation>{children}</Animation> component
 * @param
 * @param  props.triggerKey - 0 is initial mounted / dont play animation if value = 0
 */
const Animation: React.FC<AnimationProps> = ({ duration = 300, delay = 0, children, type = 'fadeIn', playing = true, onExit, onEnter, triggerKey, ...delegated }) => {
    const delayMount = useDisplayTimeOut(duration);
    const isInitial = triggerKey !== 0;

    return playing || (playing && isInitial) ? (
        <Wrapper
            // type={type}
            type={onExit && onEnter && isInitial ? (!delayMount ? onExit : onEnter) : type}
            {...delegated}
            style={{
                ...(delegated.style || {}),
                animationDuration: duration + 'ms',
                animationDelay: delay + 'ms',
            }}
        >
            {children}
        </Wrapper>
    ) : (
        <div>{children}</div>
    );
};

export default memo(Animation);
