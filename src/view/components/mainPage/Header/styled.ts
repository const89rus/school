import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  display: flex;
  justify-content: space-between;
  padding: 2rem 20rem 5rem;
`;

export const Img = styled.img`
  width: auto;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2rem;
`;

export const AboutHeader = styled.h3`
  font-size: 4rem;
  margin: 0;
  padding; 0;
`;

export const AbaoutParagraph = styled.p`
  font-size: 2rem;
  margin: 0;
  padding; 0;
`;

export const ListHeader = styled.h4`
  font-size: 3rem;
  margin: 0;
  padding; 0;
`;

export const ListItem = styled.li`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.darkPrimary};
`;

export const ListItemSpan = styled.span`
  font-size: 2rem;
  color: #000000;
`;
