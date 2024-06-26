// // script.js

// function createPlaylistCards(playlists) {
//     const container = document.getElementById("playlist-cards");

//     playlists.forEach(playlist => {
//         const card = document.createElement('div');
//         card.className = 'playlist-card';

//         const art = document.createElement('img');
//         art.src = playlist.playlist_art.replace('<', '').replace('>', '');
//         art.alt = `cover art for ${playlist.playlist_name}`;

//         const title = document.createElement('h3');
//         title.textContent = playlist.playlist_name;

//         const creator = document.createElement('p');
//         creator.textContent = `Created by: ${playlist.playlist_creator}`;

//         const likeContainer = document.createElement('div');
//         likeContainer.className = 'like-container';

//         const likeCount = document.createElement('span');
//         likeCount.className = 'like-count';
//         likeCount.textContent = playlist.likeCount;

//         const likeIcon = document.createElement('i');
//         likeIcon.className = 'fa fa-heart';
//         likeContainer.appendChild(likeIcon);
//         likeContainer.appendChild(likeCount);

//         card.appendChild(art);
//         card.appendChild(title);
//         card.appendChild(creator);
//         card.appendChild(likeContainer);

//         container.appendChild(card);

//         // Add event listener for like icon here
//         likeIcon.addEventListener('click', (event) => {
//             event.stopPropagation();
//             playlist.likeCount++;
//             likeCount.textContent = playlist.likeCount;
//             likeIcon.classList.toggle('liked');
//         });

//         card.addEventListener('click', () => createModal(playlist));
//     });
// }

// // This calls the function createPlaylistCards 
// createPlaylistCards(data.playlists);

// // This is the modal
// function createModal(playlist) {
//     const modal = document.getElementById('myModal');
//     const modalHeader = document.getElementById('modalHeader');
//     const songList = document.getElementById('songList');
//     const shuffleButton = document.getElementById('shuffleButton');

//     modalHeader.innerHTML = '';
//     songList.innerHTML = '';

//     // For the playlist image
//     const art = document.createElement('img');
//     art.src = playlist.playlist_art.replace('<', '').replace('>', '');
//     art.alt = `Cover art for ${playlist.playlist_name}`;
//     art.className = 'playlist-cover-art';
//     modalHeader.appendChild(art);

//     // For the playlist title
//     const headerText = document.createElement('h2');
//     headerText.textContent = playlist.playlist_name;
//     modalHeader.appendChild(headerText);

//     // For the playlist creator name
//     const headerCreator = document.createElement('h3');
//     headerCreator.textContent = playlist.playlist_creator;
//     modalHeader.appendChild(headerCreator);

//     // For having songs be added to the modal
//     playlist.songs.forEach(song => {
//         const songItem = document.createElement('li');
//         songItem.className = 'song-item';

//         songItem.innerHTML = `
//             <img src="${song.cover_art.replace('<', '').replace('>', '')}" alt="Cover art for ${song.title}" class="song-cover-art">
//             <div class="song-details">
//                 <h3>${song.title}</h3>
//                 <p>Artist: ${song.artist}</p>
//                 <p>Album: ${song.album}</p>
//                 <p>Duration: ${song.duration}</p>
//             </div>
//         `;
//         songList.appendChild(songItem);
//     });

//     modal.style.display = 'block';

//     shuffleButton.onclick = () => {
//         shufflePlaylist(playlist);
//         createModal(playlist);
//     };
// }

// function shufflePlaylist(playlist) {
//     for (let i = playlist.songs.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [playlist.songs[i], playlist.songs[j]] = [playlist.songs[j], playlist.songs[i]];
//     }
// }

// document.querySelector('.close').onclick = function() {
//     document.getElementById('myModal').style.display = 'none';
// };

// Function to display a random playlist
function displayRandomPlaylist(playlists) {
    const randomIndex = Math.floor(Math.random() * playlists.length);
    const randomPlaylist = playlists[randomIndex];

    const featuredImage = document.getElementById('featuredPlaylistImage');
    const featuredName = document.getElementById('featuredPlaylistName');
    const featuredSongList = document.getElementById('featuredSongList');

    featuredImage.src = randomPlaylist.playlist_art.replace('<', '').replace('>', '');
    featuredName.textContent = randomPlaylist.playlist_name;
    featuredSongList.innerHTML = '';

    randomPlaylist.songs.forEach(song => {
        const songItem = document.createElement('li');
        songItem.className = 'song-item';

        songItem.innerHTML = `
            <img src="${song.cover_art.replace('<', '').replace('>', '')}" alt="Cover art for ${song.title}" class="song-cover-art">
            <div class="song-details">
                <h3>${song.title}</h3>
                <p>Artist: ${song.artist}</p>
                <p>Album: ${song.album}</p>
                <p>Duration: ${song.duration}</p>
            </div>
        `;
        featuredSongList.appendChild(songItem);
    });
}

// Call this function to display a random playlist on page load
// displayRandomPlaylist(data.playlists);

// Initial call to display a random playlist on page load
document.addEventListener('DOMContentLoaded', () => {
    displayRandomPlaylist(data.playlists);
    
});
