// function to show people their place in line. If no one in line, "The line is currently empty."
let deliLine = [];

function currentLine(line) {
  const peopleInLine = []
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for(let i = 0; i < line.length; i++) {
      peopleInLine.push(`${i + 1}. ${line[i]}`)
    }

    return `The line is currently: ${peopleInLine.join(', ')}`
  }
}


// function for people entering deli. arguments = array for current line, new customer name. Return person's name and position in line.
function takeANumber(deliLine, name) {
  deliLine.push(name);

  return `Welcome, ${name}. You are number ${peopleInLine.length} in line.`
};

// function to call next person and take them from front of line. If no one in line, return "There is nobody waiting to be served!"
function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return  `Currently serving ${line.shift()}.`
  }
};
