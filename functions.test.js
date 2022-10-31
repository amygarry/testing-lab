let myFunctions = require('./functions.js')

test ('returnTwo', ()=>{
    expect(myFunctions.returnTwo()).toBe(2)
  })

test ('greeting', ()=>{
    expect(myFunctions.greeting('James')).toBe("Hello, James")
})

test ('add',()=>{
    expect(myFunctions.add(1,2)).toEqual(3)
    expect(myFunctions.add(4,7)).toEqual(11)
})

describe ('Math functions',()=>{
    test ('add',()=>{
        expect(myFunctions.add(1,2)).toEqual(3)
        expect(myFunctions.add(4,7)).toEqual(11)
    })
    test ('multiply',()=>{
        expect(myFunctions.multiply(1,2)).toEqual(2)
        expect(myFunctions.multiply(4,7)).toEqual(28)
    })
    test ('divide',()=>{
        expect(myFunctions.divide(6,2)).toEqual(3)
        expect(myFunctions.divide(28,7)).toEqual(4)
    })
})