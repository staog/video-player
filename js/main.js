// Regular JavaScript

var video = document.querySelector('video');
var buttonsDiv = document.querySelector('.buttons');
var playBtn = document.querySelector('.play');
var reloadBtn = document.querySelector('.reload');

buttonsDiv.addEventListener('mouseover', show);
buttonsDiv.addEventListener('mouseout', hide);
playBtn.addEventListener('click', play);
reloadBtn.addEventListener('click', reload);

function show() {
  playBtn.style.display = "block";
  reloadBtn.style.display = "block";
}
function hide() {
  playBtn.style.display = "none";
  reloadBtn.style.display = "none";
}

function play() {
  if (playBtn.getAttribute('src') === 'images/play.png') {
  video.play();
  playBtn.src = "images/pause.png";
  }else {
  video.pause();
  playBtn.src = "images/play.png"
 }
}
function reload() {
  video.load();
  video.play();
  playBtn.src = "images/pause.png"
}

// Encapsulation pattern

// var video = {
//   videoFile : document.querySelector('video'),
//   buttonsDiv : document.querySelector('.buttons'),
//   playBtn : document.querySelector('.play'),
//   reloadBtn : document.querySelector('.reload'),
//
//   init : function () {
//     this.buttonsDiv.addEventListener('mouseover', this.show);
//     this.buttonsDiv.addEventListener('mouseout', this.hide);
//     this.playBtn.addEventListener('click', this.play);
//     this.reloadBtn.addEventListener('click', this.reload);
//   },
//   show : function () {
//     console.log(this); //buttons div
//     video.playBtn.style.display = "block";
//     video.reloadBtn.style.display = "block";
//   },
//   hide : function () {
//     video.playBtn.style.display = "none";
//     video.reloadBtn.style.display = "none";
//   },
//   play : function () {
//     if (video.playBtn.getAttribute('src') === 'images/play.png') {
//     video.videoFile.play();
//     video.playBtn.src = "images/pause.png";
//     }else {
//     video.videoFile.pause();
//     video.playBtn.src = "images/play.png"
//     }
//   },
//   reload : function () {
//     video.videoFile.load();
//     video.videoFile.play();
//     video.playBtn.src = "images/pause.png"
//   }
//
// }
// video.init();

// Constructor pattern

// function Video(id) {
//    var self = this;
//    this.videoFile = document.getElementById(id);
//    this.buttonsDiv = this.videoFile.nextElementSibling;
//    this.playBtn = this.buttonsDiv.children[0];
//    this.reloadBtn = this.buttonsDiv.children[1];
//    this.init = function () {
//      this.events();
// };
//    this.events = function () {
//      this.buttonsDiv.addEventListener('mouseover', this.show);
//      this.buttonsDiv.addEventListener('mouseout', this.hide);
//      this.playBtn.addEventListener('click', this.play);
//      this.reloadBtn.addEventListener('click', this.reload);
//
// };
//    this.show = function () {
//      self.playBtn.style.display = 'block';
//      self.reloadBtn.style.display = 'block';
// };
//    this.hide = function () {
//      self.playBtn.style.display = 'none';
//      self.reloadBtn.style.display = 'none';
// };
//    this.play = function () {
//      if (self.playBtn.getAttribute('src') === 'images/play.png') {
//        self.videoFile.play();
//        self.playBtn.src = "images/pause.png";
//     }else {
//        self.videoFile.pause();
//        self.playBtn.src = "images/play.png";
//     }
// };
//    this.reload = function () {
//        self.videoFile.load();
//        self.videoFile.play();
//        self.playBtn.src = "images/pause.png";
// };
// }
//
// var first = new Video('first').init();

// Prototype pattern

// function Video(id) {
//    this.videoFile = document.getElementById(id);
//    this.buttonsDiv = this.videoFile.nextElementSibling;
//    this.playBtn = this.buttonsDiv.children[0];
//    this.reloadBtn = this.buttonsDiv.children[1];
//    this.init = function () {
//      this.events();
// };
// }
// Video.prototype.events = function () {
//      this.buttonsDiv.addEventListener('mouseover', this.show.bind(this));
//      this.buttonsDiv.addEventListener('mouseout', this.hide.bind(this));
//      this.playBtn.addEventListener('click', this.play.bind(this));
//      this.reloadBtn.addEventListener('click', this.reload.bind(this));
// };
// Video.prototype.show = function () {
//      this.playBtn.style.display = 'block';
//      this.reloadBtn.style.display = 'block';
// };
// Video.prototype.hide = function () {
//      this.playBtn.style.display = 'none';
//      this.reloadBtn.style.display = 'none';
// };
// Video.prototype.play = function () {
//      if (this.playBtn.getAttribute('src') === 'images/play.png') {
//        this.videoFile.play();
//        this.playBtn.src = "images/pause.png";
//     }else {
//        this.videoFile.pause();
//        this.playBtn.src = "images/play.png";
//     }
// };
// Video.prototype.reload = function () {
//   this.videoFile.load();
//   this.videoFile.play();
//   this.playBtn.src = "images/pause.png";
// };
//
// var first = new Video('first');
// first.init();
