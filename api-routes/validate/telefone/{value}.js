
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('telefone')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


