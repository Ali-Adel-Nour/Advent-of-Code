
const summonPuzzleInput = async()=>{
  const response = await fetch("https://adventofcode.com/2022/day/1/input")
  const responseText = await response.text()
  return responseText
}
const puzzleInput = await summonPuzzleInput()

const sumReducer = (sum,num)=> sum + num
const getSumofGroup = (group)=>
  group
.split("\n")
.map(Number)
.reduce((sum,num)=>sum + num,0)




// divide the list into an array of groups

const numberGroups = puzzleInput.split("\n\n")

//find the sum of each group
const groupSums = numberGroups.map(getSumofGroup);



//find the largest sum
//PART 1
const maxSum = Math.max(...groupSums)

//PART 2
//find the top 3 sums


//sort the sums array in descending orders

const sortedSums = [...groupSums].sort((num1,num2)=>num2-num1)


const top3Sums = sortedSums.slice(0,3);
const sumOfTop3 = top3Sums.reduce(sumReducer,0)

console.log(sumOfTop3)