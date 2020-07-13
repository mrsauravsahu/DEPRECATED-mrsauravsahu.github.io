import { IocContract } from '@adonisjs/fold'
import { FileServiceConfig } from 'Contracts/service.file-service';
import Application from '@ioc:Adonis/Core/Application';
import { FileService } from 'App/Services/FileService';

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready, when this file is loaded by the framework.
| Hence, the level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = (await import('@ioc:Adonis/Lucid/Database')).default
|   const Event = (await import('@ioc:Adonis/Core/Event')).default
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class TmpFileProvider {
  constructor (protected container: IocContract) {
  }

  public register () {
    // Register your own bindings
    this.container.singleton('providers/TmpFileProvider', () => {
      const config: FileServiceConfig = { basePath: Application.tmpPath() }
      return new FileService(config);
    })
  }

  public async boot () {
    // All bindings are ready, feel free to use them
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
