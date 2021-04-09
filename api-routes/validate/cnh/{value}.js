
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('cnh')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


