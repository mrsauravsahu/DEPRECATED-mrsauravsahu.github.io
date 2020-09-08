import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddPostsTables extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('file').notNullable().unique()
      table.string('extension').notNullable()
      table.integer('blog_id').notNullable()
      table.timestamps(true)

      table.foreign('blog_id').references('blogs.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
