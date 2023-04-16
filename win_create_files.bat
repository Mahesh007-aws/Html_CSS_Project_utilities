@REM run this command to crete files from cmd prompt win_create_files.bat SoundBar

@echo off

REM Read the folder name from the command line
set folder_name=%1

REM Create the folder
mkdir %folder_name%

REM Create the files
type nul > %folder_name%\%folder_name%.js
type nul > %folder_name%\%folder_name%.html
type nul > %folder_name%\%folder_name%.css

REM Add HTML boilerplate code to the HTML file
echo ^<!DOCTYPE html^> > %folder_name%\%folder_name%.html
echo ^<html^> >> %folder_name%\%folder_name%.html
echo ^<head^> >> %folder_name%\%folder_name%.html
echo ^<title^>%folder_name%^</title^> >> %folder_name%\%folder_name%.html
echo ^<link rel='stylesheet' type='text/css' href='%folder_name%.css'^> >> %folder_name%\%folder_name%.html
echo ^<script type='text/javascript' src='%folder_name%.js'^>^</script^> >> %folder_name%\%folder_name%.html
echo ^</head^> >> %folder_name%\%folder_name%.html
echo ^<body^> >> %folder_name%\%folder_name%.html
echo ^</body^> >> %folder_name%\%folder_name%.html
echo ^</html^> >> %folder_name%\%folder_name%.html

REM Add CSS styling to the CSS file
echo /* Remove default margin and border properties */ > %folder_name%\%folder_name%.css
echo * { >> %folder_name%\%folder_name%.css
echo ^	margin: 0; >> %folder_name%\%folder_name%.css
echo ^	padding: 0; >> %folder_name%\%folder_name%.css
echo ^	border: 0; >> %folder_name%\%folder_name%.css
echo } >> %folder_name%\%folder_name%.css
echo. >> %folder_name%\%folder_name%.css
echo /* Import fonts from Google Fonts */ >> %folder_name%\%folder_name%.css
@REM echo /*@import url('https://fonts.googleapis.com/css?family=Ubuntu poppins&display=swap');*/ >> %folder_name%\%folder_name%.css
echo. >> %folder_name%\%folder_name%.css
echo /* Set the font family and size for the body */ >> %folder_name%\%folder_name%.css
echo body { >> %folder_name%\%folder_name%.css
echo ^	font-family: 'Ubuntu', sans-serif; >> %folder_name%\%folder_name%.css
echo ^	font-size: 16px; >> %folder_name%\%folder_name%.css
echo } >> %folder_name%\%folder_name%.css
echo. >> %folder_name%\%folder_name%.css
echo /* Center the content of the body using flex */ >> %folder_name%\%folder_name%.css
echo body { >> %folder_name%\%folder_name%.css
echo ^	display: flex; >> %folder_name%\%folder_name%.css
echo ^	align-items: center; >> %folder_name%\%folder_name%.css
echo ^	justify-content: center; >> %folder_name%\%folder_name%.css
echo ^	height: 100vh; >> %folder_name%\%folder_name%.css
echo } >> %folder_name%\%folder_name%.css