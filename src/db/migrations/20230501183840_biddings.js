/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("biddings", (table) => {
    table.increments();
    table.integer('bid_id').unique();
    table.integer('post_id').unique();
    table.integer('user_id');
    table.integer('user_bid')
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists("biddings"); 