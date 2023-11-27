import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  padding: ${p => p.theme.spasing(4)};
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${p => p.theme.shadows.formShadow};
  border-radius: ${p => p.theme.radii.sd};
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactItem = styled.li`
  padding-bottom: ${p => p.theme.spasing(4)};
`;

export const DeleteBtn = styled.button`
  border-radius: ${p => p.theme.radii.sd};
  border: 1px solid ${p => p.theme.colors.borderColor};
  cursor: pointer;
  box-shadow: ${p => p.theme.shadows.btnShadow};
  color: inherit;

  &:hover {
    box-shadow: ${p => p.theme.shadows.btnPushShadow};
    color: ${p => p.theme.colors.accentTextColor};
  }
`;
