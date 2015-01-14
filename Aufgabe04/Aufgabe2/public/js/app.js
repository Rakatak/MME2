/**
 * @author Rakatak alias Robin Steller
 */
$(document).ready(function(){
		console.log("Hello Database Time")

	var base_url = "http://0.0.0.0:3000/apiV1/";

	$("#byName").hide()
	$("#byId").hide()
	$("#byURL").hide()
	$("#byState").hide()
	$("#byDescription").hide()
	$("#getAll").hide()
	$("#name").hide()
	$("#id").hide()
	$("#url").hide()
	$("#state").hide()
	$("#description").hide()


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
		 $("#getAll").show()
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
		 $("#getAll").hide()

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
		 $("#getAll").hide()

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
		 $("#getAll").hide()
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

	$("#getAll").click(function(){
		$("#name").hide()
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
			var name = "?name=" +$('#name').val()
			var description = "?description=" +$('#description').val()
			var state = "?state=" +$('#state').val()
			var url = "?url=" + $('#url').val()
			var id = $('#id').val()

			var finalUrl

			if ($('#byId').is(':checked')) {
				finalUrl = "/" + id
			}

			else if ($('#byURL').is(':checked')) {
				finalUrl = url
			}

			else if ($('#byState').is(':checked')) {
				finalUrl = state

			}

			else if ($('#byDescription').is(':checked')) {
				finalUrl = description

			}

			else if ($('#byName').is(':checked')) {
				finalUrl = name

			}

			else if ($('#getAll').is(':checked')) {
				finalUrl = "/"

			}

			$.ajax({
				type: 'get',
				url: base_url + "streams" + finalUrl,
				contentType: "application/json; charset=utf-8",
				success: function (data) {
					console.log(JSON.stringify(data))
				}
			});

		}


		if ($('#postBut').is(':checked')) {
			console.log("POST Request")
			var name = $('#name').val()
			var description = $('#description').val()
			var state = $('#state').val()
			var url = $('#url').val()

			var jsonReq = {}

			jsonReq.name = name
			jsonReq.description = description
			jsonReq.state = parseInt(state)
			jsonReq.url = url

			$.ajax({
				type: 'post',
				url: base_url + "streams/",
				data: JSON.stringify(jsonReq),
				contentType: "application/json; charset=utf-8",
				success: function (data) {
					console.log(data)
				}
			});

		}


		if ($('#putBut').is(':checked')) {
			console.log("PUT Request")

			var name = $('#name').val()
			var description = $('#description').val()
			var state = $('#state').val()
			var url = $('#url').val()
			var id = $('#id').val()

			var jsonReq = {}

			jsonReq.name = name
			jsonReq.description = description
			jsonReq.state = parseInt(state)
			jsonReq.url = url

			console.log(JSON.stringify(jsonReq))
			$.ajax({
				type: 'PUT',
				url: base_url + "streams/" + id,
				data: JSON.stringify(jsonReq),
				contentType: "application/json; charset=utf-8",
				success: function (data) {
					console.log(data)
				}
			});

		}

		if ($('#delBut').is(':checked')) {
			console.log("DELETE Request")
			var id = $('#id').val()

			$.ajax({
				type: 'delete',
				url: base_url + "streams/" + id,
				contentType: "application/json; charset=utf-8",
				success: function (data) {
					console.log("Deleted")
				}
			});
		}

	})
})