const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hello everyone'
    }
}

module.exports = HomeController