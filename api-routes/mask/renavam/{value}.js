
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('renavam')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


