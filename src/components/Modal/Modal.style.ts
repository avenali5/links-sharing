import styled from "styled-components";

export const ModalStyle = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  transition: all 0.3s;
  pointer-events: ${({ visible }) => (visible ? "all" : "none")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    position: absolute;
    background: var(--box_background);
    max-height: 18rem;
    height: fit-content;
    width: 80%;
    max-width: 21rem;
    border-radius: 1rem;
    padding: 1.5rem;
    transition: all 0.3s;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transform: ${({ visible }) =>
      visible ? "translateY(0)" : "translateY(1.5rem)"};
    .close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }
  }
`;
