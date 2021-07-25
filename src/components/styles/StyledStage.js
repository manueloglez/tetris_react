import styled from 'styled-components';

export const StyledStage = styled.div`
  ${props => console.log};
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(50vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, calc(48.9vw / ${props => props.width}));
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 50vw;
  background: #111;
`;