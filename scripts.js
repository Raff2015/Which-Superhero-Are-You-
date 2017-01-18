(function () {
"use strict";
    
    document.addEventListener('DOMContentLoaded', function() {
        
        document.getElementById('heroform').addEventListener('submit', calculateHero);
        
        function calculateHero(event) {
            event.preventDefault();
            
            
             var nameLength = document.getElementById('name-input').value.length,
                monthValue = Number(document.getElementById('bmonth').value),
                dayValue = Number(document.getElementById('bday').value),
                totalValue = nameLength + monthValue + dayValue; 
            
            if (document.getElementById('bmonth').value === 'Select month') {
                
                alert('Please select the month of your birthday.');
                
                monthValue = 0;
                
                document.getElementById('bmonth').focus();
            }
            
            else if (document.getElementById('bday').value === 'Select day') {
                alert('Please select the day of your birthday.')
                
                dayValue = 0;
                
                document.getElementById('bday').focus();
            } 
            
          
            if (totalValue < 15) {
                document.getElementById('ironman').className=""
            } else if (15 < totalValue < 20) {
                document.getElementById('thor').className=""
            } else if (20 < totalValue < 25){
                document.getElementById('batman').className=""
            } else if (25 < totalValue < 30){
                document.getElementById('captainamerica').className=""
            } else if (30 < totalValue < 35){
                document.getElementById('flash').className=""
            } else if (35 < totalValue < 40){
                document.getElementById('greenlantern').className=""
            } else if (40 < totalValue < 48){
                document.getElementById('hulk').className=""
            } else if (48 < totalValue < 56){
                document.getElementById('superman').className=""
            } else if (totalValue > 56){
                document.getElementById('wonderwoman').className=""
            } else if (totalValue == 0){
                alert('Please enter your information')
            }
            
    }})
    
})();