import { FC } from 'react';

interface InputProps {
  passedRef: any;
}

/**
 * Primary UI component for user interaction
 */
export const Input: FC<InputProps> = (props) => {
  const { passedRef } = props;
  return <input type='text' ref={passedRef} />;
};
