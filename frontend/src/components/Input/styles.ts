import styled, {css} from 'styled-components';
import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-disabled);
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid var(--color-disabled);
  color: #666368;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && css `
    border-color: var(--color-error);
  `}

  ${props => props.isFocused && css `
    color: var(--color-secundary);
    border-color: var(--color-secundary);
  `}

  ${props => props.isField && css `
    color: var(--color-secundary);
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-text);

    &::placeholder {
      color: var(--color-calendar-week);
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: var(--color-toast-error);
    color: var(--color-text-base);

    &::before {
      border-color: var(--color-toast-error) transparent;
    }
  }
`;
