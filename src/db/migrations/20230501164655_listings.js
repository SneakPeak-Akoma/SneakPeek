/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("listings", (table) => {
    table.increments("listing_id");
    table.string("listing_name");
    table.text("description");
    table.string("brand");
    table.integer("user_id").references("id").inTable('users');
    table.string("photo");
    table.string("location");
    table.date("end_date");
    table.integer('bid_price');
    table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists("listings");
