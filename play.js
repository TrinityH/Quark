function Play() {
    // Initialize variables
    var die1 = 5
    var die2 = 2
    // Add the sum of the die
    var sum = die1+die2
    // Write the number from the first die on the page
    document.write("Die 1 = " + die1)
    // Add a line break
    document.write("<br/>")
    // Write the number from the second die on the page
    document.write("Die 2 = " + die2)
    // Line break
    document.write("<br/>")
    // Write the sum of the die to the page
    document.write("Sum = " + sum)
    // Line break
    document.write("<br/>")
    // Write 'Craps - you lose' to the page if the sum is equal to 7 or 11 or 'Doubles - you win' if the number on the die is the same 
    if (sum == 7 || sum == 11)
    { document.write("CRAPS - you lose")
    // Line break
    document.write("<br/>")
    }
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win")
    document.write("<br/>")
    }
    
    }
    // Write the title of the game to the page
    document.write("Simple Craps")
    document.write("<br/>")
    // Call Play function
    Play()