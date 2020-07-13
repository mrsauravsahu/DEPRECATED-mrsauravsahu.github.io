import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddBlogPostsTables extends BaseSchema {
  protected tableName = 'blog_posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('file').notNullable().unique()
      table.string('extension').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
