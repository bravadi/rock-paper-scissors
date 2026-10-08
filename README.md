# rockpaperscissors
From JavaScript Basics (Projects)

Plan:
 No UI – all played in the console with questions and answers
 User has to pick either rock, paper, or scissors
 Desired output: You win / you lose / some error message if the input is is not rock, paper, or scissors

Pseudocode:
 GET computer input = random rock/paper/scissors
 READ user input = rock/paper/scissors
 IF …
    user input matches the computer input,
        THEN output "It's a tie."
    user input is rock AND computer input is paper, OR
    user input is paper AND computer input is scissor, OR
    user input is scissors AND computer input is rock, 
        THEN output "You lose."
    user input is rock AND computer input is scissors, OR
    user input is paper AND computer input is rock, OR
    user input is scissor AND computer input is paper, 
        THEN output "You win!"
    ELSE
        THEN output "Idk what that is"