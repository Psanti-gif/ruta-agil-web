<?php

error_reporting(0);
ini_set('display_errors', 0);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Función para enviar respuesta JSON y terminar ejecución
function sendJsonResponse($success, $message, $debug_info = null) {
    $response = ['success' => $success, 'message' => $message];
    if ($debug_info) {
        $response['debug_info'] = $debug_info;
    }
    echo json_encode($response);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    sendJsonResponse(false, 'Método no permitido');
}

// Cargar PHPMailer (sabemos que está en PHPMailer/src/)
try {
    require_once 'PHPMailer/src/Exception.php';
    require_once 'PHPMailer/src/PHPMailer.php';
    require_once 'PHPMailer/src/SMTP.php';
} catch (Exception $e) {
    http_response_code(500);
    sendJsonResponse(false, 'Error al cargar PHPMailer: ' . $e->getMessage());
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Obtener y validar datos de entrada
$raw_input = file_get_contents('php://input');
if (empty($raw_input)) {
    http_response_code(400);
    sendJsonResponse(false, 'No se recibieron datos');
}

$input = json_decode($raw_input, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    sendJsonResponse(false, 'Error en formato JSON: ' . json_last_error_msg());
}

// Validar campos requeridos
$required_fields = ['name', 'phone', 'service', 'message'];
foreach ($required_fields as $field) {
    if (!isset($input[$field]) || empty(trim($input[$field]))) {
        http_response_code(400);
        sendJsonResponse(false, "Campo requerido faltante: $field");
    }
}

$name = filter_var(trim($input['name']), FILTER_SANITIZE_STRING);
$phone = filter_var(trim($input['phone']), FILTER_SANITIZE_STRING);
$service = filter_var(trim($input['service']), FILTER_SANITIZE_STRING);
$message = filter_var(trim($input['message']), FILTER_SANITIZE_STRING);

$email = '';
if (isset($input['email']) && !empty(trim($input['email']))) {
    $email = filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL);
    if (!$email) {
        http_response_code(400);
        sendJsonResponse(false, 'Email inválido');
    }
}


try {
    $mail = new PHPMailer(true);

 
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@rutaagil.com.co';
    $mail->Password   = '4Dm1n123**'; 
    

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
    $mail->Port       = 465;
 
    
    $mail->CharSet    = 'UTF-8';
    $mail->SMTPDebug  = 0;
    
    // Configuración adicional optimizada para ambos puertos
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
            'crypto_method' => STREAM_CRYPTO_METHOD_TLS_CLIENT
        )
    );
    
    $mail->Timeout = 30; // Timeout optimizado

    // ==========================================
    // 📧 CONFIGURACIÓN DEL CORREO
    // ==========================================
    
    // Remitente (debe coincidir con el email SMTP)
    $mail->setFrom('info@rutaagil.com.co', 'RUTA AGIL - Formulario Web');
    
    // Destinatario
    $mail->addAddress('info@rutaagil.com.co', 'RUTA AGIL');
    
    // Reply-To (si el cliente proporcionó email)
    if (!empty($email)) {
        $mail->addReplyTo($email, $name);
    }

    // Configuración del mensaje
    $mail->isHTML(true);
    $mail->Subject = 'Nueva Consulta de Cliente - ' . $service . ' - RUTA AGIL';
    
    // Información adicional
    $timestamp = date('Y-m-d H:i:s');
    $client_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    
    // ==========================================
    // 🎨 CONTENIDO HTML PROFESIONAL
    // ==========================================
    
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

    // Versión texto plano como respaldo
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

    // ==========================================
    // 🚀 ENVIAR CORREO
    // ==========================================
    
    $mail->send();
    
    sendJsonResponse(true, 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto. También puedes escribirnos al WhatsApp 301 545 8611.');

} catch (Exception $e) {
    error_log("Error PHPMailer: " . $mail->ErrorInfo);
    http_response_code(500);
    sendJsonResponse(false, 'Error al enviar mensaje. Por favor intenta nuevamente o contáctanos al 301 545 8611. Error técnico: ' . $mail->ErrorInfo);
}
?>