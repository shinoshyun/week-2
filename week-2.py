# Q1
import re
from sys import setprofile


def calculate(min, max, step):

    answer = 0
    for i in range(min, max+1, step):
        answer += i

    print(answer)

calculate(1, 3, 1)  
calculate(4, 8, 2)  
calculate(-1, 2, 2)  

# Q2
def avg(data):

    averageSalary = 0
    count = 0
    total = 0

    employees = data["employees"]

    for onePerson in employees:
        isManager = onePerson["manager"]

        if bool(isManager) == False:
            count += 1 
            total += onePerson["salary"]

    averageSalary = total / count
    print(averageSalary)


avg({
    "employees": [
        {
            "name": "John",
            "salary": 30000,
            "manager": False
        },
        {
            "name": "Bob",
            "salary": 60000,
            "manager": True
        },
        {
            "name": "Jenny",
            "salary": 50000,
            "manager": False
        },
        {
            "name": "Tony",
            "salary": 40000,
            "manager": False
        }
    ]
})  

# Q3
def func(a):

    def func2(b, c):
        print(a+b*c)

    return func2

    
func(2)(3, 4) 
func(5)(1, -5)
func(-3)(2, 9)

# Q4
def maxProduct(nums):
    
    max = nums[0]*nums[1]

    for i in range(0, len(nums)):
        for j in range(i+1, len(nums)):
            a = nums[i]
            b = nums[j]
            if a*b > max:
               max = a*b

    print(max)


maxProduct([5, 20, 2, 6]) 
maxProduct([10, -20, 0, 3]) 
maxProduct([10, -20, 0, -3]) 
maxProduct([-1, 2]) 
maxProduct([-1, 0, 2]) 
maxProduct([5,-1, -2, 0]) 
maxProduct([-5, -2]) 

# Q5
def twoSum(nums, target):
# your code here
    result = []

    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            if target == nums[i] + nums[j]:
                result.append(i)
                result.append(j)
    return result

result = twoSum([2, 11, 7, 15], 9)
print(result) 

# Q6
def maxZeros(nums):
    
    max = 0
    sum = 0

    for i in nums:
        if i == 0:
            sum += 1

        else:
            if max < sum:
                max = sum
                sum = 0

    if max < sum:
        max = sum

    print(max)


maxZeros([0, 1, 0, 0]) 
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]) 
maxZeros([1, 1, 1, 1, 1]) 
maxZeros([0, 0, 0, 1, 1]) 
