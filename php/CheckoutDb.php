<?php
// Set response headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Error reporting for debugging (remove in production)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Suppress unnecessary output
ob_start();

// Database configuration
$host = 'localhost'; // Your database host
$username = 'root'; // Your database username
$password = ''; // Your database password
$dbname = 'checkout'; // Your database name

// Connect to the database
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]);
    exit();
}

// Get raw POST input
$input = file_get_contents('php://input');
if (!$input) {
    echo json_encode(['success' => false, 'message' => 'No input received']);
    exit();
}

// Decode JSON input
$data = json_decode($input, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input']);
    exit();
}

// Validate received data
$personalDetails = $data['personalDetails'] ?? null;
$paymentMethod = $data['paymentMethod'] ?? null;
$cartItems = $data['cartItems'] ?? null;

if (!$personalDetails || !$paymentMethod || !$cartItems) {
    echo json_encode(['success' => false, 'message' => 'Missing required order details']);
    exit();
}

// Extract and sanitize input data
$firstName = $conn->real_escape_string($personalDetails['firstName'] ?? '');
$lastName = $conn->real_escape_string($personalDetails['lastName'] ?? '');
$email = $conn->real_escape_string($personalDetails['email'] ?? '');
$phone = $conn->real_escape_string($personalDetails['phone'] ?? '');
$companyName = $conn->real_escape_string($personalDetails['companyName'] ?? '');
$address = $conn->real_escape_string($personalDetails['address'] ?? '');
$stateCountry = $conn->real_escape_string($personalDetails['stateCountry'] ?? '');
$postalZip = $conn->real_escape_string($personalDetails['postalZip'] ?? '');
$country = $conn->real_escape_string($personalDetails['country'] ?? '');
$orderNotes = $conn->real_escape_string($personalDetails['orderNotes'] ?? '');
$paymentMethod = $conn->real_escape_string($paymentMethod);

// Calculate order total from cart items
$orderTotal = 0;
foreach ($cartItems as $item) {
    $orderTotal += $item['price'] * $item['quantity']; // Assuming each item has a price and quantity
}

// Ensure cartItems is valid JSON
$cartItemsJson = json_encode($cartItems);
if ($cartItemsJson === false) {
    echo json_encode(['success' => false, 'message' => 'Invalid cart items data']);
    exit();
}

// Prepare SQL query
$sql = "INSERT INTO formsavecheckout (
    first_name, last_name, email, phone, company_name, address, state_country, postal_zip, country, order_notes, payment_method, cart_items, order_total
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    echo json_encode(['success' => false, 'message' => 'Failed to prepare SQL statement']);
    exit();
}

// Bind parameters
$stmt->bind_param(
    'sssssssssssss',
    $firstName,
    $lastName,
    $email,
    $phone,
    $companyName,
    $address,
    $stateCountry,
    $postalZip,
    $country,
    $orderNotes,
    $paymentMethod,
    $cartItemsJson,
    $orderTotal
);

// Execute the query
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Order placed successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to place the order: ' . $stmt->error]);
}

// Close resources
$stmt->close();
$conn->close();
ob_end_flush();
?>