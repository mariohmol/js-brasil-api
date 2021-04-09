
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('cnpj')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


