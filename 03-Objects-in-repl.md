Welcome to Node.js v16.15.0.
Type ".help" for more information.
> typeof {}
'object'
> typeof []
'object'
> const newArray = [1,2,3,4,5]
undefined
> newArray.thing = 6
6
> newArray
[ 1, 2, 3, 4, 5, thing: 6 ]
> newArray.length
5
> function greetNurse(){console.log("Hello Nurse")}
undefined
> typeof greetNurse
'function'
> newArray["thing"]
6
> newArray.push(teacher: "Jon")
newArray.push(teacher: "Jon")
              ^^^^^^^

Uncaught SyntaxError: missing ) after argument list
> newArray.push({teacher: "Jon"})
6
> newArray
[ 1, 2, 3, 4, 5, { teacher: 'Jon' }, thing: 6 ]
> newArray[5]
{ teacher: 'Jon' }
> newArray[5]["teacher"]
'Jon'
> greeNurse()
Uncaught ReferenceError: greeNurse is not defined
> greetNurse()
Hello Nurse
undefined
> greetNurse.brother = "Yakko"
'Yakko'
> greetNurse
[Function: greetNurse] { brother: 'Yakko' }
> 