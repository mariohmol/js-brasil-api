
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('cns')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


