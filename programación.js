function formatearHora(hora, minutos) {
      return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    }

    function actualizarProgramacion() {
      const ahora = new Date();
      const diaSemana = ahora.getDay();
      const hora = ahora.getHours();
      const minutos = ahora.getMinutes();
      const tiempoActual = hora + minutos / 60;

      const programacion = [
        // LUNES A VIERNES
    { dias: [1, 2, 3, 4, 5], inicio: 06, fin: 09, nombre: 'Desayuno de Campeones' },
    { dias: [1, 2, 3, 4, 5], inicio: 14, fin: 15, nombre: 'Rino a Todo Beats' },
    { dias: [1, 2, 3, 4, 5], inicio: 16, fin: 18, nombre: 'Gran Capital' },
    { dias: [1, 2, 3, 4, 5], inicio: 19, fin: 21, nombre: 'Rino Contemporáneo' },
    { dias: [1, 2, 3, 4, 5], inicio: 21, fin: 22, nombre: 'Aquí va de Todo con Guillermo Bravo' },
    { dias: [1, 2, 3, 4, 5], inicio: 22, fin: 00, nombre: 'Fina Selección' },
    { dias: [1, 2, 3, 4, 5], inicio: 00, fin: 06, nombre: 'Rino Chile, oídos bien abiertos' }, 
  
        // Agregar más intervalos de días y programas aquí
      ];

      const programaActual = programacion.find(p => p.dias.includes(diaSemana) && tiempoActual >= p.inicio && tiempoActual < p.fin);
      const programaProximo = programacion.find(p => p.dias.includes(diaSemana) && tiempoActual < p.inicio);

      if (programaActual) {
        document.getElementById('horaActual').textContent = formatearHora(programaActual.inicio, 0);
        document.getElementById('programaActual').textContent = programaActual.nombre;
        const tiempoTranscurrido = tiempoActual - programaActual.inicio;
        const duracionPrograma = programaActual.fin - programaActual.inicio;
        const progreso = (tiempoTranscurrido / duracionPrograma) * 100;
        document.getElementById('progressFill').style.width = progreso + '%';
      } else {
        document.getElementById('horaActual').textContent = formatearHora(hora, minutos);
        document.getElementById('programaActual').textContent = 'Rino Chile, oídos bien abiertos';
        document.getElementById('progressFill').style.width = '0';
      }

      if (programaProximo) {
        document.getElementById('horaProximo').textContent = formatearHora(programaProximo.inicio, 0);
        document.getElementById('programaProximo').textContent = programaProximo.nombre;
      } else {
        document.getElementById('horaProximo').textContent = formatearHora(hora, minutos);
        document.getElementById('programaProximo').textContent = 'Fin de la programación';
      }
    }

    actualizarProgramacion();
    setInterval(actualizarProgramacion, 60000); // Actualizar cada 1 minuto