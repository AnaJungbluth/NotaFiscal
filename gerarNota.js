function gerarNotaFiscal() {
    var valorVenda = parseFloat(document.getElementById("valorVenda").value);
    var itens = document.getElementById("itens").value;
    var irpf = parseFloat(document.getElementById("irpf").value);
    var pis = parseFloat(document.getElementById("pis").value);
    var cofins = parseFloat(document.getElementById("cofins").value);
    var inss = parseFloat(document.getElementById("inss").value);
    var issqn = parseFloat(document.getElementById("issqn").value);

    if (isNaN(valorVenda) || itens === "" || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
        alert("Por favor, preencha todos os campos.");
        return; 
    }

    var valorIrpf = (irpf / 100) * valorVenda;
    var valorPis = (pis / 100) * valorVenda;
    var valorCofins = (cofins / 100) * valorVenda;
    var valorInss = (inss / 100) * valorVenda;
    var valorIssqn = (issqn / 100) * valorVenda;

    var totalImpostos = valorIrpf + valorPis + valorCofins + valorInss + valorIssqn;
    var totalNota = valorVenda + totalImpostos;

    document.getElementById("itensVenda").textContent = itens;
    document.getElementById("valorVendaExibido").textContent = valorVenda.toFixed(2);
    document.getElementById("irpfExibido").textContent = valorIrpf.toFixed(2);
    document.getElementById("pisExibido").textContent = valorPis.toFixed(2);
    document.getElementById("cofinsExibido").textContent = valorCofins.toFixed(2);
    document.getElementById("inssExibido").textContent = valorInss.toFixed(2);
    document.getElementById("issqnExibido").textContent = valorIssqn.toFixed(2);
    document.getElementById("totalImpostos").textContent = totalImpostos.toFixed(2);
    document.getElementById("totalNota").textContent = totalNota.toFixed(2);

    document.getElementById("notaFiscal").style.display = "block";
}
