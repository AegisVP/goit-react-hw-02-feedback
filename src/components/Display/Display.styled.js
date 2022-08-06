import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  margin: 0;
  padding: ${p => p.theme.mp(2, 3)};
  text-align: center;
`;

export const StatRow = styled.p`
  /* ${p => console.log(p.children)} */
  background-color: ${p =>
    p.children[0].includes('Good')
      ? '#ccffcc'
      : p.children[0].includes('Neutral')
      ? '#ccffff'
      : p.children[0].includes('Bad')
      ? '#ffcccc'
      : '#ffffff'};
  margin: 0;
  padding: ${p => p.theme.mp(2, 3)};
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

export const Value = styled.span`
  font-weight: normal;
`;
