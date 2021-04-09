
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('cnh')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


