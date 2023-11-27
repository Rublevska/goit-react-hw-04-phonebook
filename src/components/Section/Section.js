import { SectionGroup, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionGroup>
    <Title>{title}</Title>
    {children}
  </SectionGroup>
);
