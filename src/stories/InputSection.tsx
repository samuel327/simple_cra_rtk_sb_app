import styled from '@emotion/styled';
import { FC } from 'react';
import { Input } from './Input';

interface InputSectionProps {
  passedRef: any;
}

const InputSectionStyles = styled.div`
  display: flex;
`;

export const InputSection: FC<InputSectionProps> = (props) => {
  const { passedRef } = props;
  return (
    <InputSectionStyles>
      <Input passedRef={passedRef} />
      <button>Submit</button>
    </InputSectionStyles>
  );
};
