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

// Configuración de correo
$to = 'info@rutaagil.com.co';
$subject = 'Nueva consulta desde sitio web RUTA ÁGIL - ' . $service;

// Crear el mensaje HTML
$html_message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #ff914d; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0966e1; }
        .footer { background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Nueva Consulta - RUTA ÁGIL GROUP S.A.S</h2>
        </div>
        <div class='content'>
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
                <span class='label'>Tipo de Servicio:</span> $service
            </div>
            <div class='field'>
                <span class='label'>Mensaje:</span><br>
                " . nl2br($message) . "
            </div>
        </div>
        <div class='footer'>
            <p>© 2025 RUTA ÁGIL GROUP S.A.S - Todos los derechos reservados</p>
            <p>Este mensaje fue enviado desde el formulario de contacto del sitio web</p>
            <p>Responder directamente a este correo o contactar al 301 545 8611</p>
        </div>
    </div>
</body>
</html>
";

// Headers para el correo
$headers = array(
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: noreply@rutaagil.com.co',
    'Reply-To: ' . (!empty($email) ? $email : $phone),
    'X-Mailer: PHP/' . phpversion()
);

// Enviar el correo
$mail_sent = mail($to, $subject, $html_message, implode("\r\n", $headers));

if ($mail_sent) {
    echo json_encode([
        'success' => true, 
        'message' => '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto. También puedes escribirnos al WhatsApp 301 545 8611.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente al 301 545 8611.'
    ]);
}
?>