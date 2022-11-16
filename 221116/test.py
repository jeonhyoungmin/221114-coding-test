import random

def sortArray(array):
    step = 0
    print(array)
    
    def changeValue(n):
        first = array[n]
        second = array[n+1]
        array[n+1] = first
        array[n] = second
        return array
    
    hi = []
    for i in range(len(array)-1):
        for j in range(len(array)-1):
            if(array[j] > array[j+1]):
              step = step + 1
              hi = changeValue(j)
    
    returnObj = {
    'one': hi[0],
    'two': hi[1],
    'three': hi[2],
    'four': hi[3],
    'five': hi[4],
    'six': hi[5],
    'seven': hi[6],
    'eight': hi[7],
    'nine': hi[8],
    'ten': hi[9]
    }
    
    print(step)
    return returnObj




inputData = []
for i in range(10):
    inputData.append(random.randrange(1,11))

print(sortArray(inputData))