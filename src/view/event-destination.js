import {generatedEvents} from "../mock/event.js";

export const createEventDestinationTemplate = () => {
  const {destinationInfo, photos} = generatedEvents[0];

  const createPhotosContainer = () => {
    return `<div class="event__photos-container">
      <div class="event__photos-tape">
      ${Object.entries(photos).map(([, photoSrc]) => `
        <img class="event__photo" src="${photoSrc}" alt="Event photo">
        `).join(``)}
      </div>
    </div>`;
  };

  const photosContainer = createPhotosContainer();

  return `
    <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destinationInfo}</p>
        ${photosContainer}
    </section>
  `;
};
