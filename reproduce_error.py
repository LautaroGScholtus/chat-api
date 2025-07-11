import requests

url = "http://localhost:3000/messages"

# Sample data to send in the POST request
payload = {
    "message": "Hello, World!",
    "username": "test_user"
}

# Send POST request
response = requests.post(url, json=payload)

# Check the status code
print(f"Status Code: {response.status_code}")

# Expecting 201, but should be 200 according to the PR description
assert response.status_code == 201, "Expected status code 201, but got {response.status_code}"