import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 23.5rem 10rem;
`;

export const Img = styled.img`
  width: 24rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2rem;
`;

export const AboutHeader = styled.h3`
  font-size: 3.75rem;
  margin: 0;
  padding; 0;
`;

export const AbaoutParagraph = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  padding; 0;
`;

export const ListHeader = styled.h4`
  font-size: 2.5rem;
  margin: 2rem 0 0;
  padding; 0;
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
`;
