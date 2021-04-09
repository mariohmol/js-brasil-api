
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('cep')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


