import { DateTime } from "luxon"

export type BlogDto = {
  id: number
  title: string
  createdAt: DateTime
  updatedAt: DateTime
}
