'use strict';

const videos = ['mayhem.mp4', 'dynamicwater.mp4', 'pyros.mp4', 'mayhem2.mp4', 'worktobedone.mp4', 'shorewaves.mp4'];
const video = videos[Math.floor(Math.random() * videos.length)];
document.getElementById('videoplayer').src = 'video/' + video;