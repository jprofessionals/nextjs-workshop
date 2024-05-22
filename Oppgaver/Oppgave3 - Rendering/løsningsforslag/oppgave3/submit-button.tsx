'use client'

import {ComponentProps} from "react";

export function SubmitButton({children, ...props}:  ComponentProps<"button">) {

    return (
        <button {...props} type="submit" onClick={() => console.log('Submit')}>
            {children}
        </button>
    );
}