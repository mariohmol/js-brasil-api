
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('renavam')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


