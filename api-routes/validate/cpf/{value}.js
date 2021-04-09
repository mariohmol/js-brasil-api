
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('cpf')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


