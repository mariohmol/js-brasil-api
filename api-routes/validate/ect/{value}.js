
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('ect')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


