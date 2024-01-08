document.addEventListener('DOMContentLoaded', function() {
    const fechaInput = document.getElementById('fechaSeleccionada');

    flatpickr("#datepicker", {
        minDate: "today",
        maxDate: new Date().fp_incr(7), // 14 days from now
        dateFormat: "l j \\de F, Y", // Día de la semana, día del mes "de" nombre del mes, año
        locale: {
            firstDayOfWeek: 1, // Lunes como el primer día de la semana
            weekdays: {
                shorthand: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                longhand: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
            },
            months: {
                shorthand: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                longhand: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            },
        },
        inline: true,
         onChange: function(selectedDates, dateStr, instance) {
            fechaInput.value = dateStr;
        },
    });
});
