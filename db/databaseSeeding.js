/* eslint-disable no-console */
const fs = require('fs');

// const faker = require('faker');
// const dbModels = require('../db/crudOperations');
// const dbConnection = require('../db/conn.js');

const image = [
  'https://s3-us-west-1.amazonaws.com/homes-pic/0.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/1.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/2.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/3.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/4.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/5.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/6.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/7.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/8.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/9.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/10.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/11.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/12.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/13.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/14.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/15.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/16.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/17.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/18.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/19.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/20.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/21.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/22.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/23.jpg',
  'https://s3-us-west-1.amazonaws.com/homes-pic/24.jpg'
];
const description = ['Cozy house in friendly neighborhood', 'Spacious apartment', 'Sunny and Modern room', 'Penthouse Studio', 'Perfect Weekender', 'Sanson Terrace "off-grid tiny cottage"',
  'Sakura River Inn 2 (licenced Machiya)', 'J\'s APT 2 Bed Rooms + Free Portable Wi-Fi', '2 Bed Room + 2 Toilets + Free Pocket Wi-Fi', 'Traditional Japanese-style Twin Room', 'New House 1 minute from station'];
const houseType = ['ENTIRE HOUSE', 'ENTIRE APARTMENT', 'PRIVATE ROOM', 'SHARED ROOM'];
const city = ['Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Kobe', 'Kyoto', 'Nara', 'Kanagawa', 'Okinawa'];

/*

******* Data structure should look like *******
 {
  image: image[Math.floor(Math.random() * image.length)],
  homedescription: description[Math.floor(Math.random() * description.length)],
  houseType: houseType[Math.floor(Math.random() * houseType.length)],
  city: city[Math.floor(Math.random() * city.length)],
  price: `$${Math.floor(Math.random() * 500).toFixed(2)}`,
  stars: Math.floor(Math.random() * 11) / 2,
  num_reviews: Math.floor(Math.random() * 500)
};

*/

// Generate homes data

console.log('Start generating Homes data:', new Date().toISOString());

const createData = function (i) {
  const structureArr = [
    image[Math.floor(Math.random() * image.length)],
    description[Math.floor(Math.random() * description.length)] + i,
    houseType[Math.floor(Math.random() * houseType.length)],
    city[Math.floor(Math.random() * city.length)],
    `$${Math.floor(Math.random() * 500).toFixed(2)}`,
    Math.floor(Math.random() * 11) / 2,
    Math.floor(Math.random() * 500)
  ];
  return `${structureArr.join(',')}\n`;
};

const stream = fs.createWriteStream('db/csvFiles/dataHomesPostgres.csv', { flags: 'a' });
const start = 0;
const end = 1e7;
// const end = 99;


function writeManyTimes(writer, callback) {
  let i = start;

  function write() {
    let ok = true;
    do {
      i++;
      if (i === end) {
        writer.write(createData(i), 'utf8', callback);
      } else {
        ok = writer.write(createData(i));
      }
    } while ((i < end) && ok);

    if (i < end) {
      writer.once('drain', write);
    }
  }

  write();
}

writeManyTimes(stream, () => {
  stream.end();
  console.log('Finish generating Homes data:', new Date().toISOString());
});

const createRecommendations = function (id) {
  const numberOfRecommendations = 6;

  let reccs = '';

  for (let i = 0; i < numberOfRecommendations; i++) {
    let rand = Math.floor(Math.random() * 1e7) + 1;
    if (rand === id) rand++;
    reccs += `${id},${rand}\n`;
  }

  return reccs;
};

const streamR = fs.createWriteStream('db/csvFiles/dataRecommendations.csv', { flags: 'a' });
const startR = 0;
const endR = 1e7;
// const end = 99;

console.log('Start generating Recommendations data:', new Date().toISOString());

function writeManyTimesR(writer, callback) {
  let i = startR;

  function write() {
    let ok = true;
    do {
      i++;
      if (i === endR) {
        writer.write(createRecommendations(i), 'utf8', callback);
      } else {
        ok = writer.write(createRecommendations(i));
      }
    } while ((i < endR) && ok);

    if (i < endR) {
      writer.once('drain', write);
    }
  }

  write();
}

writeManyTimesR(streamR, () => {
  streamR.end();
  console.log('Finish generating Recommendations data:', new Date().toISOString());
});
