import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const input: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    color: {
        red: {
            background: "red";
        };
        blue: {
            background: "blue";
        };
        black: {
            background: "black";
        };
    };
}>;
export declare type InputProps = RecipeVariants<typeof input>;
