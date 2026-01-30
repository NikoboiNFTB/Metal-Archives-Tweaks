// Add Band
browser.contextMenus.create({
  id: "search-band-on-metallum",
  title: "Band",
  contexts: ["selection"],
  icons: {
    "128": "icons/metallum128.png",
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-band-on-metallum") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const MetallumBandUrl = `https://www.metal-archives.com/search?searchString=${query}&type=band_name`;

    browser.tabs.create({
      url: MetallumBandUrl
    });
  }
});

// Add Artist
browser.contextMenus.create({
  id: "search-artist-on-metallum",
  title: "Artist",
  contexts: ["selection"],
  icons: {
    "128": "icons/metallum128.png",
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-artist-on-metallum") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const MetallumArtistUrl = `https://www.metal-archives.com/search?searchString=${query}&type=artist_alias`;

    browser.tabs.create({
      url: MetallumArtistUrl
    });
  }
});

// Add Album
browser.contextMenus.create({
  id: "search-album-on-metallum",
  title: "Album",
  contexts: ["selection"],
  icons: {
    "128": "icons/metallum128.png",
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-album-on-metallum") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const MetallumAlbumUrl = `https://www.metal-archives.com/search?searchString=${query}&type=album_title`;

    browser.tabs.create({
      url: MetallumAlbumUrl
    });
  }
});

// Add Song
browser.contextMenus.create({
  id: "search-song-on-metallum",
  title: "Song",
  contexts: ["selection"],
  icons: {
    "128": "icons/metallum128.png",
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-song-on-metallum") {
    const selectedText = info.selectionText;

    const query = encodeURIComponent(selectedText);

    const MetallumSongUrl = `https://www.metal-archives.com/search?searchString=${query}&type=song_title`;

    browser.tabs.create({
      url: MetallumSongUrl
    });
  }
});
