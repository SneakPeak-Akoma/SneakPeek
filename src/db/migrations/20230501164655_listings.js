/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("listings", (table) => {
    table.increments("id");
    table.integer("user_id");
    table.string("photo");
    table.string("location");
    table.date("start_date");
    table.date("end_date");
    table.text("description");
    table.string("brand");
    table.integer('user_bid');
    table.string("post_name");
    table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists("listings");
