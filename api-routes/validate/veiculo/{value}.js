
const generateValidateApi = require('../../../utils/validate')

const {defaultExport, apiDoc} = generateValidateApi('veiculo')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


