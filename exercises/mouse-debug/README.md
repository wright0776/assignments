# mouse-debug
The goal of this debugging practice is to max "x" and "y" out at 300.

You can see that neither will go below 100, but when we try to use the same logic to keep them below 300, it does not work.

Use your dev tools to see what's going on. 

## Completed:
The x and y were being reset with each if statement and since there were 2 separate if statements for each x and y boundary, the last one took precedence and set the boundary.

I  took it down to 2 if/else statements, one for each axis that included an if/else for each boundary. Fixed the problem!

