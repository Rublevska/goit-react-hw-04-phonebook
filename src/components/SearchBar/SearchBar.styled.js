import styled from 'styled-components';

export const FilterField = styled.input`
  margin-top: ${p => p.theme.spasing(4)};
  width: 305px;
  border-radius: ${p => p.theme.radii.sd};
  border: 1px solid ${p => p.theme.colors.borderColor};

  &:focus {
    outline: none;
  }
`;
