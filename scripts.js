(function () {
"use strict";
    
    document.addEventListener('DOMContentLoaded', function() {
        
        document.getElementById('heroform').addEventListener('submit', calculateHero);
        
        function calculateHero(event) {
            event.preventDefault();
        
            
            if (document.getElementById('bmonth').value == "Select month") {
                console.log('works1')
                
                alert('Please select the month of your birthday.');
            } else {
                var monthValue = Number(document.getElementById('bmonth').value);
            }
            
            
            if (document.getElementById('bday').value == "Select day") {
                console.log('works2')
                
                alert('Please select the day of your birthday.')
            } else {
                var dayValue = Number(document.getElementById('bday').value);
            }
            
            
            if (document.getElementById('name-input').value.length == 0) {
                console.log('works3')
                
                alert('Please enter your first name.')
            } else {
                var nameLength = document.getElementById('name-input').value.length;
            }
            
            var totalValue = nameLength + dayValue + monthValue;
            
          
            if (totalValue > 0) {
                document.getElementById('ironman').className=""
            } else if (totalValue > 15) {
                document.getElementById('thor').className=""
            } else if (totalValue > 20){
                document.getElementById('batman').className=""
            } else if (totalValue > 35){
                document.getElementById('captainamerica').className=""
            } else if (totalValue > 30){
                document.getElementById('flash').className=""
            } else if (totalValue > 35){
                document.getElementById('greenlantern').className=""
            } else if (totalValue > 40){
                document.getElementById('hulk').className=""
            } else if (totalValue > 48){
                document.getElementById('superman').className=""
            } else if (totalValue > 56){
                document.getElementById('wonderwoman').className=""
            }
    }})
    
})();