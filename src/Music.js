import React from "react";

function Music() {
  return (
    <div className="spotify-api py-4 px-2">
      <p className="music-greeting">Some music to get you going!</p>

      <div className="container-fluid px-3">
        <div className="divider"></div>
      </div>
      <div className="spotify-player px-3">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXc8kgYqQLMfH?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; FullScreen; picture-in-picture"
          title="Spotify music player"
        ></iframe>
      </div>
    </div>
  );
}

export default Music;
