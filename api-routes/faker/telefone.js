
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('telefone')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


