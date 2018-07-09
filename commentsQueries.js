const knex = require('./connection.js')

module.exports = {
    list(){
        return knex("comments")
    },
    read(id){
        return knex('comments')
                .where('id', id)
                .first()
    },
    create(comment){
        return knex('comments')
                .insert(comment)
                .returning('*')
                .then(record => record[0])
    },
    update(id, comments){
        return knex("comments")
            .update(comments)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id){
        return knex("comments").delete().where("id", id);
    }
}