'use client';


import {Component, ReactNode} from "react";

export class RowAlignContainer extends Component<{ children: ReactNode, border: boolean }> {

    render() {
        const {children, border} = this.props;

        return (
            <div style={
                {
                    display: "flex",
                    gap: "2rem",
                    border: border ? "2px solid silver" : "",
                    padding: "0.5rem 0.9rem",
                    borderRadius: "0.7rem",
                    flexWrap: "wrap"
                }
            }>
                {children}
            </div>
        );
    }
}
