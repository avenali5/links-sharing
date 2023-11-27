import styled from "styled-components";

export const SocialOptionsStyle = styled.div`
  .selected {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--box_background);
  }
  .options {
    background: var(--box_background);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    /* min-width: 30rem; */
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    max-width: 20rem;
  }
  .option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.7rem;
    width: 100%;
    cursor: pointer;
    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
    }
    span {
      flex: 1;
    }
    &:hover {
      background: var(--main_background);
    }
  }
  .iconify {
    position: static !important;
    font-size: 20px;
  }
`;
