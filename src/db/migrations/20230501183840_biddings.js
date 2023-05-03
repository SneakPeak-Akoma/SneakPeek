/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("biddings", (table) => {
    table.increments('id');
    table.integer('post_id').references('listing_id').inTable('listings');
    table.integer('user_id').references("id").inTable('users');;
    table.integer('user_bid');
    table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists("biddings"); 