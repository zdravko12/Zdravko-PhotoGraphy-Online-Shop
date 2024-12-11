<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

// Handle OPTIONS request (for CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Read JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate input
if (empty($input['username']) || empty($input['email']) || empty($input['password'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit;
}

// Extract input values
$username = $input['username'];
$email = $input['email'];
$plainPassword = $input['password']; // Store the plain text password

// Database connection
$conn = new mysqli("localhost", "root", "", "signup");
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed.']);
    exit;
}

// Check for existing user
$stmt = $conn->prepare("SELECT * FROM formsave WHERE username = ? OR email = ?");
$stmt->bind_param("ss", $username, $email);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    http_response_code(409);
    echo json_encode(['status' => 'error', 'message' => 'Username or email already exists.']);
    exit;
}

// Insert user into the `formsave` table
$stmt = $conn->prepare("INSERT INTO formsave (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $plainPassword);
if ($stmt->execute()) {
    http_response_code(201);
    echo json_encode(['status' => 'success', 'message' => 'Registration successful.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to register user.']);
}

$stmt->close();
$conn->close();
?>