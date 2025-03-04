// Conexión con HTML

const songForm = document.getElementById("song_form");

const playList = document.getElementById("Playlist");

// Función para agregar una canción a la lista

function addSong(songName, artistName, songUrl) {

    const listSong = document.createElement("li");

    listSong.innerHTML = `
<strong>${songName}</strong> - ${artistName}
<a href="${songUrl}" target="_blank">🎵 Reproducir</a>
<button class="delete-btn"> Eliminar</button>

    `;

    // Agregar la canción a la lista

    playList.appendChild(listSong);

    // Evento para eliminar canciones

    listSong.querySelector(".delete-btn").addEventListener("click", () => {

        listSong.remove();

    });

}

// Manejo de envío de formulario

songForm.addEventListener("submit", (event) => {

    event.preventDefault();

    // Obtener datos del formulario

    const songName = document.getElementById("song_name").value;

    const artistName = document.getElementById("artist_name").value;

    const songUrl = document.getElementById("url_song").value;

    // Agregar la canción a la lista

    addSong(songName, artistName, songUrl);
    // Limpiar formulario

    songForm.reset();

});
