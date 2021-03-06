import styled from 'styled-components';

import { Button as ButtonUi } from 'view/common';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.white};
  padding: 1rem 23.5rem 2rem;
  display: flex;
  height: 8rem;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${(props) => props.theme.colors.darkPrimary};
  @media (max-width: 1280px) {
    padding: 1rem 13rem 2rem;
  }
  @media (max-width: 1023px) {
    height: 10rem;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Question = styled.div`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.yellow};
  padding: 0.5rem 0.2rem;
  margin: 0.5rem 0;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0.5rem 0;
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled(ButtonUi)`
  color: #ffffff;
  height: 4.063rem;
  width: 23.125rem;
  font-size: 2rem;
  border: none;
`;

export const Copyright = styled.div`
  @media (max-width: 425px) {
    font-size: 0.55rem;
  }
`;
