
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('cnpj')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


