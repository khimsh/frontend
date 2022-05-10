import { StyledFooter } from './styled/Footer.styled';

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <StyledFooter>&copy; iaKhimsh &ndash; 2020 &ndash; {date}</StyledFooter>
  );
}
