'use client';
import React, {ChangeEvent, useEffect, useState} from "react";
import {RowAlignContainer} from "@/src/common/RowAlignContainer";


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

    const styles = {
        button: {
            backgroundColor: "silver",
            color: "black",
            padding: "0.5rem",
            borderRadius: "0.3rem"
        },
        input: {
            backgroundColor: "white",
            color: "black",
            padding: "0.3rem",
            borderRadius: "0.3rem",
            margin: "0 0.5rem"
        },
        row: {
            padding: "1rem 0.5rem",
            borderBottom: "1px solid silver"
        }
    }

    return (
        <RowAlignContainer border={false}>
            <div>
                <RowAlignContainer border={true}>
                    Did mount : {didMount ? "ja" : "nei"}
                </RowAlignContainer>
            </div>

            <div>
                <RowAlignContainer border={true}>
                    <button style={styles.button} onClick={handleAddCount}>Tell opp ({count})</button>
                    <button style={styles.button} onClick={handleResetCount}>Nullstill</button>
                </RowAlignContainer>
            </div>

            <div>
                <RowAlignContainer border={true}>
                    <div>
                        <span>Tekst:</span>
                        <input value={name} onChange={handleNameChange} style={styles.input}/>
                        <button onClick={handleAddName} disabled={name.length === 0} style={styles.button}>
                            Legg til
                        </button>

                        {names.length > 0 && (
                            <>
                                <br/>
                                {names.map((name, index) => (
                                    <div key={name} style={styles.row}>
                                        Tekst-{index+1} : {name}
                                    </div>
                                ))}
                                <br/>
                            </>
                        )}
                    </div>
                </RowAlignContainer>
            </div>

        </RowAlignContainer>
    );
}