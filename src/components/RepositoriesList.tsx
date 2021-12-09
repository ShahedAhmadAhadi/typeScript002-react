import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const {data, loading, error} = useTypeSelector((state) => state.repositories)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={term}
                    onChange={(e) => {
                        setTerm(e.target.value);
                    }}
                />
                <button>Search</button>
                {error && <h3>{error}</h3>}
                {loading && <h2>Loading</h2>}
                {!error && !loading && data && data.map(item => <div key={item}>{item}</div>)}
            </form>
        </div>
    );
};

export default RepositoriesList;
