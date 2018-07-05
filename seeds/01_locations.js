exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([{
          id: 1,
          name: 'Course x',
          lat: 39.7564,
          lng: 104.5456,
          hazards: 'water',
          holes: 18
        },
        {
          id: 2,
          name: 'Course y',
          lat: 39.4578,
          lng: 109.1234,
          hazards: 'weeds',
          holes: 9
        }
      ]);
    })
    .then(() => {
        return knex.raw("ALTER SEQUENCE locations_id_seq RESTART WITH 3;")
    })
};








[{
    id: 1,
    name: 'Course x',
    lat: 39.7564,
    lng: 104.5456,
    hazards: 'water',
    holes: 18
  },
  {
    id: 2,
    name: 'Course y',
    lat: 39.4578,
    lng: 109.1234,
    hazards: 'weeds',
    holes: 9
  }
]