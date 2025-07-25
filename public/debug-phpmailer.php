<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>🔧 DIAGNÓSTICO DETALLADO DE PHPMAILER</h2>";

// Información básica del servidor
echo "<h3>📊 Información del Servidor:</h3>";
echo "PHP Version: " . phpversion() . "<br>";
echo "Directorio actual: " . getcwd() . "<br>";
echo "Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "<br>";
echo "Script actual: " . __FILE__ . "<br><br>";

// Verificar si PHPMailer existe
echo "<h3>🔍 Verificando PHPMailer:</h3>";

$phpmailer_paths = [
    'PHPMailer/src/PHPMailer.php',
    './PHPMailer/src/PHPMailer.php',
    'phpmailer/src/PHPMailer.php',
    'vendor/phpmailer/phpmailer/src/PHPMailer.php',
    '../PHPMailer/src/PHPMailer.php'
];

$found = false;
$working_path = '';

foreach ($phpmailer_paths as $path) {
    if (file_exists($path)) {
        echo "✅ ENCONTRADO: $path<br>";
        $found = true;
        $working_path = dirname($path);
        break;
    } else {
        echo "❌ No encontrado: $path<br>";
    }
}

if (!$found) {
    echo "<br><strong style='color: red;'>❌ PHPMailer NO encontrado</strong><br>";
    
    // Mostrar contenido del directorio
    echo "<h3>📁 Archivos en directorio actual:</h3>";
    $files = scandir('.');
    foreach ($files as $file) {
        if ($file != '.' && $file != '..') {
            $type = is_dir($file) ? '📁' : '📄';
            echo "$type $file<br>";
        }
    }
} else {
    echo "<br><strong style='color: green;'>✅ PHPMailer encontrado en: $working_path</strong><br>";
    
    // Intentar cargar PHPMailer
    echo "<h3>🔧 Probando carga de PHPMailer:</h3>";
    
    try {
        require_once $working_path . '/Exception.php';
        echo "✅ Exception.php cargado<br>";
        
        require_once $working_path . '/PHPMailer.php';
        echo "✅ PHPMailer.php cargado<br>";
        
        require_once $working_path . '/SMTP.php';
        echo "✅ SMTP.php cargado<br>";

        
        $mail = new PHPMailer(true);
        echo "✅ Instancia de PHPMailer creada exitosamente<br>";
        
        echo "<br><strong style='color: green;'>🎯 PHPMailer está completamente funcional!</strong><br>";
        
    } catch (Exception $e) {
        echo "<br><strong style='color: red;'>❌ Error al cargar PHPMailer:</strong><br>";
        echo "Error: " . $e->getMessage() . "<br>";
        echo "Archivo: " . $e->getFile() . "<br>";
        echo "Línea: " . $e->getLine() . "<br>";
    }
}

echo "<hr>";
echo "<h3>💡 Próximos pasos:</h3>";
if ($found) {
    echo "1. PHPMailer está instalado correctamente<br>";
    echo "2. El problema puede estar en la configuración SMTP<br>";
    echo "3. Verificar credenciales de email<br>";
} else {
    echo "1. Verificar que PHPMailer esté subido correctamente<br>";
    echo "2. Asegurar que la estructura sea: PHPMailer/src/PHPMailer.php<br>";
    echo "3. Verificar permisos de archivos<br>";
}
?>