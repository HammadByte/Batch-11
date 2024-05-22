var InnerText = document.getElementById("innertext")

var opt1 = document.getElementById('opt1')
// opt1.innerText = Option1

var opt2 = document.getElementById('opt2')
// opt2.innerText = Option2

var opt3 = document.getElementById('opt3')
// opt3.innerText = Option3

var arr = [
    {
        Question : "What is JS stand for ?",
        Option1 : 'Java Script',
        Option2 : 'J Script',
        Option3 : 'Jawa Script',
    },
]
//     {
//         Question : "How to index start from ?",
//         Option1 : '2',
//         Option2 : '0',
//         Option3 : '1',
//     },
//     {
//         Question : "Which element is use for line break ?",
//         Option1 : '<break>',
//         Option2 : 'breaking',
//         Option3 : '<br>',
//     },
//     {
//         Question : "How to length start from ?",
//         Option1 : '1',
//         Option2 : '2',
//         Option3 : '0',
//     },
//     {
//         Question : "What is CSS stand from ?",
//         Option1 : 'cas ceding style sheet',
//         Option2 : 'kas cading style sheet',
//         Option3 : 'cas cading style sheet',
//     },
// ]
for(var i = 0; i <arr.length ; i++){
    document.write(arr[i].Question)
}