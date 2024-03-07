import React, { useState } from 'react';

function App() {
    const [musica, setMusica] = useState('');
    const [musicas, setMusicas] = useState([]);

    async function getSong(musica) {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '659f5c9970msha8191abfb932ce8p12e342jsn730eb72efd2c',
                    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                }
            };

            const url = `https://spotify23.p.rapidapi.com/search/?q=${musica}%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`;

            const response = await fetch(url, options);
            const data = await response.json();

            console.log(data);
            console.log(`Obtendo a música: ${musica}`);
        } catch (error) {
            console.log(`Ops... ocorreu um erro: ${error}`);
        }
    }

    function handleSearch(e) {
        e.preventDefault();

        if (musica.trim() === "") {
            alert('Você deve escrever algo');
            return;
        }

        setMusica('');
        getSong(musica);
    }

    return (
        <>
            <h2>API DO SPOTIFY</h2>
            <form onSubmit={handleSearch}>
                <input type="text" value={musica} onChange={(e) => setMusica(e.target.value)} />
                <button type="submit">Buscar</button>
            </form>
        </>
    );
}

export default App;
