// Esperar a que todo el HTML se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
  const sliderVerde = document.getElementById('sliderVerde');
  const sliderRojo = document.getElementById('sliderRojo');

  const cajaVerde = document.getElementById('cajaVerde');
  cajaVerde.style.backgroundColor = '#009900';
  const cajaRojo = document.getElementById('cajaRojo');

  const valVerde = document.getElementById('valVerde');
  const valRojo = document.getElementById('valRojo');

  // Función para convertir a 2 dígitos Hexadecimales
  function toHex2Digits(value) {
    const hex = parseInt(value, 10).toString(16).toUpperCase();
    return hex.length === 1 ? '0' + hex : hex;
  }

  // Actualización de color y texto verde
  function actualizarVerde() {
    const v = sliderVerde.value;
    const hexString = `#00${toHex2Digits(v)}00`;
    cajaVerde.style.backgroundColor = `rgb(0, ${v}, 0)`;
    valVerde.textContent = hexString;
  }

  // Actualización de color y texto rojo
  function actualizarRojo() {
    const r = sliderRojo.value;
    const hexString = `#${toHex2Digits(r)}0000`;
    cajaRojo.style.backgroundColor = `rgb(${r}, 0, 0)`;
    valRojo.textContent = hexString;
  }

  // Escuchar eventos
  sliderVerde.addEventListener('input', actualizarVerde);
  sliderRojo.addEventListener('input', actualizarRojo);

  // Ejecución inicial obligatoria
  actualizarVerde();
  actualizarRojo();
});