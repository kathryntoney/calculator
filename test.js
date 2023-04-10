let nums = [5, 6, 7, '+', 8, 9]

let before = nums.slice(0, nums.indexOf('+'));
beforeConcat = Number(before.join(""));
console.log(beforeConcat);

let after = nums.slice(nums.indexOf('+') + 1);
afterConcat = Number(after.join(""));
console.log(afterConcat);




if (displayInput.includes('+')) {
    let before = firstSet.slice(0, firstSet.indexOf('+'));
    beforeJoined = Number(before.join(""))
    let after = firstSet.slice(firstSet.indexOf('+') + 1);
    afterJoined = Number(after.join(""));
    displayInput.textContent = `${beforeJoined + afterJoined}`
}
else if (displayInput.includes('-')) {
    let before = firstSet.slice(0, firstSet.indexOf('-'));
    beforeJoined = Number(before.join(""))
    let after = firstSet.slice(firstSet.indexOf('-') + 1);
    afterJoined = Number(after.join(""));
    displayInput.textContent = `${beforeJoined - afterJoined}`
}
else if (displayInput.includes('*')) {
    let before = firstSet.slice(0, firstSet.indexOf('*'));
    beforeJoined = Number(before.join(""))
    let after = firstSet.slice(firstSet.indexOf('*') + 1);
    afterJoined = Number(after.join(""));
    displayInput.textContent = `${beforeJoined * afterJoined}`
}
else {
    let before = firstSet.slice(0, firstSet.indexOf('/'));
    beforeJoined = Number(before.join(""))
    let after = firstSet.slice(firstSet.indexOf('/') + 1);
    afterJoined = Number(after.join(""));
    displayInput.textContent = `${beforeJoined / afterJoined}`
}


let operator = firstSet.slice(firstSet.indexOf('+'), (firstSet.indexOf('+') + 1));




for (let i = 0; i < firstSet.length; i++) {
    for (let j = 0; j < operators.length; j++) {
        if (firstSet[i] === operators[j]) {
            let currentOp = operators[j]
            console.log(currentOp)
            let beforeOp = firstSet.slice(0, firstSet.indexOf(currentOp))
            beforeOp = Number(beforeOp.join(""))
            console.log(beforeOp)
            let afterOp = firstSet.slice(firstSet.indexOf(currentOp) + 1)
            console.log(afterOp)
            afterOp = Number(afterOp.join(""))
            console.log(afterOp)
            displayInput.textContent = `${beforeOp} ${currentOp} ${afterOp}`
        }
    }
}

if (InputDeviceInfo.innerText != "") && operatorSymbols.includes(input.innerText) != true // makes sure input is not empty and doesn't container operator