const statusEl = document.getElementById('status');

function updateStatus(){
    if (navigator.onLine){
        statusEl.textContent = "You are online";
        statusEl.className = "online change"
    }
    else {
        statusEl.textContent = "You are offline";
        statusEl.className = "offline change"
    }
    setTimeout( () => statusEl.classList.remove("change"), 200);
}

    updateStatus();

    window.addEventListener("offline", () =>{
        alert("❌ You are offline! Please check your internet connection.");
        updateStatus();
    });
    window.addEventListener("online", () =>{
        alert("✅ You are back online.");
        updateStatus();
    });


    