export default function handler(request, response) {
  response.status(200).json({
    name: "rami",
    age: 85,
    isValid: true,
  });
}
