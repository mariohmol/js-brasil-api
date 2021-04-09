
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('processo')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


