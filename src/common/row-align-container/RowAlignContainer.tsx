'use client';

import styles from './styles.module.css'
import {Component, ReactNode} from "react";

export class RowAlignContainer extends Component<{ children: ReactNode, border: boolean }> {

    render() {
        const {children, border} = this.props;
        const className = `${styles.rowAlign} ${border && styles.border}`;

        return (
            <div className={className}>
                {children}
            </div>
        );
    }
}
