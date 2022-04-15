function tratarErroEELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome:erro.name,
        msg:erro.menssage,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroEELancar(e)
    } finally {
        console.log('final')
    }
}
const obj = {nome: 'Roberto' }
imprimirNomeGritado(obj)