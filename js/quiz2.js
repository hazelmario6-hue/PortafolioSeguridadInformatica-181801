// ==========================================
// BASE DE DATOS DE ESCENARIOS
// ==========================================
const scenarios = [
    // --- Escenario 1 (Phishing Clásico - RRHH) ---
    {
        sender: "Recursos Humanos <hr@empresa-falsa.com>",
        subject: "URGENTE - Firma de nuevas políticas 2026",
        body: "<div style='text-align:center; margin-bottom:15px;'><img src='https://cdn-icons-png.flaticon.com/512/3125/3125692.png' width='50' style='filter: invert(1); opacity: 0.8;'></div>Hola <strong>[NOMBRE]</strong>,<br><br>Por regulaciones recientes, es obligatorio revisar y firmar las nuevas políticas de trabajo remoto antes de 24 horas para evitar sanciones. Haz clic en el enlace inferior para acceder a la intranet.<br><br><div style='text-align:center; margin-top:20px;'><a href='#' style='background:var(--primary-color); color:#000; padding:10px 20px; text-decoration:none; font-weight:bold; border-radius:5px;'>Acceder a la Intranet</a></div>",
        type: "phishing",
        feedback: "<strong>Vector: Credential Harvesting.</strong> El dominio no es oficial. El objetivo era evaluar si verificabas el remitente y caías en el sentido de urgencia corporativa."
    },
    // --- Escenario 2 (Real - Mantenimiento) ---
    {
        sender: "Soporte TI Interno <soporte@tu-empresa.com>",
        subject: "Mantenimiento de Servidores Programado",
        body: "<h3 style='color:#ccc; border-bottom:1px solid #444; padding-bottom:10px;'>Boletín de TI Interno</h3>Estimado/a <strong>[NOMBRE]</strong>,<br><br>Le informamos que este fin de semana realizaremos mantenimiento en los servidores de correo. Es posible que experimente interrupciones intermitentes el domingo de 2:00 AM a 4:00 AM. No se requiere ninguna acción de su parte.",
        type: "real",
        feedback: "<strong>Comunicación Legítima.</strong> El correo proviene del dominio interno correcto, no solicita contraseñas, no tiene enlaces externos ni exige acciones urgentes."
    },
    // --- Escenario 3 (Phishing - Malware Oculto) ---
    {
        sender: "Soporte Técnico Microsoft <admin@outlook-security-alert.com>",
        subject: "Se ha detectado un inicio de sesión inusual",
        body: "<img src='https://img.icons8.com/color/100/microsoft.png' width='50' style='margin-bottom:15px;'><br>Hola <strong>[NOMBRE]</strong>,<br><br>Detectamos un inicio de sesión en tu cuenta desde Rusia. Si no fuiste tú, por favor verifica tu identidad descargando el reporte adjunto.<br><br><div style='background:rgba(255,76,76,0.1); border:1px solid #ff4c4c; padding:12px; border-radius:6px; display:flex; align-items:center; width:max-content; margin-top:15px;'><span style='font-size:1.5rem; margin-right:10px;'>📎</span> <code>reporte_actividad.pdf.exe</code></div>",
        type: "phishing",
        feedback: "<strong>Vector: Malware/Phishing.</strong> El dominio del remitente es fraudulento y el archivo adjunto es un ejecutable (.exe) oculto bajo un doble nombre de extensión. ¡Jamás descargues eso!"
    },
    // --- Escenario 4 (Phishing - Quishing / QR) ---
    {
        sender: "Seguridad de la Información <admin@tu-empresa.com>",
        subject: "Acción Requerida: Migración a Autenticador V2",
        body: "Hola <strong>[NOMBRE]</strong>,<br><br>Estamos migrando a un nuevo sistema 2FA corporativo. Escanea el código QR a continuación con la cámara de tu celular para enlazar tu dispositivo. Si no completas este paso hoy, perderás el acceso a la VPN.<br><br><div style='text-align:center; margin-top:20px;'><img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://te-acaban-de-hackear.com' alt='QR Code' style='border: 8px solid white; border-radius: 8px;'></div>",
        type: "phishing",
        feedback: "<strong>Vector: Quishing (QR Phishing).</strong> Los atacantes usan códigos QR reales para evadir los antivirus del correo y obligarte a abrir enlaces maliciosos en tu celular, que suele estar menos protegido."
    },
    // --- Escenario 5 (Real - Instrucción directa) ---
    {
        sender: "Active Directory <noreply@tu-empresa.com>",
        subject: "Aviso: Su contraseña expirará en 3 días",
        body: "<div style='border-left: 4px solid var(--primary-color); padding-left: 15px;'>Hola <strong>[NOMBRE]</strong>,<br><br>Tu contraseña de red corporativa expirará en 3 días. Por favor, presiona <strong>Ctrl+Alt+Supr</strong> en tu equipo de trabajo y selecciona 'Cambiar contraseña'.<br><br><span style='color:#ff4c4c; font-size:0.85rem;'>NO respondas a este correo ni compartas tus credenciales.</span></div>",
        type: "real",
        feedback: "<strong>Comunicación Legítima.</strong> No incluye ningún enlace malicioso. Te indica realizar un procedimiento físico seguro directamente en tu sistema operativo local."
    },
    // --- Escenario 6 (Phishing - Evasión ZIP) ---
    {
        sender: "Facturación Proveedores <pagos@proveedor-servicios.net>",
        subject: "URGENTE: Factura Vencida #88291 - Último Aviso",
        body: "Estimado/a <strong>[NOMBRE]</strong>,<br><br>Adjuntamos la factura #88291. Al tener un atraso de 15 días, procederemos con la suspensión del servicio mañana a primera hora.<br><br>El documento adjunto está cifrado por seguridad. <strong>Contraseña: Factura2026</strong><br><br><div style='background:rgba(0,255,156,0.1); border:1px solid var(--primary-color); padding:12px; border-radius:6px; display:flex; align-items:center; width:max-content; margin-top:15px;'><span style='font-size:1.5rem; margin-right:10px;'>🗄️</span> <code>Factura_88291.zip</code></div>",
        type: "phishing",
        feedback: "<strong>Vector: Malware Evasion.</strong> Envían archivos ZIP con contraseña y la incluyen en el texto para evitar que el escáner del servidor de correo analice el troyano que viene dentro."
    },
    // --- Escenario 7 (Phishing - Typosquatting LinkedIn) ---
    {
        sender: "LinkedIn <messages-noreply@linkIedin.com>",
        subject: "Apareciste en 14 búsquedas esta semana",
        body: "<img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' width='40' style='margin-bottom:15px;'><br>Hola <strong>[NOMBRE]</strong>,<br><br>Tu perfil está ganando tracción. Tienes 3 mensajes nuevos de reclutadores esperando una respuesta. Inicia sesión para ver quién está interesado en tu experiencia profesional.<br><br><div style='text-align:center; margin-top:20px;'><a href='#' style='background:#0a66c2; color:#fff; padding:10px 20px; text-decoration:none; font-weight:bold; border-radius:20px;'>Ver mis mensajes</a></div>",
        type: "phishing",
        feedback: "<strong>Vector: Typosquatting / Homoglyph.</strong> El remitente dice '@linkIedin.com' (con una 'i' mayúscula). Los atacantes registran dominios casi idénticos y roban logos oficiales para engañar a tu cerebro."
    },
    // --- Escenario 8 (Real - Alerta Google) ---
    {
        sender: "Google Workspace <no-reply@accounts.google.com>",
        subject: "Alerta de seguridad: Nuevo inicio de sesión",
        body: "<img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' width='35' style='margin-bottom:10px;'><br><div style='border:1px solid #e0e0e0; border-radius:8px; padding:20px; text-align:center;'><h3 style='color:#fff; margin-bottom:10px;'>Nuevo inicio de sesión en Mac</h3><p style='color:#ccc; font-size:0.9rem;'>Notamos un nuevo inicio de sesión en tu cuenta desde Tonalá, Jalisco. Si fuiste tú, no es necesario que hagas nada.</p><br><a href='#' style='color:var(--primary-color); font-weight:bold; text-decoration:none;'>Comprobar actividad</a></div>",
        type: "real",
        feedback: "<strong>Comunicación Legítima.</strong> Es una alerta real. La clave está en verificar que el dominio sea exactamente 'accounts.google.com' y que no te amenace con bloquear tu cuenta instantáneamente si no haces clic."
    },
    // --- Escenario 9 (Phishing - Fraude del CEO) ---
    {
        sender: "Director General <ceo.tuempresa@gmail.com>",
        subject: "Disponibilidad rápida",
        body: "Hola <strong>[NOMBRE]</strong>, necesito un favor urgente.<br><br>Estoy en una reunión con la junta y no puedo recibir llamadas. Necesito que compres 5 tarjetas de regalo de Apple de $1,000 MXN cada una para unos clientes importantes. Te reembolsaré el dinero por la tarde desde caja chica. ¿Me confirmas si puedes ayudarme ahora mismo?<br><br><em>Enviado desde mi iPhone</em>",
        type: "phishing",
        feedback: "<strong>Vector: Business Email Compromise (BEC).</strong> No hay enlaces ni imágenes. El correo apela a la autoridad y te aísla ('no puedo recibir llamadas'). Además, es ilógico que el CEO use Gmail para procesos financieros urgentes."
    },
    // --- Escenario 10 (Phishing - OAuth) ---
    {
        sender: "Microsoft OneDrive <noreply@sharepoint-online-docs.com>",
        subject: "RRHH ha compartido 'Estructura_Salarial_2026.xlsx' contigo",
        body: "<img src='https://img.icons8.com/color/100/microsoft-onedrive-2019.png' width='50' style='margin-bottom:10px;'><br>El departamento de Recursos Humanos ha compartido un documento altamente confidencial contigo.<br><br>Para visualizar el documento, debes otorgar permisos a la aplicación de lectura 'SharePoint Viewer'.<br><br><div style='text-align:center; margin-top:20px;'><button style='background:transparent; color:#0078d4; padding:10px 15px; border:2px solid #0078d4; border-radius:4px; font-weight:bold; cursor:pointer;'>Conceder Permisos</button></div>",
        type: "phishing",
        feedback: "<strong>Vector: OAuth Consent Phishing.</strong> En lugar de robar tu contraseña, te engañan para que le des permisos a una aplicación maliciosa de terceros, dándole acceso a leer tus correos y archivos reales."
    }
];

// ==========================================
// ESTADO GLOBAL DEL JUEGO
// ==========================================
let currentQuestion = 0;
let score = 0;
let userName = "";

// Variables de tiempo
let globalStartTime = 0;
let scenarioStartTime = 0;
let userPerformance = []; // Guardará {escenario, tiempo, correcto}

// ==========================================
// REFERENCIAS DEL DOM
// ==========================================
const screenStart = document.getElementById("screen-start");
const screenName = document.getElementById("screen-name");
const screenQuiz = document.getElementById("screen-quiz");
const screenFeedback = document.getElementById("screen-feedback");
const screenResults = document.getElementById("screen-results");

// ==========================================
// LÓGICA DE FLUJO
// ==========================================
document.getElementById("btn-start").addEventListener("click", () => {
    screenStart.classList.remove("active");
    screenName.classList.add("active");
});

document.getElementById("btn-name").addEventListener("click", () => {
    const inputName = document.getElementById("user-alias").value.trim();
    if (inputName === "") {
        alert("Por favor, ingresa un alias para continuar.");
        return;
    }
    userName = inputName;
    screenName.classList.remove("active");
    
    // Iniciar el reloj global
    globalStartTime = Date.now();
    
    loadScenario();
    screenQuiz.classList.add("active");
});

function loadScenario() {
    const s = scenarios[currentQuestion];
    document.getElementById("current-q").innerText = currentQuestion + 1;
    document.getElementById("q-sender").innerText = s.sender;
    document.getElementById("q-subject").innerText = s.subject;
    
    // Personalizar el mensaje con el alias
    const personalizedBody = s.body.replace(/\[NOMBRE\]/g, userName);
    document.getElementById("q-body").innerHTML = personalizedBody;

    // Iniciar el cronómetro de este escenario específico
    scenarioStartTime = Date.now();
}

// ==========================================
// EVALUACIÓN DE RESPUESTA
// ==========================================
function handleAnswer(userChoice) {
    const timeTaken = (Date.now() - scenarioStartTime) / 1000; // Segundos
    const s = scenarios[currentQuestion];
    const isCorrect = (userChoice === s.type);
    
    if (isCorrect) score++;

    // Guardar estadísticas del usuario
    userPerformance.push({
        scenarioIndex: currentQuestion + 1,
        time: timeTaken,
        correct: isCorrect,
        type: s.type
    });

    // Mostrar Feedback Inmediato
    const fTitle = document.getElementById("feedback-title");
    fTitle.innerText = isCorrect ? "✅ ¡Bien detectado!" : "🚨 ¡Caíste en la trampa!";
    fTitle.style.color = isCorrect ? "#00ff9c" : "#ff4c4c";
    
    document.getElementById("feedback-time").innerText = `Tiempo de respuesta: ${timeTaken.toFixed(1)} segundos`;
    document.getElementById("feedback-text").innerHTML = s.feedback;

    screenQuiz.classList.remove("active");
    screenFeedback.classList.add("active");
}

document.getElementById("btn-phishing").addEventListener("click", () => handleAnswer("phishing"));
document.getElementById("btn-real").addEventListener("click", () => handleAnswer("real"));

// ==========================================
// SIGUIENTE Y FINALIZACIÓN
// ==========================================
document.getElementById("btn-next").addEventListener("click", () => {
    currentQuestion++;
    screenFeedback.classList.remove("active");

    if (currentQuestion < scenarios.length) {
        loadScenario();
        screenQuiz.classList.add("active");
    } else {
        showResults();
    }
});

function showResults() {
    screenResults.classList.add("active");
    
    // 1. Calcular tiempo total
    const totalTimeSeconds = ((Date.now() - globalStartTime) / 1000).toFixed(1);
    document.getElementById("final-score").innerText = `${score} / ${scenarios.length}`;
    document.getElementById("final-time").innerText = `${totalTimeSeconds}s`;

    // 2. Encontrar el escenario que más le costó (mayor tiempo)
    let hardest = userPerformance[0];
    for(let i = 1; i < userPerformance.length; i++) {
        if(userPerformance[i].time > hardest.time) {
            hardest = userPerformance[i];
        }
    }

    // 3. Generar Feedback Final Personalizado
    let analysisText = `El <strong>Escenario ${hardest.scenarioIndex}</strong> fue el que más te hizo dudar, tomando <strong>${hardest.time.toFixed(1)} segundos</strong> en decidir. `;
    
    if(hardest.correct) {
        analysisText += `¡Pero valió la pena! Analizaste bien los indicadores y tomaste la decisión correcta. En un entorno real, esa pausa es la diferencia entre estar seguro y sufrir una brecha.`;
    } else {
        analysisText += `Desafortunadamente, la decisión fue incorrecta. Los atacantes diseñan correos que nos obligan a pensar de más o nos confunden. Recuerda: ante la menor duda en un entorno real, es mejor reportarlo al equipo de TI.`;
    }
    document.getElementById("hardest-feedback").innerHTML = analysisText;

    // 4. Generar y Mostrar Ranking Estático
    renderLeaderboard(totalTimeSeconds);
}

// ==========================================
// RANKING (HALL OF FAME ESTÁTICO)
// ==========================================
function renderLeaderboard(userTotalTime) {
    // Datos falsos para que el ranking no esté vacío
    const leaderboard = [
        { alias: "CyberNinja99", score: 10, time: 25.4 },
        { alias: "SecStudent", score: 8, time: 32.1 },
        { alias: "AdminRoot", score: 6, time: 18.5 },
        // Insertamos al usuario actual
        { alias: userName, score: score, time: parseFloat(userTotalTime), isCurrentUser: true }
    ];

    // Ordenar: Primero por Score (Mayor a menor), luego por Tiempo (Menor a mayor)
    leaderboard.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.time - b.time;
    });

    // Renderizar tabla
    const tbody = document.getElementById("ranking-body");
    tbody.innerHTML = "";

    leaderboard.forEach((player, index) => {
        const tr = document.createElement("tr");
        if (player.isCurrentUser) tr.className = "current-user-row";
        
        tr.innerHTML = `
            <td>#${index + 1}</td>
            <td>${player.alias}</td>
            <td>${player.score} / ${scenarios.length}</td>
            <td>${player.time.toFixed(1)}s</td>
        `;
        tbody.appendChild(tr);
    });
}
