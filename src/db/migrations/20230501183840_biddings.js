/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("biddings", (table) => {
    table.increments('bid_id');
    table.integer('post_id');
    table.integer('user_id');
    table.integer('user_bid');
    table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists("biddings"); 