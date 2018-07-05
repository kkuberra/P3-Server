exports.up = function (knex, Promise) {
    return knex.schema.createTable('comments', (table) => {
        table.increments()
        table.integer('location_id')
            .references('id')
            .inTable('locations')
            .onDelete('CASCADE')
            .index()
        table.text('comment')
        
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('comments')
};