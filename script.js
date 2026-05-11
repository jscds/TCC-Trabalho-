function abrirCadastro() {
  document.getElementById('modalCadastro').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modalCadastro').style.display = 'none';
}

function abrirCamera() {
  alert("📷 Câmera aberta! (Simulação)\n\nEm um projeto real, aqui abriria a webcam com face-api.js ou outra biblioteca.");
}

function atualizarLista() {
  const count = Math.floor(Math.random() * 50) + 10;
  document.getElementById('alunos-count').textContent = `${count} alunos no sistema`;
  alert(`✅ Lista atualizada! Total: ${count} alunos`);
}

// Preview do arquivo escolhido
document.getElementById('foto').addEventListener('change', function(e) {
  const fileName = e.target.files[0] ? e.target.files[0].name : "Nenhum arquivo escolhido";
  document.getElementById('file-name').textContent = fileName;
});

// Fechar modal clicando fora
window.onclick = function(event) {
  const modal = document.getElementById('modalCadastro');
  if (event.target === modal) {
    fecharModal();
  }
}