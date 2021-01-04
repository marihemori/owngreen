import styled from "styled-components";

export const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;
  padding: 0;
  z-index: 30;
  display: none;
  @media(max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
 
  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--color-white);
    border: 1px solid var(--color-white);
    border-radius: 10px;
    transition-duration: 0.3s;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg) translate(8px, 8px) ' : 'rotate(0)'};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)'};
    }
  }
`;