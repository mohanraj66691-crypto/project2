// ===============================
//  USER LOGIN SYSTEM (No Database)
// ===============================

// Dummy user data – you can add more users here
const users = [
    { email: "aathiharikrishnan@gmail.com", password: "71222403001" },
  { email: "abhirokanth@gmail.com", password: "71222403002" },
  { email: "abirami@gmail.com", password: "71222403003" },
  { email: "adaikalasamy@gmail.com", password: "71222403004" },
  { email: "adhimoolam@gmail.com", password: "71222403005" },
  { email: "akalya@gmail.com", password: "71222403006" },
  { email: "akash@gmail.com", password: "71222403007" },
  { email: "aravindh@gmail.com", password: "71222403008" },
  { email: "arulkumar@gmail.com", password: "71222403009" },
  { email: "ashika@gmail.com", password: "71222403010" },
  { email: "balakrishnan@gmail.com", password: "71222403011" },
  { email: "bavya@gmail.com", password: "71222403012" },
  { email: "bharath@gmail.com", password: "71222403013" },
  { email: "castrojenifer@gmail.com", password: "71222403014" },
  { email: "dhanalakshmi@gmail.com", password: "71222403015" },
  { email: "dhanush@gmail.com", password: "71222403016" },
  { email: "dharani@gmail.com", password: "71222403017" },
  { email: "dineshkaran@gmail.com", password: "71222403018" },
  { email: "ganesh@gmail.com", password: "71222403019" },
  { email: "hariharan@gmail.com", password: "71222403020" },
    { email: "harish@gmail.com", password: "71222403021" },
    { email: "jaiaravindhan@gmail.com", password: "71222403022" },
    { email: "kalaiarasan@gmail.com", password: "71222403023" },
    { email: "kathirmanikandan@gmail.com", password: "71222403024" },
    { email: "keerthika@gmail.com", password: "71222403025" },
    { email: "kishorekannan@gmail.com", password: "71222403026" },
    { email: "kishore@gmail.com", password: "71222403027" },
    { email: "kishore2@gmail.com", password: "71222403028" },
    { email: "kishoreselvakumar@gmail.com", password: "71222403029" },
    { email: "krishnaprakash@gmail.com", password: "71222403030" },
    { email: "maharakesh@gmail.com", password: "71222403031" },
    { email: "nahalakshmi@gmail.com", password: "71222403032" },
    { email: "mohanraj@gmail.com", password: "71222403034" },
    { email: "nughilan@gmail.com", password: "71222403035" },
    { email: "nadhiya@gmail.com", password: "71222403036" },
    { email: "nagoorsheikmydeen@gmail.com", password: "71222403037" },
    { email: "navaneetha@gmail.com", password: "71222403038" },
    { email: "navin@gmail.com", password: "71222403039" },
    { email: "poopathy@gmail.com", password: "71222403040" },
    { email: "rashiya@gmail.com", password: "71222403041" },
    { email: "rathankumar@gmail.com", password: "71222403042" },
    { email: "rathinanithi@gmail.com", password: "71222403043" },
    { email: "rithanya@gmail.com", password: "71222403044" },
    { email: "sakthivel@gmail.com", password: "71222403045" },
    { email: "sanju@gmail.com", password: "71222403046" },
    { email: "santhoshi@gmail.com", password: "71222403047" },
    { email: "sarathi@gmail.com", password: "71222403048" },
    { email: "sathish@gmail.com", password: "71222403049" },
    { email: "sathishkumar@gmail.com", password: "71222403050" },
    { email: "shiyam@gmail.com", password: "71222403052" },
    { email: "siva@gmail.com", password: "71222403053" },
    { email: "sivarajan@gmail.com", password: "71222403054" },
    { email: "sudhahar@gmail.com", password: "71222403055" },
    { email: "sureka@gmail.com", password: "71222403056" },
    { email: "susmitha@gmail.com", password: "71222403057" },
    { email: "thamaraiselvan@gmail.com", password: "71222403059" },
    { email: "veluthaieswari@gmail.com", password: "71222403060" },
    { email: "vishal@gmail.com", password: "71222403061" },
    { email: "yogeswaran@gmail.com", password: "71222403063" },
    { email: "adaikalasamy@gmail.com", password: "71222403004" },
    { email: "adhiimoolam@gmail.com", password: "71222403005" },
    { email: "akalya@gmail.com", password: "71222403006" },
    { email: "akash@gmail.com", password: "71222403007" },
    { email: "aravindh@gmail.com", password: "71222403008" },
    { email: "arulkumar@gmail.com", password: "71222403009" },
    { email: "ashika@gmail.com", password: "71222403010" },
    { email: "balakrishnan@gmail.com", password: "71222403011" },
    { email: "bavya@gmail.com", password: "71222403012" },
    { email: "bharath@gmail.com", password: "71222403013" },
    { email: "castrojenifer@gmail.com", password: "71222403014" },
    { email: "dhanalakshmi@gmail.com", password: "71222403015" },
    { email: "dhanush@gmail.com", password: "71222403016" },
    { email: "dharani@gmail.com", password: "71222403017" },
    { email: "dineshkaran@gmail.com", password: "71222403018" },
    { email: "ganesh@gmail.com", password: "71222403019" },
    { email: "hariharan@gmail.com", password: "71222403020" },
  ];
  
  // ========== LOGIN FUNCTION ==========
  function loginUser(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
  
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      // Save current user
      localStorage.setItem("loggedInUser", email);
  
      // Track visitor list
      const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
      if (!visitors.includes(email)) {
        visitors.push(email);
        localStorage.setItem("visitors", JSON.stringify(visitors));
      }
  
      // Success message
      alert("✅ Login successful!");
      window.location.href = "dashboard.html";  // Redirect to dashboard
    } else {
      error.textContent = "❌ Invalid email or password!";
    }
  }
  
  // ========== PAGE PROTECTION ==========
  window.onload = function() {
    const currentPage = window.location.pathname;
  
    // If we're on dashboard or other protected pages
    if (
      currentPage.includes("dashboard.html") ||
      currentPage.includes("second-year.html") ||
      currentPage.includes("downloads.html") ||
      currentPage.includes("visitors.html")
    ) {
      const user = localStorage.getItem("loggedInUser");
      if (!user) {
        // Not logged in → send back to login
        window.location.href = "index.html";
      } else {
        // Display logged-in user on the page if element exists
        const userDisplay = document.getElementById("userDisplay");
        if (userDisplay) userDisplay.textContent = user;
      }
    }
  
    // Show visitor list if we're on the visitors page
    if (currentPage.includes("visitors.html")) {
      const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
      const list = document.getElementById("visitorList");
      if (list) {
        list.innerHTML = "";
        visitors.forEach(v => {
          const li = document.createElement("li");
          li.textContent = v;
          list.appendChild(li);
        });
      }
    }
  };
  
  // ========== LOGOUT FUNCTION ==========
  function logout() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out!");

    window.location.href = "index.html";
  }
   