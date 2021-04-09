
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('cns')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


