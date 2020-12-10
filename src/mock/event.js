import dayjs from "dayjs";

export const CITIES = [
  `Amsterdam`,
  `Geneva`,
  `Chamonix`
];

export const WAYPOINT_TYPE = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check-in`,
  `Sightseeing`,
  `Restaurant`
];

const DESTINATION_INFO = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`
];

export const OPTIONS = {
  luggage: {
    "Add luggage": 30,
  },
  comfort: {
    "Switch to comfort class": 100,
  },
  meal: {
    "Add meal": 15,
  },
  seats: {
    "Choose seats": 5,
  },
  train: {
    "Travel by train": 100,
  },
};

const getRandomInteger = (min, max) => {
  const ROUND_UP = 0.5;
  const randomNum = min - ROUND_UP + Math.random() * (max - min + 1);
  return Math.round(randomNum);
};

const arrayRandomLength = (array) => {
  return array.slice(0, getRandomInteger(1, array.length));
};

const generateRandomPhotos = () => {
  const MIN_PARAM = 0;
  const MAX_PARAM = 10;
  const MIN_PHOTOS_COUNT = 1;
  const MAX_PHOTOS_COUNT = 5;

  let PhotosSet = new Set();

  const addRandomPhoto = () => {
    const generatedPhoto = `http://picsum.photos/248/152?r=` + getRandomInteger(MIN_PARAM, MAX_PARAM);
    return PhotosSet.add(generatedPhoto);
  };

  for (let i = 0; i <= getRandomInteger(MIN_PHOTOS_COUNT, MAX_PHOTOS_COUNT); i++) {
    addRandomPhoto();
  }

  return Array.from(PhotosSet);
};

const generateDate = (min, max) => {
  const daysGap = getRandomInteger(min, max);
  const hoursGap = getRandomInteger(1, 12);
  const minutesGap = getRandomInteger(1, 59);

  return dayjs().add(daysGap, `day`).add(hoursGap, `hour`).add(minutesGap, `minute`).toDate();
};

const generateRandomOptions = () => {
  let randomOptions = new Set();
  let optionsValues = Object.values(OPTIONS);

  for (let i = 0; i < getRandomInteger(0, optionsValues.length); i++) {
    let randomKey = optionsValues[getRandomInteger(0, optionsValues.length - 1)];
    randomOptions.add(randomKey);
  }

  return Array.from(randomOptions);
};

const generateEvent = () => {
  return {
    waypointType: WAYPOINT_TYPE[getRandomInteger(0, WAYPOINT_TYPE.length - 1)],
    destination: CITIES[getRandomInteger(0, CITIES.length - 1)],
    destinationInfo: arrayRandomLength(DESTINATION_INFO).join(` `),
    photos: generateRandomPhotos(),
    randomOptions: generateRandomOptions(),
    startOfEvent: generateDate(10, 20),
    endOfEvent: generateDate(40, 70),
    price: Math.round(getRandomInteger(100, 1200) / 10) * 10,
  };
};

export const generateEvents = (eventsCount) => {
  const eventsContainer = [];

  for (let i = 0; i < eventsCount; i++) {
    eventsContainer.push(generateEvent());
  }

  return eventsContainer;
};

export const generatedEvents = generateEvents(20);

const getFinalPrice = (events) => {
  let arrayOfPrices = [];

  for (let event of events) {
    arrayOfPrices.push(event.price);
  }

  return arrayOfPrices.reduce((accumulator, currentValue) => accumulator + currentValue);
};

export const finalPrice = getFinalPrice(generatedEvents);
