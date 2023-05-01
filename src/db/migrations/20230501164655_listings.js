/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("listings", (table) => {
    table.increments();
    table.integer("post_id").unique();
    table.integer("user_id");
    table.string("photo");
    table.string("location");
    table.date("start_date");
    table.date("end_date");
    table.text("description");
    table.timestamps(true, true);
    table.string("brand");
    table.integer('user_bid')
    table.string("post_name");
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists("listings");
