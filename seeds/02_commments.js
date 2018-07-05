exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([{
          id: 1,
          location_id: 1,
          comment: 'fun course'
        },
        {
          id: 2,
          location_id: 1,
          comment: 'made a hole in one on the third hole'
        },
        {
          id: 3,
          location_id: 1,
          comment: 'course is easy to play'
        },
        {
          id: 4,
          location_id: 2,
          comment: 'weeds are stupid'
        },
        {
          id: 5,
          location_id: 2,
          comment: 'this course was shit'
        },
      ]);
    });
};