const Controller = require("./controller");
const { NumberCount } = require("../models");

class NumberCountController extends Controller {
  async list(request, response) {
    const counters = await NumberCount.findAll();
    response.json({ counters });
  }

  async save(request, response) {
    const { number } = request.params;

    const [nCount, created] = await NumberCount.findOrCreate({
      where: { number },
      defaults: { number },
    });
    let numberCounter = nCount;
    if (!created) {
      numberCounter = await numberCounter.increment({ count: 1 });
    }
    response.json(numberCounter);
  }

  async reset(request, response) {
    await NumberCount.destroy({ truncate: true });
    response.json({ message: "Records reset" });
  }
}

module.exports = new NumberCountController();
