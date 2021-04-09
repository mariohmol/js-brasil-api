
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('rg')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


