import dayjs from "dayjs";

export const setDateFormat = (date, format) => {
  return dayjs(date).format(format);
};

export const createEventTemplate = (event) => {
  const {waypointType, destination, startOfEvent, endOfEvent, price, randomOptions} = event;

  const createOfferItem = () => {
    return `<ul class="event__selected-offers">
      ${Object.entries(randomOptions).map(([, option]) => `<li class="event__offer">
        <span class="event__offer-title">${Object.keys(option)}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${Object.values(option)}</span>
      </li>`).join(``)}
    </ul>`;
  };

  const createOffer = createOfferItem();

  const getIcon = () => {
    return `img/icons/` + waypointType.toLowerCase() + `.png`;
  };

  return `
     <div class="event">
        <time class="event__date" datetime="${setDateFormat(startOfEvent, `YYYY-M-D`)}">${setDateFormat(startOfEvent, `MMM D`)}</time>
            <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="${getIcon()}" alt="Event type icon">
            </div>
            <h3 class="event__title">${waypointType} ${destination}</h3>
            <div class="event__schedule">
              <p class="event__time">
                  <time class="event__start-time" datetime="${setDateFormat(startOfEvent, `YYYY-M-DTh:m`)}">${setDateFormat(startOfEvent, `hh:mm`)}</time>
                      &mdash;
                  <time class="event__end-time" datetime="${setDateFormat(endOfEvent, `YYYY-M-DTh:m`)}">${setDateFormat(endOfEvent, `hh:mm`)}</time>
              </p>
              <p class="event__duration">${setDateFormat(endOfEvent - startOfEvent, `hh:mm`)}M</p>
            </div>
            <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">${price}</span>
            </p>
            <h4 class="visually-hidden">Offers:</h4>
            ${createOffer}
            <button class="event__favorite-btn event__favorite-btn--active" type="button">
                <span class="visually-hidden">Add to favorite</span>
                <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                </svg>
            </button>
            <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
            </button>
        </div>
  `;
};
