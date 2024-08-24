document.addEventListener('DOMContentLoaded', () => {
    const characterList = document.getElementById('character-list');

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            characterList.innerHTML = data.results.map(character => `
                <div class="character">
                    <img src="${character.image}" alt="${character.name}">
                    <div>
                        <h2>${character.name}</h2>
                        <p><strong>Species:</strong> ${character.species}</p>
                        <p><strong>Status:</strong> ${character.status}</p>
                        <p><strong>Location:</strong> ${character.location.name}</p>
                    </div>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            characterList.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
        });
});
