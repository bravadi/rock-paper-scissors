# rockpaperscissors
From JavaScript Basics (Projects)

Plan:
 No UI – all played in the console with questions and answers
 User has to pick either rock, paper, or scissors
 Desired output: You win / you lose / some error message if the input is is not rock, paper, or scissors

Pseudocode:
 GET computer input = random rock/paper/scissors
 READ human input = rock/paper/scissors
 IF …
    human input matches the computer input,
        THEN output "It's a tie."
    human input is rock AND computer input is paper, OR
    human input is paper AND computer input is scissor, OR
    human input is scissors AND computer input is rock, 
        THEN output "You lose."
    human input is rock AND computer input is scissors, OR
    human input is paper AND computer input is rock, OR
    human input is scissor AND computer input is paper, 
        THEN output "You win!"
    ELSE
        THEN output "Idk what that is"