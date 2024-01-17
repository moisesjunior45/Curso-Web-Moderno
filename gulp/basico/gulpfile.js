const gulp = require('gulp');
const { parallel, series } = require('gulp');


const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb();
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb();
}

function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    // Pegando todos os arquivos que estão dentro da pastaA e tem a extensão .txt
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim')
    return cb();
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)