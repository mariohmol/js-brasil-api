
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('cnpj')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


