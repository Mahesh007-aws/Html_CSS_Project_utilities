#!/bin/bash

# run the below command on git bash mac or linux to create the files 
#   $ chmod +x create_files.sh 
#  $  ./create_files.sh waveLabelForm

# Read the folder name from the command line
folder_name="$1"

# Create the folder
mkdir $folder_name

# Create the files
touch $folder_name/$folder_name.js
touch $folder_name/$folder_name.html
touch $folder_name/$folder_name.css

# Add HTML boilerplate code to the HTML file
echo "<!DOCTYPE html>
<html>
<head>
	<title>$folder_name</title>
	<link rel='stylesheet' type='text/css' href='$folder_name.css'>
	
</head>
<body>
div.
<script type='text/javascript' src='$folder_name.js'></script>
</body>
</html>" > $folder_name/$folder_name.html

# Add CSS styling to the CSS file
echo "/* Remove default margin and border properties */
* {
	margin: 0;
	padding: 0;
	border: 0;
}

/* Import fonts from Google Fonts */
@import url('https://fonts.googleapis.com/css?family=Ubuntu|Poppins&display=swap');

/* Set the font family and size for the body */
body {
	font-family: 'Ubuntu', sans-serif;
	font-size: 16px;
}

/* Center the content of the body using flex */
body {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
}" > $folder_name/$folder_name.css

# Output confirmation message
echo "Folder $folder_name created with files $folder_name.js, $folder_name.html, $folder_name.css."