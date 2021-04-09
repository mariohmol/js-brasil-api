
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('pis')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


