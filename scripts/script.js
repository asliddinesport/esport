new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Бедный поэт",
          artist: "Bakr",
          cover: "https://lh3.googleusercontent.com/CN151L_TejxInu5G_mSokcSpiqoFa99TSpBaOJjKLxCqnnE3Agep23o3VVqVfLPChzKaQBgnjZxPVrE=w544-h544-l90-rj",
          source: "mp3/1.mp3",
          url: "https://music.youtube.com/watch?v=9WjVMY3mors&list=OLAK5uy_mqYYNOW4gYZSFjpE8N3HBdWyfXekAwWB4",
          favorited: false
        },
        {
          name: "Эталон красоты",
          artist: "Bakr",
          cover: "https://lh3.googleusercontent.com/GoqQL_WQDDvFtIDHZBiZybFw8neTiNn-KAyyGexuqU2EUSohj4YDc3MDF42_l8IoFhs9QKdLW41J8Pc=w544-h544-l90-rj",
          source: "mp3/2.mp3",
          url: "https://music.youtube.com/watch?v=6_3EmCvGxK4&list=OLAK5uy_mqYYNOW4gYZSFjpE8N3HBdWyfXekAwWB4",
          favorited: true
        },
        {
          name: "Не лей",
          artist: "Bakr",
          cover: "https://lh3.googleusercontent.com/jbt2BKbleXyvX8emrpu8PUjpJV7TvBz9xFL1h3zzpuzNFSXgRnN2s8QbIf-NdPVUZz1hXMZGuxCEjqxo=w544-h544-l90-rj",
          source: "mp3/3.mp3",
          url: "https://music.youtube.com/watch?v=BtSBtD5t5Yw&list=OLAK5uy_mqYYNOW4gYZSFjpE8N3HBdWyfXekAwWB4",
          favorited: false
        },
        {
          name: "Очи",
          artist: "Bakr",
          cover: "https://lh3.googleusercontent.com/DmrXqLtH6pT4arjHM9mHBsWDLWTUjpLdyV_ynrYUXLuyAyeNg3KHqpYa-y3U9cFDzAs4YJwd5K5MpKPDWQ=w544-h544-l90-rj",
          source: "mp3/4.mp3",
          url: "https://music.youtube.com/watch?v=oaG16MMU3i8&list=RDAMVMoaG16MMU3i8",
          favorited: false
        },
        {
          name: "Статус души",
          artist: "Bakr",
          cover: "https://lh3.googleusercontent.com/HQ2JiJ8yGZCNFhtlg52xXC36TmbqiwGHE23MiBh3iVB0LC0Dy53nqS-B_20JutOdUdp6hly1uFu8h5D2=w544-h544-l90-rj",
          source: "mp3/5.mp3",
          url: "https://music.youtube.com/watch?v=pHZzqcGQ0Tg&list=OLAK5uy_mqYYNOW4gYZSFjpE8N3HBdWyfXekAwWB4",
          favorited: true
        },
        {
          name: "Вредина",
          artist: "Bakr",
          cover: "https://lh3.googleusercontent.com/qWboYQVsVk37UOYNGV3jUXrdbzBublYHwVYfyEhiYIgpyoz7ffec_qJ8DoqMwsP8WgDKledi05jLpFM=w544-h544-l90-rj",
          source: "mp3/6.mp3",
          url: "https://music.youtube.com/watch?v=8YkH1448BPg&list=OLAK5uy_mqYYNOW4gYZSFjpE8N3HBdWyfXekAwWB4",
          favorited: false
        },
        {
          name: "Baby Mama",
          artist: "Скриптонит & Райда",
          cover: "https://lh3.googleusercontent.com/7jbpqUXAapmQ3Z49qYYo20nCbbHGCR0zROMkzyKtyU6K6aH0T-hnj0WgRZrz8u7kdSabClNag-zCJr4=w544-h544-l90-rj",
          source: "mp3/8.mp3",
          url: "https://music.youtube.com/watch?v=T1isWdk2HW4&list=RDAMVMpIucdsrIpxU",
          favorited: true
        },
        {
          name: "Ты и Я",
          artist: "Xcho",
          cover: "https://lh3.googleusercontent.com/JcqrRWX_B95M3uZvFIgl3jt5wsByYcEnrb1M9IPgGzZ9TZhYkVnJKUfV2T2l7KW5ZoTXA09UUI4XUMVS=w544-h544-l90-rj",
          source: "mp3/9.mp3",
          url: "https://music.youtube.com/watch?v=5Uopus_BjQg&list=RDAMVMpIucdsrIpxU",
          favorited: false
        },
        {
          name: "Rapstar",
          artist: "Max Fail",
          cover: "https://lh3.googleusercontent.com/g_ijQL8ODxLuCN2mDgWCmjGFK1ygQEqLfqp734mUQ1RSCvIouApmHNai3cfVyrL1XOwQ0UfotK9R4kp1=w544-h544-l90-rj",
          source: "mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});