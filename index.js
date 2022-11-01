function saturdayFun(activity){
    if(activity == null){
        activity = "roller-skate"
    }
        return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun("bathe my dog"))
console.log(saturdayFun(null))

function mondayWork(work){
    if(work == null){
        work = "go to the office"
    }
        return `This Monday, I will ${work}.`
}
console.log(mondayWork(null))
console.log(mondayWork("work from home"))

function wrapAdjective(special){
    if (special == null){
        special = "nice"
    }
        return `You are ${special}`
}
