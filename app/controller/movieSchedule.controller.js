const { getSchedule } = require('../service/movieSchedule.servce')

class ScheduleController {
    async getScheduleInfo(ctx, next) {
        const { hashID } = ctx.request.body
        try {
            const res = await getSchedule(hashID)
            ctx.body = {
                result: res
            }
        } catch (error) {
            console.log(error)
        }
        console.log('running api => /cinema/addCinema')
    }
}

module.exports = new ScheduleController()