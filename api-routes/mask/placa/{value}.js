
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('placa')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


