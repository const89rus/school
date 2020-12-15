import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.yellow};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 23.5rem 10rem;
  @media (max-width: 1806px) {
    align-items: center;
  }
  @media (max-width: 1280px) {
    padding: 2rem 13rem 10rem;
  }
  @media (max-width: 700px) {
    padding: 2rem 5rem 10rem;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 24rem;
  @media (max-width: 900px) {
    position: absolute;
    z-index: 0;
    width: 30rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2rem;
  @media (max-width: 900px) {
    z-index: 2;
  }
`;

export const AboutHeader = styled.h3`
  font-size: 3.75rem;
  margin: 0;
  padding; 0;
  @media (min-width: 1600px) and (max-width: 1806px) {
    font-size: 3.25rem;
  }
  @media (max-width: 1100px) {
    font-size: 3rem;
  }
  @media (max-width: 900px) {
    font-size: 3.75rem;
  }
  @media (max-width: 425px) {
    font-size: 2.6rem;
  }
`;

export const AbaoutParagraph = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  padding; 0;
  @media (min-width: 1600px) and (max-width: 1806px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1100px) {
    font-size: 1.2rem;
  }
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const ListHeader = styled.h4`
  font-size: 2.5rem;
  margin: 2rem 0 0;
  padding; 0;
  @media (min-width: 1600px) and (max-width: 1806px) {
    font-size: 2rem;
  }
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const List = styled.ul`
  margin: 0;
`;

export const ListItem = styled.li`
  font-size: 2rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.darkPrimary};
`;

export const ListItemSpan = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.black};
  @media (min-width: 1600px) and (max-width: 1806px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1100px) {
    font-size: 1.2rem;
  }
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 2.3rem;
  }
  @media (max-width: 425px) {
    font-size: 1.8rem;
  }
`;

export const LargeParallax = styled.div`
  display: none;
  position: relative;
  @media (max-width: 1801px) {
    display: block;
  }
`;

export const XLargeParallax = styled.div`
  display: none;
  position: relative;
  @media (min-width: 1801px) {
    display: block;
  }
`;
