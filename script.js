document.getElementById('contractForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Capturar dados
    const freelancer = document.getElementById('freelancerName').value;
    const client = document.getElementById('clientName').value;
    const project = document.getElementById('projectName').value;
    const price = document.getElementById('price').value;
    const date = new Date().toLocaleDateString('pt-BR');

    // 2. Modelo de Contrato
    const contractTemplate = `
        <h2>CONTRATO DE PRESTAÇÃO DE SERVIÇOS</h2>
        <p><strong>Contratante:</strong> ${client}</p>
        <p><strong>Contratado:</strong> ${freelancer}</p>
        <p>Data: ${date}</p>
        <hr>
        <p>Pelo presente instrumento, o Contratado se compromete a realizar o projeto <strong>${project}</strong>
        para o Contratante pelo valor de <strong>R$ ${price}</strong>.</p>
        <p>O pagamento será realizado após a entrega final.</p>
        <br><br>
        <p>__________________________<br>Assinatura Contratante</p>
        <p>__________________________<br>Assinatura Contratado</p>
    `;

    // 3. Exibir contrato
    document.getElementById('contractContent').innerHTML = contractTemplate;
    document.getElementById('contractPreview').classList.remove('hidden');
});
