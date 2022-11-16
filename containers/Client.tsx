import React, { useState } from 'react';

import ClientInputComponent from '../components/ClientInput';
import { Dog } from '../utils/types';
import { ResultView } from '../components/ResultView';

export default function ClientInputContainer() {
    const [ form, setForm ] = useState(new Dog());
    const [ loader, setLoader ] = useState(false);
    const [ searchResult, setSearchResult ] = useState(null);

    async function search() {
        try {
            setLoader(true);
            const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/dog/search`, {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await result.json();
            setSearchResult(data
                .sort((next: any, curr: any) => +curr.probability - (+next.probability))
                .map((it: any) => ({
                    ...it.dog,
                    probability: it.probability,
                })));
            setLoader(false);
        } catch (e) {
            console.error(e);
        } finally {
            setLoader(false);
        }
    }

    function reset() {
        setForm(new Dog());
        setSearchResult(null);
    }

    return (searchResult === null
        ? <ClientInputComponent
            form={form}
            setForm={setForm}
            loading={loader}
            triggerSearch={search}
            headerAction={reset} />
        : <ResultView
            dogs={searchResult}
            headerAction={reset}
            result={form}
        />)
}