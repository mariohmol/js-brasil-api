
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('celular')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


