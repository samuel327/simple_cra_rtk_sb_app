import styled from '@emotion/styled';
import { FC } from 'react';
import { Input } from './Input';
import Spinner from './assets/spinner.gif';
import { useAppSelector } from '../app/hooks';

interface InputSectionProps {
  passedRef: any;
}

const InputSectionStyles = styled.div`
  display: flex;
  align-items: center;
`;

export const InputSection: FC<InputSectionProps> = (props) => {
  const { passedRef } = props;

  //no need to pass props with redux toolkit; just get the slice of global state here
  const isLoading = useAppSelector((state) => state.todos.isLoading);
  return (
    <InputSectionStyles>
      <Input passedRef={passedRef} />
      <button>Submit</button>
      {(isLoading && (
        <img src={Spinner} alt='loading' width={50} height={50} />
      )) || <div style={{ width: 50, height: 50 }}></div>}
    </InputSectionStyles>
  );
};
