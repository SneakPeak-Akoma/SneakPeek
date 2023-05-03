/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('wishlist',(table) => {
    table.increments();
    table.integer('post_id').references('listing_id').inTable('listings');
    table.integer('user_id').references("id").inTable('users');;
    table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists('wishlist');
