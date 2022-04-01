var sql = require('../db/db_mariadb');

var connexion = null;

class Filter {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    connexion = new sql();

  }
  async initialize() {
    await connexion.startConnexion();

  }

  async getFilterList() {
    try {
      this.FilterList = await connexion.query("SELECT idNat, name, ipAddressSrc,portSrc,ipAddressDst,portDst, type FROM nat_rules");

      return this.FilterList;
    }
    catch (anError) {
      console.log('Error to get filter list !');

      // See error from SQL Client
      //console.log(anError);
    }
  }
  getFList() {
    return this.FilterList;
  }
}

module.exports = Filter;
