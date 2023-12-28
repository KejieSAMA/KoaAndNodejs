const { getSchedule, changeSeat } = require('../service/movieSchedule.servce')

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
        console.log('running api => /cinema/getSchedule')
    }
    async changeScheduleInfo(ctx, next) {
        const { hashID, SeatInfo } = ctx.request.body
        try {
            const res = await changeSeat({ hashID, SeatInfo })
            ctx.body = {
                result: res
            }
        } catch (error) {
            console.log(error)
        }
        console.log('running api => /cinema/changeScheduleInfo')
    }
}

module.exports = new ScheduleController()