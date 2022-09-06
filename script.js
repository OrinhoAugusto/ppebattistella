const calcular = () => {
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    let c = parseFloat(a.value);
    let d = parseFloat(b.value);
    var res;

    if (c && d) {
        res = (c * c) + (d * d);
    }

document.getElementById("res").value

}

const limpar = () => {
    a.value = "";
    b.value = "";
    res.value = "";
}
