function validarCodigo() {
  const codigo = document.getElementById('codigo').value.trim();
  const mensagem = document.getElementById('mensagem');
  if (codigo === '298.298.45fc10485046') {
    window.location.href = '298.298.45fc10485046.html';
  } else {
    mensagem.textContent = 'Código inválido. Tente novamente.';
    mensagem.style.color = 'red';
  }
}
