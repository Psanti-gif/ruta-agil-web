<?php
/**
 * ARCHIVO DE PRUEBA PARA PHPMAILER
 * Usar para diagnosticar problemas antes de activar en el formulario
 */

// Importar clases ANTES de cualquier salida
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: text/html; charset=UTF-8');

echo "<h2>🔧 DIAGNÓSTICO DE PHPMAILER</h2>";

// Mostrar información del servidor
echo "<h3>📊 Información del Servidor:</h3>";
echo "PHP Version: " . phpversion() . "<br>";
echo "Directorio actual: " . getcwd() . "<br>";
echo "Servidor: " . $_SERVER['SERVER_SOFTWARE'] . "<br><br>";

// Buscar PHPMailer
echo "<h3>🔍 Buscando PHPMailer:</h3>";

$phpmailer_paths = [
    'PHPMailer/src/PHPMailer.php',
    'phpmailer/src/PHPMailer.php',
    'vendor/phpmailer/phpmailer/src/PHPMailer.php',
    '../PHPMailer/src/PHPMailer.php',
    'PHPMailer-master/src/PHPMailer.php',
    'lib/PHPMailer/src/PHPMailer.php',
    'libraries/PHPMailer/src/PHPMailer.php',
    'includes/PHPMailer/src/PHPMailer.php',
    'mail/PHPMailer/src/PHPMailer.php',
    'email/PHPMailer/src/PHPMailer.php'
];

$phpmailer_found = false;
$phpmailer_path = '';

foreach ($phpmailer_paths as $path) {
    if (file_exists($path)) {
        echo "✅ ENCONTRADO: $path<br>";
        $phpmailer_found = true;
        $phpmailer_path = dirname($path);
        break;
    } else {
        echo "❌ No encontrado: $path<br>";
    }
}

if (!$phpmailer_found) {
    echo "<br><strong>❌ PHPMailer NO encontrado en ninguna ruta.</strong><br>";
    
    // Mostrar contenido del directorio actual
    echo "<h3>📁 Archivos en directorio actual:</h3>";
    $files = scandir('.');
    foreach ($files as $file) {
        if ($file != '.' && $file != '..') {
            echo "📄 $file<br>";
        }
    }
    
    echo "<br><h3>💡 Soluciones:</h3>";
    echo "1. Verificar que PHPMailer esté subido correctamente<br>";
    echo "2. Revisar que la estructura de carpetas sea: PHPMailer/src/PHPMailer.php<br>";
    echo "3. Verificar permisos de archivos<br>";
    
} else {
    echo "<br><strong>✅ PHPMailer encontrado en: $phpmailer_path</strong><br>";
    
    // Intentar cargar PHPMailer
    try {
        require_once $phpmailer_path . '/Exception.php';
        require_once $phpmailer_path . '/PHPMailer.php';
        require_once $phpmailer_path . '/SMTP.php';
        
        echo "<br>✅ Archivos de PHPMailer cargados correctamente<br>";
        
        // Crear instancia de PHPMailer
        $mail = new PHPMailer(true);
        echo "✅ Instancia de PHPMailer creada correctamente<br>";
        
        // Probar configuración SMTP (sin enviar)
        echo "<br><h3>🔧 Probando configuración SMTP:</h3>";
        
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@rutaagil.com.co';
        $mail->Password = '4Dm1n123**'; // ⚠️ CAMBIAR POR CONTRASEÑA REAL
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 465;
        
        echo "✅ Configuración SMTP establecida<br>";
        echo "<br><strong>🎯 PHPMailer está listo para usar!</strong><br>";
        echo "<br><h3>📋 Próximos pasos:</h3>";
        echo "1. Cambiar 'TU_PASSWORD_AQUI' por la contraseña real de info@rutaagil.com.co<br>";
        echo "2. Activar PHPMailer en el formulario de contacto<br>";
        echo "3. Los correos llegarán directo a la bandeja de entrada<br>";
        
    } catch (Exception $e) {
        echo "<br>❌ Error al cargar PHPMailer: " . $e->getMessage() . "<br>";
    }
}

echo "<br><hr>";
echo "<p><strong>📧 Estado actual:</strong> El formulario usa contact.php (funcional pero puede ir a spam)</p>";
echo "<p><strong>🎯 Objetivo:</strong> Activar PHPMailer para evitar spam completamente</p>";
?>
