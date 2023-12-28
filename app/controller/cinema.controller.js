const { createCinema,getCinemaData } = require('../service/cinema.servce')

class CinemaController {
    async addCinema(ctx, next) {
        const { Cinema_name, Cinema_brand, Cinema_area, Cinema_type, Cinema_address, Cinema_ListArr } = ctx.request.body
        try {
            const res = await createCinema({ Cinema_name, Cinema_brand, Cinema_area, Cinema_type, Cinema_address, Cinema_ListArr })
            ctx.body = {
                name: Cinema_name,
                brand: Cinema_brand,
                area: Cinema_area,
                type: Cinema_type,
                address: Cinema_address,
                ListArr: Cinema_ListArr,
            }
        } catch (error) {
            console.log(error)
        }
        console.log('running api => /cinema/addCinema')
    }
    async getCinemaInfo(ctx, next) {
        const { MovieName } = ctx.request.body
        try {
            const res = await getCinemaData({MovieName})
            ctx.body = {
                data: res
            }
        } catch (error) {
            console.log(error)
        }
        console.log('running api => /cinema/getCinemaInfo')
    }
}

module.exports = new CinemaController()