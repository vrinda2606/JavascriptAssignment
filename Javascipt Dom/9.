 <!DOCTYPE html> 
<html><head> 
<meta charset=utf-8 /> 
<style type="text/css"> 
body {margin: 30px;} 
</style> 
<title>Count and display items of a dropdown list - w3resource</title> 
</head>
<body>
<form> 
<h1>Select your favorite Color :</h1> 
<select id="mySelect"> 
<option>Red</option> 
<option>Green</option> 
<option>Blue</option> 
<option>White</option> 
</select> 
<input type="button" onclick="getOptions()" value="Count and Output all items"> 
</form>
<script>
  function getOptions() {
  const select = document.getElementById('mySelect');
  const options = select.options;
  const count = options.length;
  let optionText = '';

  for (let i = 0; i < count; i++) {
    optionText += `${i + 1}. ${options[i].text}\n`;
  }

  alert(`There are ${count} items in the dropdown list:\n${optionText}`);
}
</script>
</body>
</html>
