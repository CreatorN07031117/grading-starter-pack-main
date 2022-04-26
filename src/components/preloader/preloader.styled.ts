import styled, { keyframes } from 'styled-components';


const LoaderWrapper = styled.div`
  --size-mid: 6vmin;
  --size-dot: 1.5vmin;
  --size-bar: 0.4vmin;
  --size-square: 3vmin;

  display: block;
  position: relative;
  width: 50%;
  display: grid;
  margin-top: 100px;
  place-items: center;


&:before,
&:after {
  content: '';
  box-sizing: border-box;
  position: absolute;
}
  `;


  const animation = keyframes`
  {
    0%, 80%, 100% {
      opacity: 0;
    }

    33% {
      opacity: 1;
    }

    0%, 100% {
      transform: translateX(-4vmin);
    }

    90% {
      transform: translateX(4vmin);
    }
  }
`;
  const Loader = styled.i`
  height: 100%;
	display: grid;
	place-items: center;
	border-radius: 4px;
	transition: opacity 0.4s ease;
}

&::before,
&::after {
	width: var(--size-dot);
	height: var(--size-dot);
	background-color: var(--color);
	border-radius: 50%;
	opacity: 0;
	animation: ${animation} 0.8s cubic-bezier(0.2, 0.32, 0, 0.87) infinite;
}

&:after {
	animation-delay: 0.3s;
}

`;


export {
  LoaderWrapper,
  Loader
}
