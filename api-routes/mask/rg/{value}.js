
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('rg')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


