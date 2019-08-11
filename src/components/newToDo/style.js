import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Typography, Container, Field } from 'radiance-ui';
import { ChevronIcon } from 'radiance-ui/lib/icons';

export const Wrapper = styled(Container.Section)``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

export const Heading = styled(Typography.Display)`
  text-align: center;
  margin-right: auto;
`;

export const Form = styled.form`
  max-height: 0;
  overflow: hidden;
  transition: max-height 1000ms;

  ${({ isOpen }) => isOpen && css`
    max-height: 1000px;
  `}

  ul {
    display: none;
  }
`;

export const Input = styled(Field.Input)`
  width: 100%;
`;

export const Textarea = styled(Field.Textarea)`
  max-width: 100%;
`;

export const Caption = styled(Typography.Caption)`
  font-weight: bold;
  cursor: pointer;
`;

export const Chevron = styled(ChevronIcon)`
  display: inline !important;
  vertical-align: middle;
  margin-left: 5px;
  padding: 2px;

  ${({ isOpen }) => isOpen && css`
    transform: rotate(90deg) !important;
  `}
`;
