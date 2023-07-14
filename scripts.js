// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", (event) => {
    console.log("Window Loaded")
    addEventListeners()
})

function addEventListeners() {

    const takeOffButton = document.getElementById("takeoff")
    takeOffButton.addEventListener("click", (event) => {
        let userConfirm = window.confirm("Confirm that the shuttle is ready for takeoff")
        if(userConfirm) {
            doLiftoff();
        }
    })

    const landButton = document.getElementById("landing")
    landButton.addEventListener("click", (event) => {
        doLanding();
    })

    const abortButton = document.getElementById("missionAbort")
    abortButton.addEventListener("click", (event) => {
        let userConfirm = window.confirm("Confirm that you want to abort the mission")
        if(userConfirm){
            doAbort();
        }
    })

    const upButton = document.getElementById("up")
    const downButton = document.getElementById("down")
    const leftButton = document.getElementById("left")
    const rightButton = document.getElementById("right")
    const shuttleImg = document.getElementById("rocket")
    const shuttleHeight = document.getElementById("spaceShuttleHeight");



    upButton.addEventListener("click", (event) => {
        shuttleHeight.innerHTML += 10000;
    })

    downButton.addEventListener("click", (event) => {
        shuttleHeight.innerHTML -= 10000;
    })

    leftButton.addEventListener("click", (event) => {
        
    })

    rightButton.addEventListener("click", (event) => {
        
    })


}

function doLiftoff() {

    const shuttleStatus = document.getElementById("flightStatus");
    shuttleStatus.innerHTML = "Shuttle in flight";
    const shuttleBackground = document.getElementById("shuttleBackground");
    shuttleBackground.style.backgroundColor = "blue";
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerHTML = 10000;

}

function doLanding() {
    
    window.alert("The shuttle is landing. Landing gear engaged.");
    const shuttleStatus = document.getElementById("flightStatus");
    shuttleStatus.innerHTML = "The shuttle has landed";
    const shuttleBackground = document.getElementById("shuttleBackground");
    shuttleBackground.style.backgroundColor = "green";
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerHtml = 0;

}

function doAbort() {

    const shuttleStatus = document.getElementById("flightStatus");
    shuttleStatus.innerHTML = "Mission aborted";
    const shuttleBackground = document.getElementById("shuttleBackground");
    shuttleBackground.style.backgroundColor = "green";
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerHtml = 0;

}
