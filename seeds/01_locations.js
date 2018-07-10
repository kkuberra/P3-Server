exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([{
          id: 1,
          name: 'Birds Nest Disc Park',
          lat: 39.816678,
          lng: -105.202629,
          hazards: 'weeds',
          holes: 24
        },
        {
          id: 2,
          name: 'Paco Sanchez Park Disc Park',
          lat: 39.734354,
          lng: -105.038970,
          hazards: 'water',
          holes: 18
        }
      ]);
    })
    .then(() => {
        return knex.raw("ALTER SEQUENCE locations_id_seq RESTART WITH 3;")
    })
};
