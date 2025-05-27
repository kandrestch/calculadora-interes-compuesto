const fecha_inicio_input = document.getElementById("fecha_inicio");
const fecha_fin_input = document.getElementById("fecha_fin");
const capital_inicial_input = document.getElementById("capital_inicial");
const tasa_interes_input = document.getElementById("tasa_interes");
const meses_input = document.getElementById("meses");
const btn_calcular = document.getElementById("btn_calcular");

function ValoresPorDefecto(){
    if (!capital_inicial_input.value) {
        capital_inicial_input.value=0;
    }
    if (!tasa_interes_input.value) {
        tasa_interes_input.value=0;
    }
    if (!fecha_fin_input.value) {
        fecha_fin_input.value = new Date().toISOString().split("T")[0];;
    }
}
function CamposValidos() {
    let valido = true;

    // Capital Inicial
    if (!capital_inicial_input.value) {
        capital_inicial_input.classList.add("error");
        valido = false;
    } else {
        capital_inicial_input.classList.remove("error");
    }

    // Interés
    if (!tasa_interes_input.value) {
        tasa_interes_input.classList.add("error");
        valido = false;
    } else {
        tasa_interes_input.classList.remove("error");
    }

    // Fecha inicio
    if (!fecha_inicio_input.value) {
        fecha_inicio_input.classList.add("error");
        valido = false;
    } else {
        fecha_inicio_input.classList.remove("error");
    }

    // Fecha fin
    if (!fecha_fin_input.value) {
        fecha_fin_input.classList.add("error");
        valido = false;
    } else {
        fecha_fin_input.classList.remove("error");
    }

    // Comparar fecha fin es mayor a fecha inicio
    if (fecha_inicio_input.value && fecha_fin_input.value) {
        const fecha_inicio = new Date(fecha_inicio_input.value);
        const fecha_fin = new Date(fecha_fin_input.value);
        if (fecha_inicio > fecha_fin) {
            fecha_inicio_input.classList.add("error");
            fecha_fin_input.classList.add("error");
            valido = false;
        } else {
            fecha_inicio_input.classList.remove("error");
            fecha_fin_input.classList.remove("error");
        }
    }

    return valido;
}

function Calcular(){
    ValoresPorDefecto();
    if(CamposValidos()){
        const fecha_inicio = new Date(fecha_inicio_input.value);
        const fecha_fin = new Date(fecha_fin_input.value);
        const capital_inicial = parseFloat(capital_inicial_input.value);
        const tasa_interes = parseFloat(tasa_interes_input.value);

        let meses = CalcularMeses(fecha_inicio,fecha_fin);
        const capital_final = CalcularCapitalFinal(capital_inicial,tasa_interes,meses);
        const ganancia = capital_final - capital_inicial;

        document.querySelector(".ganancia").textContent = FormatoSoles(ganancia);
        document.querySelector(".capital").textContent = FormatoSoles(capital_final);
        meses_input.value=meses
    }else{
        document.querySelector(".ganancia").textContent="S/ -";
        document.querySelector(".capital").textContent="S/ -";
    }
}
Calcular()

btn_calcular.addEventListener("click", Calcular);
fecha_inicio_input.addEventListener("change",Calcular)
fecha_fin_input.addEventListener("change",Calcular)
capital_inicial_input.addEventListener("change",Calcular)
tasa_interes_input.addEventListener("change",Calcular)