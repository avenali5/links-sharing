import styled from "styled-components";

export const LayoutStyle = styled.div`
  display: flex;
  padding: 1.5rem;
  gap: 2rem;

  .builder-wrapper {
    display: none;
    pointer-events: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .builder-wrapper {
      display: flex;
    }
  }
`;
