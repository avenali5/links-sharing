import styled from "styled-components";

export const FormsStyle = styled.div`
  padding: 1.5rem;
  background: var(--box_background);
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  color: var(--font_color);
  .slide-content {
    width: 100%;

    > h3 {
      font-size: 1.6rem;
      color: var(--font_color);
    }
    > p {
      font-size: 0.9rem;
      color: var(--second_font_color);
      margin: 0.4rem 0 1rem;
    }
    .link-element-container,
    .profile-form {
      padding: 0.9rem;
      background: var(--main_background);
      margin: 1rem 0;
      border-radius: 12px;
      transition: all 0.3s;
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        button {
          font-size: 0.9rem;
          color: var(--second_font_color);
          cursor: pointer;
        }
      }

      .input-group {
        position: relative;
        .iconify {
          position: absolute;
          bottom: 0.7rem;
          left: 0.5rem;
          pointer-events: none;
        }
        .error-input {
          border-color: red;
        }
        .error {
          bottom: -0.5rem;
          font-size: 0.8rem;
          color: red;
          position: absolute;
          transform: translateY(100%);
        }
      }
      .platform {
      }
    }
    .item-exit-active {
      opacity: 0;
      transition: opacity 200ms ease-out;
    }
    .item-entry-active {
      opacity: 1;
      transition: opacity 200ms ease-out;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 0.5rem;
      button {
        justify-content: center;
        width: 100%;
        text-align: center;
      }
    }
  }
  @media (min-width: 768px) {
    width: 65%;
    .slide-content {
      .buttons {
        flex-direction: row;
        button {
          width: fit-content;
        }
      }
    }
  }
`;
