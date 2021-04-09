
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('cns')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


