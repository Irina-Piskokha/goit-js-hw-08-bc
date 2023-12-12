import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LS_KEY = 'VIDEOPLAYER-CURRENT-TIME';

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(LS_KEY, seconds);
  }),
  1000
);

// const throttled = _.throttle(renewToken, 300000, { trailing: false });

player.setCurrentTime(localStorage.getItem(LS_KEY) || 0);
