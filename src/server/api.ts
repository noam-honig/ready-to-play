import { remultExpress } from 'remult/remult-express'
import { Task } from '../shared/model.js'
import sqlite3 from 'sqlite3'
import { Sqlite3DataProvider } from 'remult/remult-sqlite3'
import { SqlDatabase } from 'remult'

export const entities = [Task]

export const api = remultExpress({
  entities,
  admin: true,
  // dataProvider: new SqlDatabase(
  //   // Note that on stackblitz, this database name is only saved per user on their own browser.
  //   // To store the database on stackblitz, change the name not to include a dot on the start.
  //   new Sqlite3DataProvider(new sqlite3.Database('.database.sqlite'))
  // ),
  getUser: (req) => req.session!['user'],
})
