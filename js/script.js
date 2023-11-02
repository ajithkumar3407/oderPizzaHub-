const orderButton=document.getElementById("orderPizzaButton");

const statusDiv=document.getElementById("status");

function orderPizza(){
	
	statusDiv.textContent="Robin is ordering pizza...";
	
	setTimeout(function(){
		statusDiv.textContent="Order registered. Preparing pizza...";
		
		setTimeout(function(){
			statusDiv.textContent="Pizza is ready! Notifying Robin...";
			
			setTimeout(function(){
				statusDiv.textContent="Pizza is on its way! Enjoy, Robin!";
			},4000);
		},6000);
	},3000);
}

orderButton.addEventListener("click", orderPizza);