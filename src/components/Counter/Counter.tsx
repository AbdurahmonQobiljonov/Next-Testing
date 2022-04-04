import React, {useState} from 'react';

export interface CounterProps {
    description: string;
    defaultCount: number;
}

const Counter = ({description, defaultCount}:CounterProps):JSX.Element => {
    const [count, setCount] = useState(defaultCount);
    const [incrementor, setIncrementor] = useState(1);

    return (
        <div>
            <h2>
                DESC: {description} - DC: {count}
            </h2>
            <label>
                Incrementor:
                <input
                    value={incrementor}
                    onChange={(evt) => {
                        setIncrementor(parseInt(evt.target.value) || 1);
                    }}
                    type="number"
                />
            </label>
            <button
                aria-label="Subtract from Counter"
                onClick={() => setCount(count - incrementor)}
            >
                -
            </button>
            Current Count: {count}
            <button
                aria-label="Add to Counter"
                onClick={() => setCount(count + incrementor)}
            >
                +
            </button>
        </div>
    );
}

export default Counter;
