// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { GetHealthDto } from "Contracts/response.get-health";
import { Response } from "Contracts/response";
import * as packageInfo from '../../../package.json';

export default class HealthController {
  async index(): Promise<Response<GetHealthDto>> {
    return Promise.resolve({
      data: {
        name: packageInfo.name,
        version: `v${packageInfo.version}`
      }
    })
  }
}
