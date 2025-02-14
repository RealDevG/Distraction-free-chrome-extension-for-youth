console.log("im content script")
document.addEventListener("DOMContentLoaded", function () {
    
    document.body.innerHTML = "";

    
    const warningBox = document.createElement("div");
    warningBox.innerHTML = `
        <div style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: black;
            color: white;
            text-align: center;
            font-size: 24px;
            font-family: Arial, sans-serif;
        ">
            <div style="background: red; padding: 20px; border-radius: 10px;">
                ⚠️ Warning: This website is blocked to help you stay focused! 
            </div>
        </div>
    `;

    
    document.body.appendChild(warningBox);
});

