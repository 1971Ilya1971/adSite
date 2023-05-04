import {Api} from './src/api.js';
import {AppPresenter} from './src/presenter/app-presenter.js';

const END_POINT = `https://mock.pages.academy/store`;
const api = new Api(END_POINT);

const mainContainer = document.querySelector(`.main`);

const appPresenter = new AppPresenter(mainContainer, api);
appPresenter.init();
