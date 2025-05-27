function CalcularMeses(fecha_inicio, fecha_fin) {
    let meses = (fecha_fin.getFullYear() - fecha_inicio.getFullYear()) * 12;
    meses -= fecha_inicio.getMonth();
    meses += fecha_fin.getMonth();
    return Math.max(0, meses);
}

function CalcularCapitalFinal(capital, tasa, meses) {
    return capital * Math.pow(1 + (tasa / 100), meses);
}
function FormatoSoles(num) {
    return `S/ ${num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}
