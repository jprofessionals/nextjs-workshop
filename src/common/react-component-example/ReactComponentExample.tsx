'use client';

import styles from './styles.module.css'
import React, {ChangeEvent, useEffect, useState} from "react";
import {RowAlignContainer} from "@/src/common/row-align-container/RowAlignContainer";


export default function ReactComponentExample (){
    const [didMount, setDidMount] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [names, setNames] = useState<string[]>([]);

    const handleAddCount = () => {
        setCount(count + 1);
    }

    const handleResetCount = () => {
        setCount(0);
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
     }

     const handleAddName = () => {
        const namesClone = [...names];
        namesClone.push(name);
        setNames(namesClone);
        setName("");
     }

    useEffect(() => {
        setDidMount(true);
    }, []);


    return (
        <>
            <RowAlignContainer border={false}>
                <div>
                    <RowAlignContainer border={true}>
                        <span data-testid="mount-status">
                            Did mount : {didMount ? "ja" : "nei"}
                        </span>
                    </RowAlignContainer>
                </div>

                <div>
                    <RowAlignContainer border={true}>
                        <button data-testid="count-button" className={styles.button} onClick={handleAddCount}>
                            Tell opp ({count})
                        </button>
                        <button data-testid="clear-button" className={styles.button} onClick={handleResetCount}>
                            Nullstill
                        </button>
                    </RowAlignContainer>
                </div>

                <div>
                    <RowAlignContainer border={true}>
                        <div>
                            <span>Tekst:</span>
                            <input data-testid="text-input" value={name} onChange={handleNameChange} className={styles.input}/>
                            <button data-testid="add-button" onClick={handleAddName} disabled={name.length === 0} className={styles.button}>
                                Legg til
                            </button>

                            {names.length > 0 && (
                                <div data-testid="texts-container">
                                    <br/>
                                    {names.map((name, index) => (
                                        <div key={name} className={styles.row}>
                                            Tekst-{index+1} : {name}
                                        </div>
                                    ))}
                                    <br/>
                                </div>
                            )}
                        </div>
                    </RowAlignContainer>
                </div>
            </RowAlignContainer>
            <br/>
        </>
    );
}