const CryptoJS = require('crypto-js');

const Cinema = require('../model/cinema.model')
const ScheduleServe = require('./movieSchedule.servce') 
const movieSchedule = require('../model/movieSchedule.model')
const Sequelize = require('sequelize');
class CinemaServe {
    async createCinema({ Cinema_name, Cinema_brand, Cinema_area, Cinema_type, Cinema_address, Cinema_ListArr }) {

        // 添加场次 

        for (const index in Cinema_ListArr) {
            
            for (const item in Cinema_ListArr[index].time) {
                const str = Cinema_ListArr[index].cnName + Cinema_address + Cinema_ListArr[index].time[item].mAre
                const encryptedStr = CryptoJS.MD5(str).toString();
                /* console.log({
                    hashID: encryptedStr,
                    movieName: Cinema_ListArr[index].cnName,
                    date: Cinema_ListArr[index].time[item].mDate,
                    startTime: Cinema_ListArr[index].time[item].mStartTime,
                    endTime: Cinema_ListArr[index].time[item].mEndTime,
                    language: Cinema_ListArr[index].time[item].language,
                    hall: Cinema_ListArr[index].time[item].mAre
                }) */
                const t = Cinema_ListArr[index].time[item]
                const res = await ScheduleServe.addMovieShedule(encryptedStr, Cinema_ListArr[index].cnName, t.mDate, t.mStartTime, t.mEndTime, t.price,t.language, t.mAre,JSON.stringify(t.seatInfo))
                Cinema_ListArr[index].time[item] = encryptedStr
            }
        }

        Cinema_ListArr = JSON.stringify(Cinema_ListArr)
        Cinema_type = JSON.stringify(Cinema_type)
        const res = await Cinema.create({ Cinema_name, Cinema_brand, Cinema_area, Cinema_type, Cinema_address, Cinema_ListArr })

        return res.dataValues
    }
    async getCinemaData({ MovieName }) {
        const query = {
            Cinema_ListArr: {
                [Sequelize.Op.like]: `%${MovieName}%` // 包含"MovieName"关键字
            }
        };
        console.log(MovieName)
        const res = await Cinema.findAll({
            where: query
        })
        let movieInfo = []
        for (const data in res) {
            movieInfo.push({
                Cinema_name: res[data].dataValues.Cinema_brand,
                Cinema_brand: res[data].dataValues.Cinema_brand,
                Cinema_area: res[data].dataValues.Cinema_area,
                Cinema_type: JSON.parse(res[data].dataValues.Cinema_type),
                Cinema_address: res[data].dataValues.Cinema_address,
                Cinema_ListArr: JSON.parse(res[data].dataValues.Cinema_ListArr)
            }) // 进行转换
        }
        return movieInfo
    }
}

module.exports = new CinemaServe()