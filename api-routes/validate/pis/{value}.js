
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('pis')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


