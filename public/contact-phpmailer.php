<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


$phpmailer_paths = [
    'PHPMailer/src/PHPMailer.php',
    'phpmailer/src/PHPMailer.php',
    'vendor/phpmailer/phpmailer/src/PHPMailer.php',
    '../PHPMailer/src/PHPMailer.php'
];

$phpmailer_found = false;
$phpmailer_path = '';

foreach ($phpmailer_paths as $path) {
    if (file_exists($path)) {
        $phpmailer_found = true;
        $phpmailer_path = dirname($path);
        break;
    }
}

if (!$phpmailer_found) {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'PHPMailer no encontrado. Rutas verificadas: ' . implode(', ', $phpmailer_paths)
    ]);
    exit;
}

require_once $phpmailer_path . '/Exception.php';
require_once $phpmailer_path . '/PHPMailer.php';
require_once $phpmailer_path . '/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}


$raw_input = file_get_contents('php://input');
$input = json_decode($raw_input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Error en formato JSON: ' . json_last_error_msg()
    ]);
    exit;
}

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

 
    
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';         
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@rutaagil.com.co';         
    $mail->Password   = '4Dm1n123**';   
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';
    

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );


    $mail->setFrom('info@rutaagil.com.co', 'RUTA AGIL - Formulario Web');
    

    $mail->addAddress('info@rutaagil.com.co', 'RUTA AGIL');
    

    if (!empty($email)) {
        $mail->addReplyTo($email, $name);
    }


    $mail->isHTML(true);
    $mail->Subject = 'Nueva Consulta de Cliente - ' . $service . ' - RUTA AGIL';
    
 
    $timestamp = date('Y-m-d H:i:s');
    $client_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    
   
    
    $mail->Body = "
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
                <p class='timestamp'>Recibida el $timestamp</p>
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
        $mail->Body .= "
                <div class='field'>
                    <span class='label'>Correo Electrónico:</span>
                    <div class='value'>$email</div>
                </div>";
    }

    $mail->Body .= "
                <div class='field'>
                    <span class='label'>Mensaje del Cliente:</span>
                    <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
                </div>
                
                <div class='info-box'>
                    <strong>Información Técnica:</strong><br>
                    <small>
                        IP del Cliente: $client_ip<br>
                        Navegador: " . substr(htmlspecialchars($user_agent), 0, 100) . "<br>
                        Enviado vía: PHPMailer SMTP
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
    </html>";


    $mail->AltBody = "
    Nueva Consulta de Cliente - RUTA AGIL
    
    Servicio: $service
    Nombre: $name
    Teléfono: $phone" . 
    (!empty($email) ? "\nEmail: $email" : "") . "
    
    Mensaje:
    $message
    
    Información técnica:
    IP: $client_ip
    Fecha: $timestamp
    ";


    
    $mail->send();
    
    echo json_encode([
        'success' => true, 
        'message' => 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto. También puedes escribirnos al WhatsApp 301 545 8611.'
    ]);

} catch (Exception $e) {
    error_log("Error PHPMailer: " . $mail->ErrorInfo);
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Error al enviar mensaje. Por favor intenta nuevamente o contáctanos al 301 545 8611. Error técnico: ' . $mail->ErrorInfo
    ]);
}
?>