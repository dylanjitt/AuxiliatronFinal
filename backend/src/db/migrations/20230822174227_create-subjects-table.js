/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('subjects', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('description').notNullable();
        table.integer('credits').notNullable();
        table.string('professor').notNullable();
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('subjects');
};
