'use client'

import {useFormStatus} from "react-dom";
import {ComponentProps} from "react";

export function SubmitButton({children, ...props}:  ComponentProps<"button">) {
    const {pending, action} = useFormStatus()

    const isPending = pending && action === props.formAction

    return (
        <button {...props} type="submit" aria-disabled={pending}>
            {isPending ? 'Submitting' : children}
        </button>
    );
}