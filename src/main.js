import {createInfoTemplate} from "./view/info.js";
import {createTabsTemplate} from "./view/tabs.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortTemplate} from "./view/sort.js";
import {createEventListTemplate} from "./view/event-list.js";
import {createEventTemplate} from "./view/event.js";
import {createEventEditTemplate} from "./view/event-edit.js";
import {createEventFacilitiesTemplate} from "./view/event-facilities.js";
import {createEventDestinationTemplate} from "./view/event-destination.js";

const TRIP_MAIN = document.querySelector(`.trip-main`);
const TRIP_CONTROLS = TRIP_MAIN.querySelector(`.trip-controls`);
const TRIP_CONTROLS_LAST_TITLE = TRIP_CONTROLS.querySelector(`h2:last-of-type`);
const TRIP_EVENTS = document.querySelector(`.trip-events`);
const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createElement = (elementName, elementClass, container) => {
  const element = document.createElement(elementName);
  element.setAttribute(`class`, elementClass);
  container.appendChild(element);

  return element;
};

render(TRIP_MAIN, createInfoTemplate(), `afterbegin`);
render(TRIP_CONTROLS, createTabsTemplate(), `afterbegin`);

const TRIP_TABS = TRIP_CONTROLS.querySelector(`.trip-tabs`);
TRIP_CONTROLS.insertBefore(TRIP_TABS, TRIP_CONTROLS_LAST_TITLE);

render(TRIP_CONTROLS, createFilterTemplate(), `beforeend`);
render(TRIP_EVENTS, createSortTemplate(), `beforeend`);

render(TRIP_EVENTS, createEventListTemplate(), `beforeend`);
const EVENT_LIST = TRIP_EVENTS.querySelector(`.trip-events__list`);

createElement(`li`, `trip-events__item`, EVENT_LIST);

for (let i = 0; i < TASK_COUNT; i++) {
  let eventListItem = createElement(`li`, `trip-events__item`, EVENT_LIST);
  render(eventListItem, createEventTemplate(), `afterbegin`);
}

const EVENT_LIST_ITEM_EDIT = EVENT_LIST.querySelector(`li:first-of-type`);
render(EVENT_LIST_ITEM_EDIT, createEventEditTemplate(), `afterbegin`);

const EVENT_EDIT_FORM = EVENT_LIST_ITEM_EDIT.querySelector(`.event--edit`);
createElement(`section`, `event__details`, EVENT_EDIT_FORM);

const EVENT_DETAILS = EVENT_EDIT_FORM.querySelector(`.event__details`);
render(EVENT_DETAILS, createEventFacilitiesTemplate(), `afterbegin`);
render(EVENT_DETAILS, createEventDestinationTemplate(), `beforeend`);

