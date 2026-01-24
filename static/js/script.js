document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("complaintForm");
  if (!form) return;

  form.addEventListener("submit", () => {
    console.log("Complaint submitted");
  });
});
