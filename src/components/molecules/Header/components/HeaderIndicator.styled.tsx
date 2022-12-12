import styled, { keyframes } from 'styled-components';
import { Colors } from 'theme/Colors';

const ldsRipple = keyframes`
    0% {
        top: 13px;
        left: 13px;
        width: 0;
        height: 0;
        opacity: 0;
    }
    4.9% {
        top: 13px;
        left: 13px;
        width: 0;
        height: 0;
        opacity: 0;
    }
    5% {
        top: 13px;
        left: 13px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 26px;
        height: 26px;
        opacity: 0;
    }
`;

const IndicatorWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;

  & div {
    position: absolute;
    border: 2px solid ${Colors.blue400};
    opacity: 1;
    border-radius: 50%;
    animation: ${ldsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export { IndicatorWrapper };
