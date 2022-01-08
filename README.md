# Lightbulb Distribution

A very careful electrician is trying to light up at the lowest cost possible their client's rooms. The rooms he lights up are always in a matrix form.

Since lightbulbs are very expensive, he tries to illuminate the entire room with the least amount.
 
These lightbulbs only shine in a horizontal and vertical path.

The only bad thing is that rooms can have walls within them, in which case, the range of light from a given bulb would be interrupted.

You should make a program in any programming language with the following options:

1. Load room
   This option should load a text file that contains the matrix of 0s and 1s that represents the room. **0 means zone without wall** and **1 means zone with wall**.
2. Show the most optimized location for lightbulbs	 
   Show the solution of the least amount of bulbs that you could place to illuminate the entire room. Displaying it on the screen is up to your imagination, but it must be clear where the walls and the lightbulbs are placed.
 	 	 	 
## Example input	 

```
00010111
01000000
01000111
01111000
01001000
01001010
01011010
00001000
01101101
00001000
10010011
00100000
```

## Project setup
You should have NodeJS and npm installed in your machine (usually installed when NodeJS is installed).

Then open the command line on any folder you want and do:

```
git clone https://github.com/LuisSanchez-Dev/lightbulb-distribution.git
cd lightbulb-distribution
npm install
npm run serve
```

Then you can go to http://localhost:8080/ or the specified URL in the console and try the app.

## License
Code licensed under the MIT License (C) Luis Sanchez 2022.
Exercise is property of their respective owners.