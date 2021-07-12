function ShowHide(toggle) {
    var info = document.getElementById("info");
    info.style.display = toggle.checked ? "none" : "block";
}

// Add Motherboard items
function AddMotherboard(Add){
    var addToCartButtons = document.getElementsByClassName('Add')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', MotherboardToCartClicked)
    }
}
function MotherboardToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Name')[0].innerText
    localStorage.setItem('Motherboard', title)
    console.log(title)
}
// Add CPU items
function AddCPU(Add){
    var addToCartButtons = document.getElementsByClassName('Add')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', CPUToCartClicked)
    }
}
function CPUToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Name')[0].innerText
    localStorage.setItem('CPU', title)
    console.log(title)
}
// Add GPU items
function AddGPU(Add){
    var addToCartButtons = document.getElementsByClassName('Add')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', GPUToCartClicked)
    }
}
function GPUToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Name')[0].innerText
    localStorage.setItem('GPU', title)
    console.log(title)
}
// Add Ram items
function AddRam(Add){
    var addToCartButtons = document.getElementsByClassName('Add')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', RamToCartClicked)
    }
}
function RamToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Name')[0].innerText
    localStorage.setItem('Ram', title)
    console.log(title)
}
// Add Storage items
function AddStorage(Add){
    var addToCartButtons = document.getElementsByClassName('Add')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', StorageToCartClicked)
    }
}
function StorageToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Name')[0].innerText
    localStorage.setItem('Storage', title)
    console.log(title)
}
// Add Case items
function AddCase(Add){
    var addToCartButtons = document.getElementsByClassName('Add')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', CaseToCartClicked)
    }
}
function CaseToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Name')[0].innerText
    localStorage.setItem('Case', title)
    console.log(title)
}
// Add Fan items
function AddFan(Add){
    var addToCartButtons = document.getElementsByClassName('Add')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', FanToCartClicked)
    }
}
function FanToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Name')[0].innerText
    localStorage.setItem('Fan', title)
    console.log(title)
}
// Add Battery items
function AddBattery(Add){
    var addToCartButtons = document.getElementsByClassName('Add')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', BatteryToCartClicked)
    }
}
function BatteryToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Name')[0].innerText
    localStorage.setItem('Battery', title)
    console.log(title)
}
// Add Monitor items
function AddMonitor(Add){
    var addToCartButtons = document.getElementsByClassName('Add')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', MonitorToCartClicked)
    }
}
function MonitorToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('Name')[0].innerText
    localStorage.setItem('Monitor', title)
    console.log(title)
}

//Update table for build list
function updateTable(){
    document.getElementById("Motherboard").innerText = localStorage.Motherboard;
    document.getElementById("CPU").innerText = localStorage.CPU;
    document.getElementById("GPU").innerText = localStorage.GPU;
    document.getElementById("Ram").innerText = localStorage.Ram;
    document.getElementById("Storage").innerText = localStorage.Storage;
    document.getElementById("Case").innerText = localStorage.Case;
    document.getElementById("Fan").innerText = localStorage.Fan;
    document.getElementById("Battery").innerText = localStorage.Battery;
    document.getElementById("Monitor").innerText = localStorage.Monitor;

}

// Clear Your Build Button
function clearLocal() {
    if (confirm('Are you sure you want to clear your build list on this page?')) {
        localStorage.setItem("Motherboard", "");
        localStorage.setItem("CPU", "");
        localStorage.setItem("GPU", "");
        localStorage.setItem("Ram", "");
        localStorage.setItem("Storage", "");
        localStorage.setItem("Case", "");
        localStorage.setItem("Fan", "");
        localStorage.setItem("Battery", "");
        localStorage.setItem("Monitor", "");


        document.getElementById('Motherboard').innerHTML = "";
        document.getElementById('CPU').innerHTML = "";
        document.getElementById('GPU').innerHTML = "";
        document.getElementById('Ram').innerHTML = "";
        document.getElementById('Storage').innerHTML = "";
        document.getElementById('Case').innerHTML = "";
        document.getElementById('Fan').innerHTML = "";
        document.getElementById('Battery').innerHTML = "";
        document.getElementById('Monitor').innerHTML = "";

        alert('Build List cleared');
    }
}