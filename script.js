        document.addEventListener('DOMContentLoaded', () => {
    const subjects = [
        "Microsoft Word", "Microsoft Excel", "Microsoft Access", 
        "Microsoft PowerPoint", "Microsoft Visio", "Microsoft Project", "Inglés Australiano"
    ];


    const daySelects = document.querySelectorAll('.day-opt');
    daySelects.forEach(select => {
        let defaultOpt = document.createElement('option');
        defaultOpt.textContent = "Seleccione";
        defaultOpt.value = "-";
        select.appendChild(defaultOpt);

        subjects.forEach(sub => {
            let opt = document.createElement('option');
            opt.value = sub;
            opt.textContent = sub;
            select.appendChild(opt);
        });

        select.addEventListener('change', (e) => {
            const targetId = select.getAttribute('data-day');
            document.getElementById(targetId).textContent = e.target.value.toUpperCase();
            if(e.target.value.includes("Inglés")) {
                document.getElementById(targetId).style.color = "blue";
            } else {
                document.getElementById(targetId).style.color = "black";
            }
        });
    });

const selectTurno = document.getElementById('inTurno');
const selectHora = document.getElementById('inTime');

const horarios = {
    matutino: ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM"],
    diurno: ["18:00 PM", "19:00 PM", "20:00 PM", "21:00 PM"]
};

selectTurno.addEventListener('change', () => {
    const turnoSeleccionado = selectTurno.value;
    
    const visorTurno = document.getElementById('vTurno');
    if (visorTurno) {
        visorTurno.textContent = turnoSeleccionado.toUpperCase() || "";
    }
    
    selectHora.innerHTML = '<option value="" style="text-align: center;">Seleccione hora</option>';

    if (turnoSeleccionado && horarios[turnoSeleccionado]) {
        horarios[turnoSeleccionado].forEach(hora => {
            let opt = document.createElement('option');
            opt.value = hora;
            opt.textContent = hora;
            selectHora.appendChild(opt);
        });
    }
});

const inputsActualizar = ['inFirstName', 'inLastName', 'inCDI', 'inLevel', 'inTime'];
inputsActualizar.forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        const fName = document.getElementById('inFirstName').value;
        const lName = document.getElementById('inLastName').value;
        document.getElementById('vFullName').textContent = `${fName} ${lName}`.toUpperCase() || "";
        document.getElementById('vCDI').textContent = document.getElementById('inCDI').value.toUpperCase() || "";
        document.getElementById('vLevel').textContent = document.getElementById('inLevel').value.toUpperCase();
        
        document.getElementById('vTimeLabel').textContent = document.getElementById('inTime').value || "";
    });
});

    document.getElementById('btnDown').addEventListener('click', () => {
        const area = document.getElementById('captureArea');
        html2canvas(area, { scale: 2 }).then(canvas => {
            const link = document.createElement('a');
            link.download = `Horario_Semanal_Vylkroxant.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    });
});
