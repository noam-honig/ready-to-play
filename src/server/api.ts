import { remultExpress } from 'remult/remult-express'
import { Task } from '../shared/model.js'

export const entities = [Task]

export const api = remultExpress({
  entities,
  admin: true,
  getUser: (req) => req.session!['user'],
})
