import styled from 'styled-components'

export const LoadingStyled = styled.div`
  align-items: center;
  background-color: #f7e9e0;
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: center;
  position: absolute;
  opacity: ${(props) => (props.lt ? '1' : '0')};

  width: 100%;
  z-index: ${(props) => (props.lt ? '3' : '0')};

  img {
    width: 25vw;
  }

  .container-circles {
    display: flex;

    div {
      animation: bounce 1.5s 0.5s linear infinite;
      border-radius: 100%;
      height: 1vw;
      margin: 1vw;

      width: 1vw;
    }

    .first-circle {
      background-color: #55a0adcc;
    }

    .second-circle {
      animation-delay: 0.1s;
      background-color: #e5bad8c5;
    }

    .third-circle {
      animation-delay: 0.2s;
      background-color: #64c5d6b9;
    }

    .four-circle {
      animation-delay: 0.3s;
      background-color: #4e2d23a6;
    }
  }

  @keyframes bounce {
    0%,
    50%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(1.4);
    }
  }

  @media (max-width: 450px) {
    img {
      width: 50vw;
    }

    .container-circles {
      div {
        animation: bounce 1.5s 0.5s linear infinite;
        border-radius: 100%;
        height: 2vw;
        margin: 2vw;

        width: 2vw;
      }
    }
  }
`
