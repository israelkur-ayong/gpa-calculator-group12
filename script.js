// Array to store assignments
const assignments = [];

// Function to add an assignment
function addAssignment(name, grade) {
  assignments.push({ name, grade });
  updateGPA();
}

// Function to calculate GPA
function calculateGPA() {
  if (assignments.length === 0) return 0;
  const total = assignments.reduce((sum, a) => sum + a.grade, 0);
  return total / assignments.length;
}

// Function to update GPA display on the page
function updateGPA() {
  const gpa = calculateGPA();
  document.getElementById('gpaDisplay').textContent = `GPA: ${gpa.toFixed(2)}`;
}

