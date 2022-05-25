import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const input = recipe({
  variants: {
    color: {
      red: {
        background: 'red',
      },
      blue: {
        background: 'blue',
      },
      black: {
        background: 'black',
      },
    },
  },
  defaultVariants: {
    color: 'blue',
  },
})

export type InputProps = RecipeVariants<typeof input>
