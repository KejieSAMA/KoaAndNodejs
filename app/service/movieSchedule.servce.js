const movieSchedule = require('../model/movieSchedule.model')
class ScheduleServe {
    async addMovieShedule(hashID, movieName, date, startTime, endTime, price, language, hall, seatInfo) {

        // 添加场次 
        const res = await movieSchedule.create({ hashID, movieName, date, startTime, endTime, price, language, hall, seatInfo })

        return res.dataValues
    }
    async getSchedule(hashID) {

        const res = await movieSchedule.findOne({
            where: {
                hashID: hashID
            }
        })

        return res.dataValues
    }
}

module.exports = new ScheduleServe()