
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('veiculo')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


