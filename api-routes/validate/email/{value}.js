
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('email')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


