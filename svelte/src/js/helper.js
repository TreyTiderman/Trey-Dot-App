// Send query to server
export async function get(uri, origin = document.location.origin) {
  
  // Fetch options
  const url = `${origin}${uri}`
  const options = {
    method: 'GET',
  }

  // Fetch
  let failed = false
  let response = await fetch(url, options).catch(error => failed = true)
  if (failed) {
    return null
  }
  else if (!response.ok) {
    return "not a json"
  }
  else {
    const res = await response.json()
    return res
  }

}

// Send query to server
export async function post(uri, body, origin = document.location.origin) {

  // Fetch options
  const url = `${origin}${uri}`
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  }

  // Fetch
  let failed = false
  let response = await fetch(url, options).catch(error => failed = true)
  if (failed) {
    return null
  }
  else if (!response.ok) {
    return "not a json"
  }
  else {
    const res = await response.json()
    return res
  }

}

// Run the callback function if 1s has passed since the last time debounce() was called
export function debounce(cb, delay = 1000) {
  let timeout  
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

// Run the callback function immediately and every 1s afterwards
// Example: A sliders value changes rapidly,
// so instead of running a function every small value change
// only run the function every 100ms (save on network traffic)
export function throttle(cb, delay = 100) {
  let shouldWait = false
  let waitingArgs
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }
  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }
    cb(...args)
    shouldWait = true
    setTimeout(timeoutFunc, delay)
  }
}

// Get random number between min and max
export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Force number to range
export function numMinMax(num, min, max) {
  const MIN = min || 1
  const MAX = max || 20
  const parsed = parseInt(num)
  return Math.min(Math.max(parsed, MIN), MAX)
}

// Date Object to Time (4:37 PM)
export function dateObjToTime(date) {
  let time = new Intl.DateTimeFormat('default', {
    hour: 'numeric',
    minute: 'numeric'
  }).format(date)
  return time
}

// Date Object to Date (11/13/2022)
export function dateObjToDate(date) {
  let time = new Intl.DateTimeFormat().format(date)
  return time
}

// Common Functions
function stringIsNum(string) {
  if (typeof string != "string") return false
  return !isNaN(string) && !isNaN(parseFloat(string))
}
function stringHasWhitespace(string) {
  if (typeof string != "string") return false
  return /\s/.test(string)
}

// Network Validation
export function validIPv4(ip, returnErrorMessage = false) {

  // Tests
  // Is null or undefined
  if (ip === null || ip === undefined) {
    if (returnErrorMessage) return "Is null or undefined"
    return false
  }

  // Greater than 15 characters
  if (ip.length > 15) {
    if (returnErrorMessage) return "Greater than 15 characters"
    return false
  }

  // IP doesn't contain at least 3 periods
  const split = ip.split(".")
  const periodCount = split.length - 1
  if (periodCount !== 3) {
    if (returnErrorMessage) return "IP doesn't contain at least 3 periods"
    return false
  }

  // Each octet
  for (let i = 0; i < split.length; i++) {

    // Octet i contains white space
    if (stringHasWhitespace(split[i])) {
      if (returnErrorMessage) return `Octet ${i+1} "${split[i]}" contains white space`
      return false
    }

    // Octet i is not a number
    if (stringIsNum(split[i]) === false) {
      if (returnErrorMessage) return `Octet ${i+1} "${split[i]}" is not a number`
      return false
    }

    // Octet i is not between 0-255
    const num = Number(split[i])
    if (num < 0 || num > 255) {
      if (returnErrorMessage) return `Octet ${i+1} "${split[i]}" is not between 0-255`
      return false
    }

  }

  // Passed all tests
  return true
}
export function validMask(mask, returnErrorMessage = false) {
  
  // Tests
  // Is null or undefined
  if (mask === null || mask === undefined) {
    if (returnErrorMessage) return "Is null or undefined"
    return false
  }

  // Greater than 15 characters
  if (mask.length > 15) {
    if (returnErrorMessage) return "Greater than 15 characters"
    return false
  }

  // IP doesn't contain at least 3 periods
  const split = mask.split(".")
  const periodCount = split.length - 1
  if (periodCount !== 3) {
    if (returnErrorMessage) return "IP doesn't contain at least 3 periods"
    return false
  }

  // Each octet
  for (let i = 0; i < split.length; i++) {

    // Octet i contains white space
    if (stringHasWhitespace(split[i])) {
      if (returnErrorMessage) return `Octet ${i+1} "${split[i]}" contains white space`
      return false
    }

    // Octet i is not a number
    if (stringIsNum(split[i]) === false) {
      if (returnErrorMessage) return `Octet ${i+1} "${split[i]}" is not a number`
      return false
    }

  }

  // Octet 4 greater than octet 3
  if (split[3] > split[2]) {
    if (returnErrorMessage) return `Octet 4 "${split[3]}" greater than octet 3 "${split[2]}"`
    return false
  }

  // Octet 3 greater than octet 2
  if (split[2] > split[1]) {
    if (returnErrorMessage) return `Octet 3 "${split[2]}" greater than octet 2 "${split[1]}"`
    return false
  }

  // Octet 2 greater than octet 1
  if (split[1] > split[0]) {
    if (returnErrorMessage) return `Octet 2 "${split[1]}" greater than octet 1 "${split[0]}"`
    return false
  }
 
  // Valid subnet mask numbers
  const mask1 = ['255'];
  const mask2_3 = ['255','254','252','248','240','224','192','128','0'];
  const mask4 = ['252','248','240','224','192','128','0'];

  // Octet 1 is not included in the mask1 array
  if (mask1.includes(split[0]) === false) {
    if (returnErrorMessage) return `Octet 1 "${split[0]}" is not 255`
    return false
  }

  // Octet 2 is not included in the mask2_3 array
  if (mask2_3.includes(split[1]) === false) {
    if (returnErrorMessage) return `Octet 2 "${split[1]}" is not valid`
    return false
  }

  // Octet 3 is not included in the mask2_3 array
  if (mask2_3.includes(split[2]) === false) {
    if (returnErrorMessage) return `Octet 3 "${split[2]}" is not valid`
    return false
  }

  // Octet 4 is not included in the mask4 array
  if (mask4.includes(split[3]) === false) {
    if (returnErrorMessage) return `Octet 4 "${split[3]}" is not valid`
    return false
  }

  // Passed all tests
  return true
}
export function validLeasePeriod(time) {
  // leasePeriod is a unsigned 32bit int
  if (typeof time != "number") return false;
  if (time === null || time === undefined) return false
  if (time > 0 && time < 2 ** 32 - 2) return true;
  return false;
}
export function validMetric(metric) {
  let validM = true;
  if (metric === null) return false
  // Is number
  if (isNum(metric) === false) validM = false;
  // Number is in ip range 0-255
  const num = Number(metric);
  if (num < 1 || num > 9999) validM = false;
  return validM;
}

