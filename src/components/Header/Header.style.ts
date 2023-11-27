import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: var(--box_background);
  margin: 1.5rem;
  margin-bottom: 0;
  border-radius: 1rem;
  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    .iconify {
      font-size: 22px;
    }
    span {
      display: none;
    }
  }

  @media (min-width: 768px) {
    button {
      .iconify {
        font-size: 16px;
      }
      span {
        display: block;
      }
    }
  }
`;
