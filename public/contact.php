<?php
// Configurar zona horaria de Colombia
date_default_timezone_set('America/Bogota');

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Solo permitir método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener datos del formulario
$input = json_decode(file_get_contents('php://input'), true);

// Validar datos requeridos
if (!isset($input['name']) || !isset($input['phone']) || !isset($input['service']) || !isset($input['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Faltan campos requeridos']);
    exit;
}

$name = filter_var($input['name'], FILTER_SANITIZE_STRING);
$phone = filter_var($input['phone'], FILTER_SANITIZE_STRING);
$service = filter_var($input['service'], FILTER_SANITIZE_STRING);
$message = filter_var($input['message'], FILTER_SANITIZE_STRING);

// Validar email si se proporciona
$email = '';
if (isset($input['email']) && !empty($input['email'])) {
    $email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
    if (!$email) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Email inválido']);
        exit;
    }
}

// Obtener información del servidor
$server_name = $_SERVER['SERVER_NAME'] ?? 'rutaagil.com.co';
$client_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
$timestamp = date('Y-m-d H:i:s T'); // Incluir zona horaria

// Configuración de correo mejorada
$to = 'info@rutaagil.com.co';
$subject = 'Nueva Consulta de Cliente - ' . $service . ' - RUTA AGIL';

// Crear el mensaje HTML optimizado para evitar spam
$html_message = "
<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Consulta de Cliente - RUTA AGIL</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333333; 
            margin: 0; 
            padding: 0; 
            background-color: #f4f4f4; 
        }
        .container { 
            max-width: 600px; 
            margin: 20px auto; 
            background-color: #ffffff; 
            border-radius: 8px; 
            overflow: hidden; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
        }
        .header { 
            background: linear-gradient(135deg, #ff914d 0%, #e8823d 100%); 
            color: white; 
            padding: 30px 20px; 
            text-align: center; 
        }
        .header h1 { 
            margin: 0; 
            font-size: 24px; 
            font-weight: 600; 
        }
        .content { 
            padding: 30px 20px; 
        }
        .field { 
            margin-bottom: 20px; 
            padding: 15px; 
            background-color: #f8f9fa; 
            border-left: 4px solid #ff914d; 
            border-radius: 4px; 
        }
        .label { 
            font-weight: 600; 
            color: #0966e1; 
            display: block; 
            margin-bottom: 5px; 
        }
        .value { 
            color: #333333; 
            font-size: 16px; 
        }
        .service-badge { 
            background: linear-gradient(135deg, #0966e1 0%, #0854c7 100%); 
            color: white; 
            padding: 10px 20px; 
            border-radius: 25px; 
            display: inline-block; 
            font-weight: 600; 
            margin: 10px 0; 
        }
        .footer { 
            background-color: #333333; 
            color: #ffffff; 
            padding: 20px; 
            text-align: center; 
            font-size: 14px; 
        }
        .footer a { 
            color: #ff914d; 
            text-decoration: none; 
        }
        .info-box { 
            background-color: #e8f4fd; 
            padding: 15px; 
            border-radius: 6px; 
            margin: 20px 0; 
            border-left: 4px solid #0966e1; 
        }
        .timestamp { 
            color: #666666; 
            font-size: 14px; 
            font-style: italic; 
        }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Nueva Consulta de Cliente</h1>
            <p class='timestamp'>Recibida el $timestamp (Hora de Colombia)</p>
        </div>
        
        <div class='content'>
            <div class='info-box'>
                <strong>Tipo de Servicio Solicitado:</strong>
                <div class='service-badge'>$service</div>
            </div>
            
            <div class='field'>
                <span class='label'>Nombre del Cliente:</span>
                <div class='value'>$name</div>
            </div>
            
            <div class='field'>
                <span class='label'>Número de Contacto:</span>
                <div class='value'>$phone</div>
            </div>";

if (!empty($email)) {
    $html_message .= "
            <div class='field'>
                <span class='label'>Correo Electrónico:</span>
                <div class='value'>$email</div>
            </div>";
}

$html_message .= "
            <div class='field'>
                <span class='label'>Mensaje del Cliente:</span>
                <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
            </div>
            
            <div class='info-box'>
                <strong>Información Técnica:</strong><br>
                <small>
                    IP del Cliente: $client_ip<br>
                    Navegador: " . substr(htmlspecialchars($user_agent), 0, 100) . "<br>
                    Servidor: $server_name<br>
                    Zona horaria: America/Bogota (COT)
                </small>
            </div>
        </div>
        
        <div class='footer'>
            <p><strong>RUTA AGIL GROUP S.A.S</strong></p>
            <p>Servicios Profesionales de Mudanza y Logística</p>
            <p>Contacto directo: <a href='tel:+573015458611'>301 545 8611</a></p>
            <p>Este mensaje fue enviado desde el formulario oficial de contacto</p>
        </div>
    </div>
</body>
</html>
";

// Headers mejorados para máxima entregabilidad
$headers = array(
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: "RUTA AGIL - Formulario Web" <noreply@' . $server_name . '>',
    'Reply-To: ' . (!empty($email) ? $email : 'info@rutaagil.com.co'),
    'Return-Path: noreply@' . $server_name,
    'Sender: noreply@' . $server_name,
    'Organization: RUTA AGIL GROUP S.A.S',
    'X-Mailer: RUTA-AGIL-CONTACT-FORM/2.0',
    'X-Priority: 3 (Normal)',
    'X-MSMail-Priority: Normal',
    'Importance: Normal',
    'X-Originating-IP: ' . $client_ip,
    'X-Remote-IP: ' . $client_ip,
    'X-Forwarded-For: ' . $client_ip,
    'Message-ID: <' . time() . '.' . uniqid() . '@' . $server_name . '>',
    'Date: ' . date('r'),
    'X-Auto-Response-Suppress: All',
    'X-Entity-ID: RUTA-AGIL-' . time(),
    'List-Unsubscribe: <mailto:info@rutaagil.com.co?subject=Unsubscribe>',
    'List-Unsubscribe-Post: List-Unsubscribe=One-Click',
    'Precedence: bulk',
    'X-Spam-Status: No',
    'X-Authenticated-Sender: ' . $server_name
);

// Intentar envío con función mail() mejorada
$mail_sent = mail($to, $subject, $html_message, implode("\r\n", $headers));

if ($mail_sent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto. También puedes escribirnos al WhatsApp 301 545 8611.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Error al enviar mensaje. Por favor intenta nuevamente o contáctanos al 301 545 8611.'
    ]);
}
?>