import styled from "styled-components";

export const ButtonStyle = styled.button`
  border: 2px solid var(--accent_color);
  padding: 0.6rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.1s;
  font-weight: 600;
  font-size: 0.9rem;
  box-sizing: border-box;
  &.outline {
    border-color: var(--accent_color);
    color: var(--accent_color);
  }
  &.filled {
    background: var(--accent_color);
    color: white;
  }
  &.ghost {
    background: #efecff;
    border-color: transparent;
    color: var(--accent_color);
  }
  &.transparent {
    background: none;
    border-color: transparent;
  }
  &.full-width {
    width: 100%;
  }
  &:active {
    transform: scale(0.9);
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
