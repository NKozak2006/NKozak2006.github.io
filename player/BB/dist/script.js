$(function () {
  var playerTrack = $("#player-track"),
    bgArtwork = $("#bg-artwork"),
    bgArtworkUrl,
    albumName = $("#album-name"),
    trackName = $("#track-name"),
    albumArt = $("#album-art"),
    sArea = $("#s-area"),
    seekBar = $("#seek-bar"),
    trackTime = $("#track-time"),
    insTime = $("#ins-time"),
    sHover = $("#s-hover"),
    playPauseButton = $("#play-pause-button"),
    i = playPauseButton.find("i"),
    tProgress = $("#current-time"),
    tTime = $("#track-length"),
    seekT,
    seekLoc,
    seekBarPos,
    cM,
    ctMinutes,
    ctSeconds,
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    bTime,
    nTime = 0,
    buffInterval = null,
    tFlag = false,
    albums = [
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters",
      "Blue Banisters"
    ],
    trackNames = [
      "Lana Del Rey - Text Book",
      "Lana Del Rey - Blue Banisters",
      "Lana Del Rey - Arcadia",
      "Lana Del Rey - Interlude - The Trio",
      "Lana Del Rey - Black Bathing Suit",
      "Lana Del Rey - If You Lie Down With Me",
      "Lana Del Rey - Beautiful",
      "Lana Del Rey - Violets for Roses",
      "Lana Del Rey - Dealer",
      "Lana Del Rey - Thunder",
      "Lana Del Rey - Wildflower Wildfire",
      "Lana Del Rey - Nectar Of The Gods",
      "Lana Del Rey - Living Legend",
      "Lana Del Rey - Cherry Blossom",
      "Lana Del Rey - Sweet Carolina"
    ],
    albumArtworks = ["_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9", "_10", "_11", "_12", "_13", "_14", "_15"],
    trackUrl = [
      "https://nkozak2006.github.io/player/src/Music/BB/text_book.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/blue_banisters.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/arcadia.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/the_trio.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/black_bathing_suit.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/if_you_lie_down_with_me.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/beautiful.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/violets_for_roses.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/dealer.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/thunder.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/wildflower_wildfire.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/nectar_of_the_gods.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/living_legend.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/cherry_blossom.mp3",
      "https://nkozak2006.github.io/player/src/Music/BB/sweet_carolina.mp3"
    ],
    playPreviousTrackButton = $("#play-previous"),
    playNextTrackButton = $("#play-next"),
    currIndex = -1;

  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
        playerTrack.addClass("active");
        albumArt.addClass("active");
        checkBuffering();
        i.attr("class", "fas fa-pause");
        audio.play();
      } else {
        playerTrack.removeClass("active");
        albumArt.removeClass("active");
        clearInterval(buffInterval);
        albumArt.removeClass("buffering");
        i.attr("class", "fas fa-play");
        audio.pause();
      }
    }, 300);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    cM = seekLoc / 60;

    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
    if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

    if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
    else insTime.text(ctMinutes + ":" + ctSeconds);

    insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
  }

  function hideHover() {
    sHover.width(0);
    insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();

    if (!tFlag) {
      tFlag = true;
      trackTime.addClass("active");
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);

    playProgress = (audio.currentTime / audio.duration) * 100;

    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    if (curSeconds < 10) curSeconds = "0" + curSeconds;

    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
    else tProgress.text(curMinutes + ":" + curSeconds);

    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
    else tTime.text(durMinutes + ":" + durSeconds);

    if (
      isNaN(curMinutes) ||
      isNaN(curSeconds) ||
      isNaN(durMinutes) ||
      isNaN(durSeconds)
    )
      trackTime.removeClass("active");
    else trackTime.addClass("active");

    seekBar.width(playProgress + "%");

    if (playProgress == 100 && currIndex == 6) {
      currIndex=-1;
      selectTrack(-1);
      selectTrack(1);
      playPause();
      i.attr("class", "fa fa-play");
      seekBar.width(0);
      tProgress.text("00:00");
      albumArt.removeClass("buffering").removeClass("active");
      clearInterval(buffInterval);
      return;
    } else if (playProgress == 100 && currIndex != 6) {
      selectTrack(1);
    }
  }

  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
      else albumArt.removeClass("buffering");

      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function selectTrack(flag) {
    if (flag == 0 || flag == 1) ++currIndex;
    else --currIndex;

    if (currIndex > -1 && currIndex < albumArtworks.length) {
      if (flag == 0) i.attr("class", "fa fa-play");
      else {
        albumArt.removeClass("buffering");
        i.attr("class", "fa fa-pause");
      }

      seekBar.width(0);
      trackTime.removeClass("active");
      tProgress.text("00:00");
      tTime.text("00:00");

      currAlbum = albums[currIndex];
      currTrackName = trackNames[currIndex];
      currArtwork = albumArtworks[currIndex];

      audio.src = trackUrl[currIndex];

      nTime = 0;
      bTime = new Date();
      bTime = bTime.getTime();

      if (flag != 0) {
        audio.play();
        playerTrack.addClass("active");
        albumArt.addClass("active");

        clearInterval(buffInterval);
        checkBuffering();
      }

      albumName.text(currAlbum);
      trackName.text(currTrackName);
      albumArt.find("img.active").removeClass("active");
      $("#" + currArtwork).addClass("active");

      bgArtworkUrl = $("#" + currArtwork).attr("src");

      bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
    } else {
      if (flag == 0 || flag == 1) --currIndex;
      else ++currIndex;
    }
  }

  function initPlayer() {
    audio = new Audio();

    selectTrack(0);

    audio.loop = false;

    playPauseButton.on("click", playPause);

    sArea.mousemove(function (event) {
      showHover(event);
    });

    sArea.mouseout(hideHover);

    sArea.on("click", playFromClickedPos);

    $(audio).on("timeupdate", updateCurrTime);

    playPreviousTrackButton.on("click", function () {
      if (currIndex == 0) {
        currIndex=-1;
        selectTrack(-1);
        selectTrack(1);
        i.attr("class", "fa fa-play");
        seekBar.width(0);
        tProgress.text("00:00");
        albumArt.removeClass("buffering").removeClass("active");
        clearInterval(buffInterval);
        playPause();
        playPause();
        return;
      } else {
        selectTrack(-1);
      }
    });
    playNextTrackButton.on("click", function () {
      if (currIndex == 6) {
        currIndex=-1;
        selectTrack(-1);
        selectTrack(1);
        i.attr("class", "fa fa-play");
        seekBar.width(0);
        tProgress.text("00:00");
        albumArt.removeClass("buffering").removeClass("active");
        clearInterval(buffInterval);
        playPause();
        playPause();
        return;
      } else {
        selectTrack(1);
      }
    });
  }

  initPlayer();
});
