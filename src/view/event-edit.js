import {CITIES, WAYPOINT_TYPE, generatedEvents} from "../mock/event.js";
import {setDateFormat} from "./event.js";

export const createEventEditTemplate = () => {
  const {waypointType, destination, startOfEvent, endOfEvent, price} = generatedEvents[0];

  const createEventTypeContainer = () => {
    return `
<div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${waypointType.toLowerCase()}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
        <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            ${Object.entries(WAYPOINT_TYPE).map(([, type]) => (type === waypointType) ? `
              <div class="event__type-item">
                <input id="event-type-${waypointType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                       value="${waypointType.toLowerCase()}" checked>
                <label class="event__type-label  event__type-label--${waypointType.toLowerCase()}" for="event-type-${waypointType.toLowerCase()}-1">${waypointType}</label>
              </div>
            ` : `
              <div class="event__type-item">
                <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                       value="${type.toLowerCase()}">
                  <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-1">${type}</label>
              </div>
            `).join(``)}

          </fieldset>
        </div>
    </div>`;
  };

  const createDestination = () => {
    return `
    <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
            ${waypointType.toLowerCase()}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
        <datalist id="destination-list-1">
            ${Object.entries(CITIES).map(([, city]) => `
                <option value="${city}"></option>
            `).join(``)}
        </datalist>
    </div>
    `;
  };

  const eventTypeContainer = createEventTypeContainer();
  const destinationContainer = createDestination();

  return `
<form class="event event--edit" action="#" method="post">
    <header class="event__header">

    ${eventTypeContainer}

    ${destinationContainer}

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${setDateFormat(startOfEvent, `DD/MM/YY hh:mm`)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${setDateFormat(endOfEvent, `DD/MM/YY hh:mm`)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
    </form>
  `;
};
