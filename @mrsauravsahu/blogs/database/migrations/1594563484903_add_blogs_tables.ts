import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddBlogsTables extends BaseSchema {
  protected tableName = 'blogs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').unique().notNullable()
      table.string('slug').unique().notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
