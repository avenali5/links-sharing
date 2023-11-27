import styled from "styled-components";

export const BuilderStyle = styled.div`
  width: 35%;
  height: fit-content;
  background: var(--box_background);
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  top: 1rem;
  .outer-wrapper {
    border: 2px solid lightgrey;
    padding: 0.5rem;
    width: 100%;
    border-radius: 27px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid lightgrey;
    border-radius: 30px;
    padding: 1rem 1rem;
    width: 100%;
    aspect-ratio: 9 / 18;
    padding: 1.5rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    width: 100%;
    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  .links {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    .link {
      padding: 0.7rem 0.7rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      color: white;
      border-radius: 0.5rem;
      .arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
      }
      span {
        flex: 1;
      }
      &.youtube {
        background: #fd0000;
      }
      &.dribbble {
        background: #e94b88;
      }
      &.linkedin {
        background: #2d69ff;
      }
      &.github {
        background: #191919;
      }
      &.twitch {
        background: #8f45fb;
      }
      &.twitter {
        background: #1d9bf0;
      }
      &.behance {
        background: #0056ff;
      }
    }
  }
`;
