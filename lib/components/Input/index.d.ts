import * as React from 'react';
import { InputProps } from './styles.css';
declare type Props = React.ComponentProps<'input'> & {
    variants: InputProps;
};
declare function Input({ variants, ...rest }: Props): JSX.Element;
export default Input;
