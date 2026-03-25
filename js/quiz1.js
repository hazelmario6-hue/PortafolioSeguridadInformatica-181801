// ESCENARIOS
const scenarios = [
    {
        type: "email",
        profilePic: "https://img.icons8.com/color/100/technical-support.png",
        senderName: "Soporte TI",
        senderId: "soporte.ti@tuempresa.com",
        subject: "Mantenimiento de Servidores Programado",
        body: "Hola <strong>[NOMBRE]</strong>,<br><br>Este fin de semana realizaremos mantenimiento en los servidores de correo entre las 2:00 AM y 4:00 AM del domingo. No se requiere ninguna acción de su parte.",
        checkPhishing: false,
        feedback: "<strong>Comunicación Legítima.</strong> El correo proviene del dominio interno correcto, no solicita contraseñas, no tiene enlaces externos ni exige acciones urgentes."
    },
    {
        type: "sms",
        profilePic: "https://cdn-icons-png.flaticon.com/512/3610/3610123.png",
        senderName: "Santandee", 
        senderId: "+52 (55) 1234 5678",
        subject: "SMS: Cargo de $500.00 MXN",
        body: "AVISO SANTANDEE: Se ha registrado un cargo de $500.00 MXN. Si no lo reconoces, bloquea tu tarjeta en: <a href='#' style='color:#00ff9c'>s-mexico-ayuda.com/seguro</a>",
        checkPhishing: true,
        feedback: "<strong>Vector: Smishing.</strong> El SMS utiliza un nombre de banco mal escrito ('Santandee') y un enlace fraudulento."
    },
    {
        type: "whatsapp",
        profilePic: "https://cdn-icons-png.flaticon.com/512/10702/10702951.png",
        senderName: "Recursos Humanos",
        senderId: "online",
        subject: "WhatsApp: Firma de Políticas",
        body: "Hola <strong>[NOMBRE]</strong>, te escribo de RRHH.<br><br>Necesitamos tu firma digital en las nuevas políticas de trabajo híbrido. Por favor, hazlo hoy para evitar retrasos en tu nómina:<br><br><a href='#' style='color:#00ff9c'>tuempresa.rrhh-portal.net/firma</a>",
        checkPhishing: true,
        feedback: "<strong>Vector: WhatsApp Phishing (Vishing).</strong> El ataque suplanta a RRHH, utiliza urgencia y un dominio falso ('rrhh-portal.net')."
    },
    {
        type: "browser",
        profilePic: "", 
        senderName: "Seguridad Informática",
        senderId: "Google Workspace",
        subject: "Consentimiento de Cuenta",
        body: "Al continuar, le permitirás a la aplicación:<br><ul><li><strong>Leer, redactar y eliminar tus correos</strong></li><li>Ver tu información personal básica</li></ul>",
        checkPhishing: true,
        feedback: "<strong>Vector: OAuth Phishing.</strong> Esta interfaz imita a Google para que otorgues permisos a una aplicación maliciosa de terceros."
    },
    {
        type: "telegram",
        profilePic: "https://cdn-icons-png.flaticon.com/512/11548/11548450.png",
        senderName: "Telegram Security",
        senderId: "bot",
        subject: "Telegram: Alerta de Cuenta",
        body: "Hola <strong>[NOMBRE]</strong>,<br><br>Nuestro sistema detectó actividad inusual. Para confirmar que eres tú, presiona el botón inferior.<br><br><button style='background:transparent; color:#fff; padding:10px; border:1px solid #fff; border-radius:5px;'>Confirmar Cuenta</button>",
        checkPhishing: true,
        feedback: "<strong>Vector: Telegram Phishing.</strong> El atacante suplanta a un bot de seguridad oficial para robar el token de sesión."
    },
    {
        type: "email",
        profilePic: "https://img.icons8.com/color/100/microsoft.png",
        senderName: "Soporte Técnico de Microsoft",
        senderId: "admin@tu-empresa-outlook.com", 
        subject: "Alerta de Seguridad: Inicio de sesión inusual",
        body: "Hola <strong>[NOMBRE]</strong>,<br><br>Detectamos un inicio de sesión inusual en tu cuenta corporativa. Si no fuiste tú, por favor descarga y ejecuta el reporte adjunto para bloquear el acceso malicioso.<br><br><div class='attachment-box'><strong>reporte_actividad_sospechosa.exe</strong></div>",
        checkPhishing: true,
        feedback: "<strong>Vector: Malware Phishing.</strong> El correo incluye un archivo ejecutable (.exe) disfrazado. TI nunca envía software así."
    },
    {
        type: "sms",
        profilePic: "https://cdn-icons-png.flaticon.com/512/2855/2855160.png",
        senderName: "Correos de México",
        senderId: "+52 (55) 9876 5432",
        subject: "SMS: Entrega Fallida",
        body: "CORREOS DE MÉXICO: No pudimos entregar su paquete. Actualice su dirección aquí para evitar la devolución:<br><br><a href='#' style='color:#00ff9c'>tu-paquete.com/ayuda</a>",
        checkPhishing: true,
        feedback: "<strong>Vector: Smishing.</strong> Suplantación de mensajería para capturar datos en una página falsa."
    },
    {
        type: "email",
        profilePic: "https://img.icons8.com/color/100/microsoft.png",
        senderName: "Equipo de Cuentas de Microsoft",
        senderId: "security.noreply@microsoft-alert.org",
        subject: "Alerta de Seguridad de tu Cuenta",
        body: "Hola <strong>[NOMBRE]</strong>,<br><br>Hemos detectado actividad inusual en tu cuenta. Para proteger tu información, por favor revisa el reporte de actividad detallado descargando y abriendo el archivo adjunto.<br><br><div class='attachment-box'><strong>reporte_actividad.html</strong></div>",
        checkPhishing: true,
        feedback: "<strong>Vector: Phishing / HTML Smuggling.</strong> El ataque utiliza un archivo .html adjunto. Al abrirlo, el navegador ejecuta un código que muestra una página de inicio de sesión falsa de Microsoft (con URL local `file://`) diseñada para robar tus credenciales si las ingresas."
    },
    {
        type: "whatsapp",
        profilePic: "https://cdn-icons-png.flaticon.com/512/11548/11548443.png",
        senderName: "Director General",
        senderId: "online",
        subject: "WhatsApp: Favor Urgente",
        body: "Hola <strong>[NOMBRE]</strong>, espero que estés bien.<br><br>Necesito un favor urgente de tu parte. Tengo un imprevisto con un cliente y necesito que compres 5 tarjetas de regalo de Apple de $1,000 MXN cada una. Te reembolsaré hoy mismo por la tarde.",
        checkPhishing: true,
        feedback: "<strong>Vector: Fraude del CEO.</strong> Apela a la autoridad y te aísla para que no verifiques la petición inusual."
    },
    {
        type: "email",
        profilePic: "https://img.icons8.com/color/100/technical-support.png",
        senderName: "Soporte TI",
        senderId: "soporte.ti@tuempresa.com",
        subject: "Aviso: Actualización Obligatoria de Contraseña",
        body: "Hola <strong>[NOMBRE]</strong>,<br><br>Tu contraseña expirará en 3 días. Por favor, realiza la actualización obligatoria directamente en tu equipo de trabajo presionando Ctrl+Alt+Supr y seleccionando 'Cambiar contraseña'. NO respondas a este correo ni compartas tus credenciales.",
        checkPhishing: false,
        feedback: "<strong>Comunicación Legítima.</strong> Te da instrucciones para un procedimiento seguro local sin pedir clics a enlaces externos."
    }
];

// ESTADO GLOBAL DEL JUEGO
let currentQuestion = 0;
let score = 0;
let userName = "";

// Variables de tiempo
let globalStartTime = 0;
let scenarioStartTime = 0;
let userPerformance = []; 

// REFERENCIAS DEL DOM
const screenStart = document.getElementById("screen-start");
const screenName = document.getElementById("screen-name");
const screenQuiz = document.getElementById("screen-quiz");
const screenFeedback = document.getElementById("screen-feedback");
const screenResults = document.getElementById("screen-results");

// LÓGICA Y EVENTOS
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
    
    globalStartTime = Date.now();
    
    initProgressBar();

    loadScenario();
    screenQuiz.classList.add("active");
});

// Función para cargar escenarios
function loadScenario() {
    const s = scenarios[currentQuestion];
    document.getElementById("current-q").innerText = currentQuestion + 1;
    
    const contentContainer = document.getElementById("q-content-container");
    contentContainer.innerHTML = ""; 

    const personalizedBody = s.body.replace(/\[NOMBRE\]/g, userName);
    let contentHtml = ""; 

    // Eleccion del tipo de escenario
    switch (s.type) {
        case "sms":
            contentHtml = `
                <div class="sms-content">
                    <div class="sms-header">
                        <div class="sms-avatar"><img src="${s.profilePic}" style="width:100%; height:100%; border-radius:50%;" alt="P"></div>
                        <div class="sms-name">${s.senderName} ❯</div>
                    </div>
                    <div class="sms-chat-area">
                        <div style="text-align:center; color:#888; font-size:0.75rem; margin-bottom:15px;">Hoy 10:42 a.m.</div>
                        <div class="sms-bubble">${personalizedBody}</div>
                    </div>
                    <div class="sms-input-fake">Mensaje de texto <span>↑</span></div>
                </div>`;
            break;
        case "whatsapp":
            contentHtml = `
                <div class="whatsapp-content">
                    <div class="wa-header">
                        <span class="wa-back">←</span>
                        <img src="${s.profilePic}" class="wa-profile-pic" alt="Profile">
                        <div class="wa-info">
                            <span class="wa-name">${s.senderName}</span>
                            <span class="wa-status">${s.senderId}</span>
                        </div>
                        <div class="wa-icons">🎥 📞 ⠇</div>
                    </div>
                    <div class="wa-chat-area">
                        <div class="wa-date-pill">HOY</div>
                        <div class="wa-bubble">
                            ${personalizedBody}
                            <span class="wa-time">10:42 a.m. ✓✓</span>
                        </div>
                    </div>
                </div>`;
            break;
        case "telegram":
            contentHtml = `
                <div class="telegram-content">
                    <div class="tg-header">
                        <span style="color:#aebac1; font-size:1.2rem; margin-right:5px;">←</span>
                        <img src="${s.profilePic}" style="width:40px; height:40px; border-radius:50%;" alt="Profile">
                        <div style="display:flex; flex-direction:column; margin-left:10px;">
                            <span class="tg-name">${s.senderName}</span>
                            <span class="tg-status">${s.senderId}</span>
                        </div>
                        <span style="margin-left:auto; color:#aebac1;">⠇</span>
                    </div>
                    <div class="tg-chat-area">
                        <div style="text-align:center; color:#687c91; font-size:0.8rem; margin-bottom:15px;">20 de Marzo</div>
                        <div class="tg-bubble">
                            ${personalizedBody}
                            <span class="tg-time">10:42 a.m.</span>
                        </div>
                    </div>
                </div>`;
            break;
        case "email":
            contentHtml = `
                <div class="email-content">
                    <div class="email-header">
                        <img src="${s.profilePic}" class="email-avatar" alt="Profile">
                        <div class="email-info">
                            <div class="email-sender"><span>${s.senderName}</span> <span class="email-time">10:42 a.m.</span></div>
                            <div class="email-to"><strong>Para:</strong> ${userName} &lt;${userName.toLowerCase().replace(/\s/g, '')}@tuempresa.com&gt;</div>
                        </div>
                    </div>
                    <div class="email-body">
                        <div class="email-subject">${s.subject}</div>
                        ${personalizedBody}
                    </div>
                    <div class="email-fake-reply">
                        <button class="email-btn">↩ Responder</button>
                        <button class="email-btn">↪ Reenviar</button>
                    </div>
                </div>`;
            break;


        case "browser":
            let logoUrl = "https://img.icons8.com/color/100/google-logo.png";
            if(s.senderId.includes("Microsoft")) logoUrl = "https://img.icons8.com/color/100/windows-10.png";
            
            contentHtml = `
                <div class="browser-content">
                    <div class="oauth-modal">
                        <div class="oauth-modal-header">
                            <img src="${logoUrl}" style="height:35px;" alt="Logo">
                        </div>
                        <div class="oauth-modal-body">
                            <div class="oauth-prompt"><strong>${s.senderName}</strong> quiere acceder a tu cuenta</div>
                            
                            <div class="oauth-account-badge">
                                <div class="oauth-avatar-small">${userName.charAt(0).toUpperCase()}</div>
                                <span>${userName.toLowerCase().replace(/\s/g, '')}@tuempresa.com</span>
                            </div>

                            <div class="oauth-details">
                                ${personalizedBody}
                            </div>
                            
                            <div class="oauth-actions">
                                <button class="btn-oauth-cancel">Cancelar</button>
                                <button class="btn-oauth-allow">Permitir</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            break;
    }

    contentContainer.innerHTML = contentHtml;
    
    scenarioStartTime = Date.now();

    for(let i = 0; i < scenarios.length; i++) {
        const step = document.getElementById("step-" + i);
        if(step) {
            step.classList.remove("active");
            if(i === currentQuestion) step.classList.add("active");
        }
    }
}

// EVALUACIÓN DE ESCNARIOS
function handleAnswer(userChoiceIsPhishing) {
    const timeTaken = (Date.now() - scenarioStartTime) / 1000; 
    const s = scenarios[currentQuestion];
    const isCorrect = (userChoiceIsPhishing === s.checkPhishing);
    
    if (isCorrect) score++;
    const currentStep = document.getElementById("step-" + currentQuestion);
    if(currentStep) {
        currentStep.classList.remove("active");
        if(isCorrect) {
            currentStep.classList.add("correct");
        } else {
            currentStep.classList.add("incorrect");
        }
    }
    // Guardar historial
    userPerformance.push({
        scenarioIndex: currentQuestion + 1,
        time: timeTaken,
        correct: isCorrect
    });

    const fTitle = document.getElementById("feedback-title");
    fTitle.innerText = isCorrect ? "¡Bien detectado!" : "¡Caíste en la trampa!";
    fTitle.style.color = isCorrect ? "#00ff9c" : "#ff4c4c";
    
    document.getElementById("feedback-time").innerText = `Tiempo de respuesta: ${timeTaken.toFixed(1)} segundos`;
    document.getElementById("feedback-text").innerHTML = s.feedback;

    screenQuiz.classList.remove("active");
    screenFeedback.classList.add("active");
}

// Botones de Decisión
document.getElementById("btn-phishing").addEventListener("click", () => handleAnswer(true));
document.getElementById("btn-real").addEventListener("click", () => handleAnswer(false));

// Botón Siguiente
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

// RESULTADOS Y RANKING
function showResults() {
    screenResults.classList.add("active");
    
    // Mostrar Score y Tiempo Total
    const totalTimeSeconds = ((Date.now() - globalStartTime) / 1000).toFixed(1);
    document.getElementById("final-score").innerText = `${score} / ${scenarios.length}`;
    document.getElementById("final-time").innerText = `${totalTimeSeconds}s`;

    // Rendimiento
    const errores = userPerformance.filter(p => p.correct === false);
    let analysisText = "";
    const cajaFeedback = document.querySelector(".hardest-scenario-box");

    if (errores.length === 0) {
        analysisText = "<strong>¡Operador de Élite!</strong><br><br>No caíste en ninguna trampa. Tienes un instinto afilado para detectar vectores de ingeniería social. Tu nivel de concientización es exactamente el que busca una organización segura. ¡Excelente trabajo!";
        cajaFeedback.style.borderLeftColor = "#00cc7d";
        cajaFeedback.style.backgroundColor = "rgba(0, 204, 125, 0.05)";
    } else {
        analysisText = `<strong>Vulnerabilidades Detectadas:</strong><br><br>Fuiste comprometido en los siguientes vectores. Revisa dónde estuvo el error de análisis:<br><br><ul style='list-style-type: none; padding: 0; margin-top: 15px;'>`;

        errores.forEach(p => {
            const indexReal = p.scenarioIndex - 1;
            const feedbackDelEscenario = scenarios[indexReal].feedback;
            
            analysisText += `
                <li style='margin-bottom: 15px; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 6px; border-left: 3px solid #ff4c4c;'>
                    <strong style='color: #ff4c4c;'>Escenario ${p.scenarioIndex}:</strong><br> 
                    <span style='color: #ccc; font-size: 0.95rem; line-height: 1.5;'>${feedbackDelEscenario}</span>
                </li>`;
        });

        analysisText += `</ul><br>En ciberseguridad, un solo clic es suficiente para vulnerar la red. Recuerda siempre inspeccionar las URLs reales, desconfiar de los sentidos de urgencia corporativa y jamás entregar permisos o credenciales sin validar por otro medio.`;

        cajaFeedback.style.borderLeftColor = "#ff4c4c"; 
        cajaFeedback.style.backgroundColor = "rgba(255, 76, 76, 0.05)";
    }

    document.getElementById("hardest-feedback").innerHTML = analysisText;

    renderLeaderboard(totalTimeSeconds);
}

function renderLeaderboard(userTotalTime) {
    const leaderboard = [
        { alias: "CyberNinja99", score: 10, time: 25.4 },
        { alias: "SecStudent", score: 8, time: 32.1 },
        { alias: "AdminRoot", score: 6, time: 18.5 },
        { alias: userName, score: score, time: parseFloat(userTotalTime), isCurrentUser: true }
    ];

    leaderboard.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.time - b.time;
    });

    const tbody = document.getElementById("ranking-body");
    tbody.innerHTML = "";

    leaderboard.forEach((player, index) => {
        const tr = document.createElement("tr");
        if (player.isCurrentUser) tr.style.background = "rgba(0, 255, 156, 0.15)";
        
        tr.innerHTML = `
            <td>#${index + 1}</td>
            <td>${player.alias}</td>
            <td>${player.score} / ${scenarios.length}</td>
            <td>${player.time.toFixed(1)}s</td>
        `;
        tbody.appendChild(tr);
    });
}
function initProgressBar() {
    const pb = document.getElementById("progress-bar");
    if (!pb) return;
    pb.innerHTML = "";
    for(let i = 0; i < scenarios.length; i++) {
        const step = document.createElement("div");
        step.classList.add("progress-step");
        step.id = "step-" + i;
        pb.appendChild(step);
    }
}
