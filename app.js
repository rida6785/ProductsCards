document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("searchInput").value.toLowerCase();

  if (input.includes("home")) {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  } else if (input.includes("men")) {
    document.getElementById("men").scrollIntoView({ behavior: "smooth" });
  } else if (input.includes("women")) {
    document.getElementById("women").scrollIntoView({ behavior: "smooth" });
  } else if (input.includes("kids")) {
    document.getElementById("kids").scrollIntoView({ behavior: "smooth" });
  } else if (input.includes("contact")) {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Section not found!");
  }
});
