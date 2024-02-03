import { knex } from "knex"

export const db = knex({
    client: "sqlite3",
    connection: {
        filename: "./labeddit.db",
    },
    useNullAsDefault: true,
    pool: {
        min: 0,
        max: 1
    }
})