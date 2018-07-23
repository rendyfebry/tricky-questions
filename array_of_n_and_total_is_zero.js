// Given integer N, create array of N positive number which when totalled is equal to 0

const create_arr = N => {
	// Create array 1 to N
	const arr = [...Array(N).keys()]

	// Pop last number in array
	arr.pop()

	// Find total number of every item and mutiply by -1
	// to find the last number and balance it to 0
	const total = arr.reduce((a, b) => a + b)
	const lastNum = total * -1

	// push the negativ number to array
	arr.push(lastNum)

	return arr
}
