import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { theme } from 'Thema';

import {
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
} from 'styled-system';

export const Box = styled('div')(
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border
);

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.white};
}
h1,h2,h3 {
  padding: 0%;
  margin: 0;
   font-family: ${theme.fonts.heading};
}
a {
  text-decoration: none;
}
p {
  margin: 0;
  padding: 0;
  color: ${theme.colors.black};
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;
export const LinksRouter = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[2]}px;
  outline: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.black};
  transition: border 250ms, box-shadow 250ms, scale 250ms;
  &.active {
    background-color: ${p => p.theme.colors.accent};
  }
  :hover,
  :focus {
    cursor: pointer;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    box-shadow: 2px 2px 3px #00bfff;
    scale: 1.1;
  }
`;

export const LinksRouterBack = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[2]}px;
  outline: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.black};
  transition: border 250ms, box-shadow 250ms, scale 250ms;
  &.active {
    background-color: ${p => p.theme.colors.black};
  }
  :hover,
  :focus {
    cursor: pointer;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    box-shadow: 2px 2px 3px #00bfff;
    scale: 1.1;
  }
`;
