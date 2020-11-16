import styled from 'styled-components';

export const CuratorWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem;
  width: 15.875rem;
  height: 33.875rem;
`;

export const CuratorAvatar = styled.div`
  width: 100%
`;

export const Img = styled.img`
  width: 100%;
`;

export const SocialContainer = styled.div`
  height: 1rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CuratorContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Name = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.yellow};
`;

export const Info = styled.div`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  height: 7rem;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 3.5rem
`;

export const Edit = styled.a`
  color: ${(props) => props.theme.colors.yellow};
  font-size: 0.8rem;
  text-decoration: none;
`;