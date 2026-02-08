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

document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.key === "F12" ||
        (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "g" || (e.shiftKey && e.key === "I")))
    ) {
        e.preventDefault();
    }
});

const modalOverlay = document.getElementById('modalOverlay');
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

function toggleMobileMenu() {
    menuBtn?.classList.toggle('active');
    mobileNav?.classList.toggle('open');
}

menuBtn?.addEventListener('click', toggleMobileMenu);

function toggleModal() {
    modalOverlay.classList.remove('active');
}

function openWindow(targetId) {
    document.querySelectorAll('.window').forEach(win => win.style.display = 'none');
    
    const windowToOpen = document.getElementById(`${targetId}-window`);
    
    if (windowToOpen) {
        windowToOpen.style.display = 'flex';
        modalOverlay.classList.add('active');
    }
    
    menuBtn?.classList.remove('active');
    mobileNav?.classList.remove('open');
}

document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);

            if (document.getElementById(`${targetId}-window`)) {
                e.preventDefault();
                openWindow(targetId);
            }
        }
    }
});

modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) toggleModal();
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showSecurityAlert();
}, false);

document.addEventListener('keydown', (e) => {

    const isForbidden = (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u')) ||
        (e.ctrlKey && (e.key === 'S' || e.key === 's')) ||
        (e.ctrlKey && (e.key === 'H' || e.key === 'h')) ||
        (e.ctrlKey && (e.key === 'P' || e.key === 'p'))
    );

    if (isForbidden) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityAlert();
        return false;
    }
});

document.onselectstart = (e) => {
    e.preventDefault();
    return false;
};

cargarlos.
document.addEventListener('dragstart', (e) => {
    if (e.target.nodeName === 'IMG') {
        e.preventDefault();
    }
}, false);

window.addEventListener('resize', () => {
    if ((window.outerHeight - window.innerHeight) > 200 || 
        (window.outerWidth - window.innerWidth) > 200) {
        console.warn("Detección de herramientas de desarrollo abierta.");
    }
});

setInterval(() => {
    const antes = new Date().getTime();
    debugger;
    const despues = new Date().getTime();
    
    if (despues - antes > 50) {
        document.body.style.filter = "blur(10px)";
        document.body.innerHTML = `
            <div style="background:#000; color:#0ff; height:100vh; display:flex; 
                        flex-direction:column; align-items:center; justify-content:center; 
                        font-family:sans-serif; text-align:center; padding:20px;">
                <h1 style="text-shadow: 0 0 10px #0ff;">VYLKROXANT SECURITY SYSTEM</h1>
                <p>Acceso denegado: Intento de inspección detectado.</p>
                <button onclick="location.reload()" style="background:#0ff; color:#000; border:none; 
                        padding:10px 20px; cursor:pointer; font-weight:bold; border-radius:5px;">
                    REINTENTAR ACCESO
                </button>
            </div>`;
    }
}, 1000);

if (window.console) {
    setInterval(() => {
        console.clear();
        console.log("%c⚠️ VYLKROXANT ⚠️", "color: red; font-size: 40px; font-weight: bold;");
        console.log("%cEl acceso a la consola está prohibido por el administrador.", "color: yellow; font-size: 18px;");
    }, 1000);
}
