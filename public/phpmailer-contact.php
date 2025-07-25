<?php
require_once 'PHPMailer/src/Exception.php';
require_once 'PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['name']) || !isset($input['phone']) || !isset($input['service']) || !isset($input['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Faltan campos requeridos']);
    exit;
}

$name = filter_var($input['name'], FILTER_SANITIZE_STRING);
$phone = filter_var($input['phone'], FILTER_SANITIZE_STRING);
$service = filter_var($input['service'], FILTER_SANITIZE_STRING);
$message = filter_var($input['message'], FILTER_SANITIZE_STRING);

$email = '';
if (isset($input['email']) && !empty($input['email'])) {
    $email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
    if (!$email) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Email inválido']);
        exit;
    }
}


try {
    $mail = new PHPMailer(true);

    // Configuración del servidor SMTP de Hostinger
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com'; // Servidor SMTP de Hostinger
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@rutaagil.com.co'; // Tu email
    $mail->Password   = 'TU_PASSWORD_AQUI';     // Tu contraseña de email
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    // Configuración del remitente
    $mail->setFrom('info@rutaagil.com.co', 'RUTA AGIL - Formulario Web');
    $mail->addAddress('info@rutaagil.com.co', 'RUTA AGIL');
    
    if (!empty($email)) {
        $mail->addReplyTo($email, $name);
    }

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = 'Nueva Consulta de Cliente - ' . $service . ' - RUTA AGIL';
    
    $timestamp = date('Y-m-d H:i:s');
    $client_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    
    $mail->Body = "
    <!DOCTYPE html>
    <html lang='es'>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #ff914d; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; padding: 10px; background: white; border-left: 4px solid #0966e1; }
            .label { font-weight: bold; color: #0966e1; }
            .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Nueva Consulta de Cliente - RUTA AGIL</h2>
                <p>Recibida el $timestamp</p>
            </div>
            <div class='content'>
                <div class='field'>
                    <span class='label'>Servicio:</span> $service
                </div>
                <div class='field'>
                    <span class='label'>Nombre:</span> $name
                </div>
                <div class='field'>
                    <span class='label'>Teléfono:</span> $phone
                </div>";
    
    if (!empty($email)) {
        $mail->Body .= "
                <div class='field'>
                    <span class='label'>Email:</span> $email
                </div>";
    }
    
    $mail->Body .= "
                <div class='field'>
                    <span class='label'>Mensaje:</span><br>" . nl2br(htmlspecialchars($message)) . "
                </div>
                <div class='field'>
                    <small>IP: $client_ip</small>
                </div>
            </div>
            <div class='footer'>
                <p><strong>RUTA AGIL GROUP S.A.S</strong></p>
                <p>Contacto: 301 545 8611</p>
            </div>
        </div>
    </body>
    </html>";

    $mail->send();
    echo json_encode([
        'success' => true, 
        'message' => 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Error al enviar mensaje: ' . $mail->ErrorInfo
    ]);
}

?>