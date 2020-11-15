/* eslint-disable */

import '../css/main.scss';
import { Fireworks } from '../js/classes/Fireworks.es5.js';

const ready = () => {
  let fireworks = new Fireworks(document.querySelector('body'));
  fireworks.get('elm').addEventListener(
    'click',
    (ev) => {
      fireworks.large(ev.layerX, ev.layerY);
    },
    false
  );
};

document.addEventListener('DOMContentLoaded', ready, false);
