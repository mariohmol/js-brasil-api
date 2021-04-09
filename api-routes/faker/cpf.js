
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('cpf')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


