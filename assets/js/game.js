var playerName =window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // subtract the value of 'playerAttack' from the value of 'enemyHealth and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the `playerHealth` variable
    playerHealth = playerHealth - enemyAttack;
    
    // log a resluting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " helth remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health ledt.");
    }

};

var playerHealth = 100;

if (playerHealth === 0) {
  console.log("This will not run.");
} 
else {
  console.log("This will run instead.");
}



fight();

// fight();