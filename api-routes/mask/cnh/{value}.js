
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('cnh')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


