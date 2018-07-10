exports.up = function (knex, Promise) {
    return knex.schema.createTable('locations', (table) => {
        table.increments()
        table.text('name')
        table.float('lat')
        table.float('lng')
        table.text('hazards')
        table.integer('holes')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('locations')
};