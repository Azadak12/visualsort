function printIteration(iteration) {
    const iterationDiv = document.createElement("div");
    iterationDiv.innerHTML = `<strong>Iteration ${iteration}:</strong><br>`;
    iterationDiv.classList.add("output-iteration");
    document.getElementById("output").appendChild(iterationDiv);
}

function printComparison(comparison) {
    const comparisonDiv = document.createElement("div");
    comparisonDiv.textContent = comparison;
    comparisonDiv.classList.add("output-comparison");
    document.getElementById("output").appendChild(comparisonDiv);
    document.getElementById("output").appendChild(document.createElement("br"));
}

function printSwap(swap) {
    const swapDiv = document.createElement("div");
    swapDiv.textContent = swap;
    swapDiv.classList.add("output-swap");
    document.getElementById("output").appendChild(swapDiv);
    document.getElementById("output").appendChild(document.createElement("br"));
}

function printArray(arr) {
    const arrayDiv = document.createElement("div");
    arrayDiv.textContent = arr.join(" ");
    arrayDiv.classList.add("output-array");
    document.getElementById("output").appendChild(arrayDiv);
    document.getElementById("output").appendChild(document.createElement("br"));
}

function printNoSwap(noSwap) {
    const noSwapDiv = document.createElement("div");
    noSwapDiv.textContent = noSwap;
    noSwapDiv.classList.add("output-no-swap");
    document.getElementById("output").appendChild(noSwapDiv);
    document.getElementById("output").appendChild(document.createElement("br")); 
}
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        printIteration(i + 1);
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            printComparison(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                printSwap(`Swapping ${arr[j]} and ${arr[j + 1]} because ${arr[j]} is greater than ${arr[j + 1]}`);
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; 
            } else {
                printNoSwap(`No need to swap ${arr[j]} and ${arr[j + 1]} because they are already in the correct order`);
            }
        }
        if (!swapped) {
            printNoSwap("No swaps were made in this iteration, so the array is already sorted.");
            break; 
        }
        printArray(arr);
    }
}

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        printIteration(i + 1);
        let minIndex = i;
        let swapOccurred = false; 
        for (let j = i + 1; j < n; j++) {
            printComparison(`Comparing ${arr[minIndex]} and ${arr[j]}`);
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                swapOccurred = true; 
            }
        }
        if (swapOccurred) {
            printSwap(`Swapping ${arr[i]} and ${arr[minIndex]}`);
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        } else {
            printNoSwap(`No need to swap for index ${i}`);
        }
        printArray(arr);
    }
}

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        printIteration(i);
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            printComparison(`Comparing ${arr[j]} and ${key}`);
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
        printInsertion(`Inserting ${key} at index ${j + 1}`);
        printArray(arr);
    }
}



function sortArray() {
    const algorithm = document.getElementById("algorithm").value;
    const input = document.getElementById("inputArray").value;
    const array = input.split(",").map(Number);
    document.getElementById("original").textContent = "Original Array: " + array.join(" ");
    document.getElementById("output").innerHTML = ""; // Clear previous output
    switch (algorithm) {
        case "bubble":
            bubbleSort(array.slice());
            break;
        case "selection":
            selectionSort(array.slice());
            break;
        case "insertion":
            insertionSort(array.slice());
        default:
            alert("Please select an algorithm.");
    }
}