'use client';

import { useState } from "react";

const ClientPage = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1 className="text-7xl font-bold mb-4">{counter}</h1>
            <button onClick={() => setCounter(counter + 1)} className="btn btn-primary">INCREASE</button>
        </div>
    );
}

export default ClientPage;