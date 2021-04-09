
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('celular')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


