var olaNodeBR = require('./../scripts/olaNodeBR.js')

describe('Função olaNodeBr', function () {
  it('deve retornar saudação', function () {
    expect(olaNodeBR()).toStrictEqual('Olá pessoas, eu tô palestrando :)')
  })
})
