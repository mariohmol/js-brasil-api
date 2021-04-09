
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('placa')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


