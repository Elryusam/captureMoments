<?php
include('conexion.php');
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Preparar la consulta INSERT
$stmt = $conexion->prepare("INSERT INTO datos_contacto (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nombre, $email, $telefono, $mensaje);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Datos guardados correctamente.";
} else {
    echo "Error al guardar los datos: " . $stmt->error;
}

// Cerrar la conexión y liberar recursos
$stmt->close();
$conexion->close();
header("Refresh: 5; URL=contacto.html");
exit;

?>