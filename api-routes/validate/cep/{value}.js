
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('cep')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


