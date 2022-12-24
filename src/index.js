const cities = ['Cancún', 'Zipaquirá', 'Chaparral'];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
}

module.exports = randomString;