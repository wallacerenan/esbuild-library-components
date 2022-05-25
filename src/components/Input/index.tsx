import * as React from 'react'

import { input, InputProps } from './styles.css'

type Props = React.ComponentProps<'input'> & {
  variants: InputProps
}

function Input({ variants, ...rest }: Props) {
  return <input {...rest} className={input({ ...variants })} />
}

export default Input
