<?php
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

// Obtener información del servidor para headers mejorados
$server_name = $_SERVER['SERVER_NAME'] ?? 'rutaagil.com.co';
$client_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
$timestamp = date('Y-m-d H:i:s');

// Configuración de correo
$to = 'info@rutaagil.com.co';
$subject = 'Consulta de servicio: ' . $service . ' - RUTA AGIL';

// Crear el mensaje HTML
$html_message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Consulta de Cliente - RUTA AGIL</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #ff914d; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0966e1; }
        .footer { background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
        .info-box { background-color: #e8f4fd; padding: 10px; border-left: 4px solid #0966e1; margin: 15px 0; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Consulta de Cliente - RUTA AGIL GROUP S.A.S</h2>
            <p>Solicitud recibida el $timestamp</p>
        </div>
        <div class='content'>
            <div class='info-box'>
                <strong>Tipo de Servicio Solicitado:</strong> $service
            </div>
            <div class='field'>
                <span class='label'>Nombre:</span> $name
            </div>
            <div class='field'>
                <span class='label'>Teléfono:</span> $phone
            </div>";

if (!empty($email)) {
    $html_message .= "
            <div class='field'>
                <span class='label'>Email:</span> $email
            </div>";
}

$html_message .= "
            <div class='field'>
                <span class='label'>Mensaje:</span><br>
                " . nl2br($message) . "
            </div>
            <div class='info-box'>
                <small>
                    <strong>Información técnica:</strong><br>
                    IP: $client_ip<br>
                    Navegador: " . substr($user_agent, 0, 100) . "
                </small>
            </div>
        </div>
        <div class='footer'>
            <p><strong>RUTA AGIL GROUP S.A.S</strong> - Servicios de Mudanza</p>
            <p>Mensaje enviado desde formulario web oficial</p>
            <p>Contacto directo: 301 545 8611</p>
        </div>
    </div>
</body>
</html>
";

// Headers mejorados para evitar spam
$headers = array(
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: "RUTA AGIL Formulario Web" <noreply@' . $server_name . '>',
    'Reply-To: ' . (!empty($email) ? $email : 'info@rutaagil.com.co'),
    'Return-Path: noreply@' . $server_name,
    'X-Mailer: RUTA-AGIL-WEB/1.0',
    'X-Priority: 3',
    'X-MSMail-Priority: Normal',
    'X-Originating-IP: ' . $client_ip,
    'Message-ID: <' . time() . '.' . uniqid() . '@' . $server_name . '>',
    'Date: ' . date('r'),
    'List-Unsubscribe: <mailto:info@rutaagil.com.co?subject=Unsubscribe>'
);

// Enviar el correo
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