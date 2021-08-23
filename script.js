console.log("Auto roll extension is running...")

setInterval(() => {
    document.getElementById("pwc_input").value = "1";
    document.getElementById("free_play_form_button").click()
  }, 300000
)
