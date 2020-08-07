import { Request, Response } from 'express'

import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(req: Request, res: Response) {
    const filter = req.query

    const subject = filter.subject as string
    const week_day = filter.week_day as string
    const time = filter.time as string


    if (!filter.week_day || !filter.subject || !filter.time) {
      return res.status(400).json({
        error: "Missing filter to search classes"
      })
    }

    const timeInMinutes = convertHourToMinutes(time)

    try {
      // 2h14
      const classes = await db('classes')
        .where()

      return res.json(classes)
    } catch (err) {
      console.error(err)
    }
  }

  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      bio,
      whatsapp,
      subject,
      cost,
      schedule
    } = req.body

    const trx = await db.transaction()

    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        bio,
        whatsapp
      }).returning('id')

      const user_id = insertedUsersIds[0]


      const insertedclassesId = await trx('classes').insert({
        subject,
        cost,
        user_id
      }).returning('id')

      const class_id = insertedclassesId[0]

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to)
        }
      })


      await trx('classes_schedule').insert(classSchedule)

      await trx.commit()

      return res.status(201).send()
    } catch (err) {
      console.log(err);

      await trx.rollback()

      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }
}