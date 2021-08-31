// Code your solution here

let findMatching = (drivers, string) => {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

let fuzzyMatch = (drivers, string) => {
    console.log(string)
    return drivers.filter(driver => driver.charAt(0) === string.charAt(0))
}

let matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name === string)
}
