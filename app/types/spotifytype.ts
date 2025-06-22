interface SpotifyCurrentTrack {
  name: string;
  link: string;
  artist: string[];
  artistLink: string[];
  album: string;
  albumLink: string;
  duration: number;
  imageLink: string;
}

interface Track {
  name: string;
  link: string;
  artist: string[];
  artistLink: string[];
  album: string;
  albumLink: string;
  duration: number;
  imageLink: string;
}

interface SpotifyArtist {
  name: string;
  imageLink: string;
  link: string;
}

interface SpotifyResponse {
  Current: SpotifyCurrentTrack | null;
  Artists: SpotifyArtist[] | null;
  Recent: Track[] | null;
  Tracks: Track[] | null;
}

interface Image {
  width: number;
  height: number;
  url: string;
}

interface ExternalURLS {
  spotify: string;
}

interface SpotifyArtists {
  external_urls: ExternalURLS;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
  genres: string[];
  images: Image[];
}

interface SpotifyAlbum {
  album_type: string;
  artists: SpotifyArtists[];
  available_markets: string[];
  external_urls: ExternalURLS;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: SpotifyArtists[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  external_urls: ExternalURLS;
}

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

interface Artist {
  name: string;
  imageLink: string;
  link: string;
}
