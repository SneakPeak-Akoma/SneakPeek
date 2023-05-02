class wishlist {
    constructor({ id, post_id, user_id }) {
    this.id = id;
    this.post_id = post_id;
    this.user_id = user_id;
}
static async addToWishList(id, post_id, user_id) {
    try {
        const query = `INSERT INTO wishlist (id,post_id,user_id)
          VALUES (?,?,?) RETURNING *`;
    const {
        rows: [wishlist],
    } = await knex.raw(query, [id,post_id,user_id]);
        return new wishlist(wishlist);
    } catch (err) {
        console.error(err);
        return null;
    }
    }
}
