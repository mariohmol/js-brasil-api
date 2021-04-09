
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('site')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


