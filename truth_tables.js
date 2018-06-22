true && true
// true

false && true
// false

true && false
// false

false && false
// false


true || true
//true
true || false
//true
false || true
//true
false || false
//false

!true
//false
!false
//true

let x = "foo"
let y = ""

if !!(x && y) {
    "Both strings are empty!";
    } else {
    "At least one of the strings is nonempty.";
    }
'At least one of the strings is nonempty.'


> !!x
true
> !!y
false
> !!(x && y)
false
> !!x && !!y
false

