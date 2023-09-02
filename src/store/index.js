import {proxy} from 'valtio';

const state = proxy({
    intro:true,
    color:'#157A6E',
    isLogoTexture:false,
    logoDecal: './threejs.png',

});
export default state;