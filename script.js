const userData = {
    name: "mas amba & johan sambal mas amba",
    topGenre: "Synthwave",
    topArtist: "The Weeknd",
    minutes: "24,890",
    recentSongs: [
        { title: "lagu lagi nyawit", artist: "pria solo&wowok", duration: "3:20" },
        { title: "doksli mas johan lagi main kuda kudaan", artist: "mas johan dan mas gatot and mas amba", duration: "4:02" },
        { title: "mas johan di culik monyet ijo kerep", artist: "johan mas amba ketcuppp", duration: "3:53" }
    ]
};

// Fungsi untuk memasukkan data ke HTML
function loadUserProfile() {
    document.getElementById('user-name').innerText = userData.name;
    document.getElementById('top-genre').innerText = userData.topGenre;
    document.getElementById('top-artist').innerText = userData.topArtist;
    document.getElementById('minutes').innerText = userData.minutes;

    const songList = document.getElementById('song-list');
    
    userData.recentSongs.forEach(song => {
        const div = document.createElement('div');
        div.className = 'song-item';
        div.innerHTML = `
            <div style="flex: 1;">
                <p><strong>${song.title}</strong></p>
                <p style="font-size: 0.8rem; color: #b3b3b3;">${song.artist}</p>
            </div>
            <span>${song.duration}</span>
        `;
        songList.appendChild(div);
    });
}

// Jalankan fungsi saat halaman dimuat
window.onload = loadUserProfile;
