"use client"
import React, { useState } from 'react';

import styles from './Counter.module.css'


export const Counter: React.FC = () => {
    const maxCounter = 10
    const initialCount = 0
    const interval = 1
    const [count, setCount] = useState<number>(initialCount);

    const increment = (): void => {
        setCount(prevCount => prevCount + interval);
    };

    const decrement = (): void => {
        setCount(prevCount => {
            return prevCount > initialCount ? prevCount - interval : 0
        });
    };

    return (
        <div className={styles.counter}>
            <h2 className={styles.counterTitle}>Counter</h2>
            <div className={styles.actionsWrapper}>
                <button disabled={count === maxCounter} className={styles.button} onClick={increment}>+</button>
                <div className={styles.counterCount}>{count}</div>
                <button disabled={count === initialCount} className={styles.button} onClick={decrement}>-</button>
            </div>
            {count === maxCounter && (
                <div className={styles.maxCountReched}>
                    you have reached the maximum count value <b>{maxCounter}</b>
                </div>
            )}
        </div>
    );
};
