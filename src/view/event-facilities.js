import {OPTIONS, generatedEvents} from "../mock/event.js";

export const createEventFacilitiesTemplate = () => {

  const {randomOptions} = generatedEvents[0];

  let randomOptionsSet = new Set(randomOptions);

  return `
    <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
                    ${Object.entries(OPTIONS).map(([key, value]) => (randomOptionsSet.has(value)) ? `
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${key}-1" type="checkbox" name="event-offer-${key}" checked>
                        <label class="event__offer-label" for="event-offer-${key}-1">
                          <span class="event__offer-title">${Object.keys(value)}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${Object.values(value)}</span>
                        </label>
                      </div>
                    ` : `
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${key}-1" type="checkbox" name="event-offer-${key}">
                        <label class="event__offer-label" for="event-offer-${key}-1">
                          <span class="event__offer-title">${Object.keys(value)}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${Object.values(value)}</span>
                        </label>
                      </div>
                    `).join(``)}

    </section>
  `;
};
