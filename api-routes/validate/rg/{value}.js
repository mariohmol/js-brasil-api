
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('rg')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


