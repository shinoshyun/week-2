//Q1
function calculate(min, max, step) {

    //先設一個answer的空間
    let answer = 0;

    //給一個i設空間(不設min, max, step) 目的是因為可以自由代換數字
    for (let i = min; i <= max; i += step) {

        //這邊的answer就是要把+=i的數字加總
        answer += i;
    }

    //最後印出answer的值
    console.log(answer);

}
//題目設的值
calculate(1, 3, 1); // 你的程式要能夠計算 1+2+3，最後印出 6
calculate(4, 8, 2); // 你的程式要能夠計算 4+6+8，最後印出 18
calculate(-1, 2, 2); // 你的程式要能夠計算 -1+1，最後印出 0




//Q2
function avg(data) {

    let averageSalary = 0;
    let count = 0;
    let total = 0;

    //一樣設i 去搜尋每行不是職員的人
    for (let i = 0; i < data.employees.length; i++) {
        let isManager = data.employees[i].manager;
        //如果不是職員的話，把薪水加起來
        if (!isManager) {
            count++;
            total += data.employees[i].salary;
        }
    }
    //總金額除以職員數量
    averageSalary = total / count;
    console.log(averageSalary)
}
avg({
    "employees": [
        {
            "name": "John",
            "salary": 30000,
            "manager": false
        },
        {
            "name": "Bob",
            "salary": 60000,
            "manager": true
        },
        {
            "name": "Jenny",
            "salary": 50000,
            "manager": false
        },
        {
            "name": "Tony",
            "salary": 40000,
            "manager": false
        }
    ]
}); // 呼叫 avg 函式





//Q3
function func(a) {
    function func2(b, c) {
        console.log(a + b * c);
    }
    return func2;
}

func(2)(3, 4); // 你補完的函式能印出 2+(3*4) 的結果 14
func(5)(1, -5); // 你補完的函式能印出 5+(1*-5) 的結果 0
func(-3)(2, 9); // 你補完的函式能印出 -3+(2*9) 的結果 15
// 一般形式為 func(a)(b, c) 要印出 a+(b*c) 的結果






//Q4
function maxProduct(nums) {
    // 要比較陣列中所有元素相乘後的大小
    // 所以取第一個跟第二個相乘後的結果暫存到max中
    // 之後要用這個max去跟其他結果做比較
    let max = nums[0] * nums[1];
    let num = 0;

    for (let i = 0; i < nums.length - 1; i++) {

        // 取得陣列中的第一個，暫存到num中，
        num = nums[i];

        // 因為要去跟其他元素做比較，所以要略過自己，所以從j=i+1開始
        // 因為是取相乘的結果，所以只要有相乘過就不用再乘，所以只要跟比自己後面的位置相乘就好
        for (let j = i + 1; j < nums.length; j++) {

            // 如果相乘的結果比max大，就存入max
            if (max < (num * nums[j])) {
                max = num * nums[j];
            }
        }
    }
    console.log(max);
}
maxProduct([5, 20, 2, 6]) // 得到 120
maxProduct([10, -20, 0, 3]) // 得到 30
maxProduct([10, -20, 0, -3]) // 得到 60
maxProduct([-1, 2]) // 得到 -2
maxProduct([-1, 0, 2]) // 得到 0 或 -0
maxProduct([5, -1, -2, 0]) // 得到 2
maxProduct([-5, -2]) // 得到 10




//Q5
function twoSum(nums, target) {

    //因為最後要顯示的是[0,2]，所以要創建一個空間，為的是最後用.push 把最後陣列的數字寫上去
    let result = [];
    let num = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        num = nums[i];
        for (let j = i + 1; j < nums.length; j++) {

            //結果要有符合target，才會把答案跑出來，不然會再繼續跑for迴圈找相對應的答案
            if (target == num + nums[j]) {

                //把結果推上上面result設的空間[]
                result.push(i);
                result.push(j);

            }
        }
    }
    //回傳值，result才會跑到下面的console.log
    return result;
}
let result = twoSum([2, 11, 7, 15], 9);
console.log(result); // show [0, 2] because nums[0]+nums[2] is 9




//Q6
function maxZeros(nums) {
    // 請用你的程式補完這個函式的區塊
    let max = 0;
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            sum += 1;

            //如果遇到1，就把之前算的0的總和(sum)存起來，不然又會重頭開始
        } else {

            //sum(存起來的數)大於max，就要用max把這個數字存起來
            if (max < sum) {
                max = sum;

                //然後這階段要重置sum，因為要繼續算連續的0
                sum = 0;
            }
        }
    }
    //全部數字跑完後，因為最後一個可能是0，就不會進去上面的else，所以要再看看，最後一次算的連續幾個0是不是大於max
    if (max < sum) {
        max = sum;
    }

    console.log(max);
}
maxZeros([0, 1, 0, 0]); // 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]); // 得到 4
maxZeros([1, 1, 1, 1, 1]); // 得到 0
maxZeros([0, 0, 0, 1, 1]) // 得到 3 