
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("project_name", 128).notNull()
        table.text("description", 128)
        table.boolean("is_completed").notNull().defaultTo(false)
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.text("resource_name", 128).notNull().unique()
        table.text("description", 128)
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.text("description", 128).notNull()
        table.text("notes", 128)
        table.boolean("is_completed").notNull().defaultTo(false)
        table.integer('project_id')
             .unsigned()
             .notNull()
             .references("id")
             .inTable("projects")
             .onUpdate('CASCADE')
             .onDelete('CASCADE')
    })

    await knex.schema.createTable("projects_tasks", (table) => {
        table.integer("task_id")
             .notNull()
             .references("id")
             .inTable("tasks")
        table.integer("project_id")
             .notNull()
             .references("id")
             .inTable("projects")
    })
}





exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_tasks")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
}
