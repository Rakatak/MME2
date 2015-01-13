/**
 * @author Rakatak alias Robin Steller
 */
$(document).ready(function(){
		console.log("Hello Database Time")

	var baseUrl = "http://0.0.0.0:3000/apiV1/streams"

	$("#byName").hide()
	$("#byId").hide()
	$("#byURL").hide()
	$("#byState").hide()
	$("#byDescription").hide()

	 $("#getBut").click(function(){
		 $("#name").hide()
		 $("#id").hide()
		 $("#url").hide()
		 $("#state").hide()
		 $("#description").hide()
		 $("#byName").show()
		 $("#byId").show()
		 $("#byURL").show()
		 $("#byState").show()
		 $("#byDescription").show()
	 })

	 $("#postBut").click(function(){
		 $("#name").show()
		 $("#id").hide()
		 $("#url").show()
		 $("#state").show()
		 $("#description").show()
		 $("#byName").hide()
		 $("#byId").hide()
		 $("#byURL").hide()
		 $("#byState").hide()
		 $("#byDescription").hide()
	 })

	 $("#putBut").click(function(){
		 $("#name").show()
		 $("#id").show()
		 $("#url").show()
		 $("#state").show()
		 $("#description").show()
		 $("#byName").hide()
		 $("#byId").hide()
		 $("#byURL").hide()
		 $("#byState").hide()
		 $("#byDescription").hide()
	 })

	 $("#delBut").click(function(){
		 $("#name").hide()
		 $("#id").show()
		 $("#url").hide()
		 $("#state").hide()
		 $("#description").hide()
		 $("#byName").hide()
		 $("#byId").hide()
		 $("#byURL").hide()
		 $("#byState").hide()
		 $("#byDescription").hide()
	 })

	$("#byId").click(function(){
		$("#name").hide()
		$("#id").show()
		$("#url").hide()
		$("#state").hide()
		$("#description").hide()
	})

	$("#byState").click(function(){
		$("#name").hide()
		$("#id").hide()
		$("#url").hide()
		$("#state").show()
		$("#description").hide()
	})

	$("#byURL").click(function(){
		$("#name").hide()
		$("#id").hide()
		$("#url").show()
		$("#state").hide()
		$("#description").hide()
	})

	$("#byName").click(function(){
		$("#name").show()
		$("#id").hide()
		$("#url").hide()
		$("#state").hide()
		$("#description").hide()
	})

	$("#byDescription").click(function(){
		$("#name").hide()
		$("#id").hide()
		$("#url").hide()
		$("#state").hide()
		$("#description").show()
	})

	$("#send").click(function(){
		console.log("\nSend button pressed")
		if ($('#getBut').is(':checked')) {
			console.log("GET Request")

		}
		if ($('#postBut').is(':checked')) {
			console.log("POST Request")

		}
		if ($('#putBut').is(':checked')) {
			console.log("PUT Request")

		}
		if ($('#delBut').is(':checked')) {
			console.log("DELETE Request")

		}

	})
})