import * as React from 'react'

import { className } from './styles.css'

type Props = React.ComponentProps<'button'>

function Button({ ...rest }: Props) {
  return <button {...rest} className={className} />
}

export default Button
