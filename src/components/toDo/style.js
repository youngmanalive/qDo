import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Typography } from 'radiance-ui';
import { DeleteIcon, ChevronIcon } from 'radiance-ui/lib/icons';

export const Container = styled.div`
  border-radius: 4px;
  transition: background 500ms ease;
  margin-bottom: 2px;

  &:hover {
    background: #f7f7f7;
  }

  ${({ isOpen }) => isOpen && css`
    background: #f7f7f7;
  `}
`;

export const ToDoBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  cursor: pointer;

  > div {
    margin-bottom: 0;
  }
`

export const Title = styled.span`
  padding: 7px 0 7px 10px;
  margin: 0 auto 0 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  outline: none;
  cursor: default;
`;

const svgStyles = css`
  margin-left: 5px;
  min-width: 24px;
  min-height: 24px;
  padding: 4px;
  cursor: pointer;
  transition: all 350ms ease !important;

  &:hover {
    fill: grey;
    color: grey;
  }
`;

export const Delete = styled(DeleteIcon)`
  ${svgStyles}
`;

export const ToDoDetails = styled.div`
  max-height: 0;
  height: auto;
  overflow: hidden;
  transition: all 800ms;

  ${({ isOpen }) => isOpen && css`
    max-height: 500px;
  `}
`;

export const BodyWrapper = styled.div`
  padding: 20px;
`;

export const Body = styled.p`
  padding: 5px 0;
`;

export const Date = styled(Typography.Caption)`
  padding: 20px;
  float: right;
`;

export const Divider = styled.div`
  height: 1px;
  background: lightgrey;
  width: 90%;
  margin: 5px auto 0;
`;

export const Reorder = styled.div`
  margin-left: 5px;
`;

export const Chevron = styled(ChevronIcon)`
  ${svgStyles};
  min-width: 10px;
  min-height: 10px;
  width: 10px;
  height: 10px;
  padding: 0;
  margin: 4px;
  transform: rotate(${({ up }) => up ? '-' : ''}90deg) !important;
`;