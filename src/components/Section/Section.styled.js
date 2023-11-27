import styled from 'styled-components';

export const SectionGroup = styled.section`
  max-width: 350px;
  padding: ${p => p.theme.spasing(5)};
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  margin-top: ${p => p.theme.spasing(4)};
  margin-bottom: ${p => p.theme.spasing(4)};
  text-align: center;
`;
