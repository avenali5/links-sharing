import styled from "styled-components";

export const PreviewModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background: var(--box_background);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all ease-out;
  transform: translateX(100%);
  .banner {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 30%;
    border-radius: 0 0 2rem 2rem;
  }
  .card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .builder-wrapper {
      width: 80%;
      max-width: 18rem;
      .empty-state-wrapper {
        display: none;
      }
    }
    .buttons {
      display: flex;
      flex-direction: column;
      width: 50%;
      max-width: 18rem;
      gap: 1rem;
      margin-top: 2rem;
      button,
      a {
        justify-content: center;
        width: 100%;
      }
    }
    .url {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 1rem 0;
      border: 2px dashed var(--accent_color);
      padding: 0.5rem 1rem;
      border-radius: 12px;
      cursor: pointer;
      transition: 0.1s all;
      &:active {
        transform: scale(0.9);
      }
    }
  }
`;
