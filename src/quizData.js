const questions = [
    {
        questionText :"what is the  correct command to create a new project ?" ,
        answerOption :[
            {answerText : " npm create-react-app" , iscorrect : false},
            {answerText : " npx create-react-app" , iscorrect : false},
            {answerText : " npm create-react-app myReactApp" , iscorrect : false},
            {answerText : " npx create-react-app myReactApp" , iscorrect : true}
        ]
    },
    {
        questionText :"in react.js which one of the following is used to create a class for inheritance ?" ,
        answerOption :[
            {answerText : " create" , iscorrect : false},
            {answerText : " Extends" , iscorrect : true},
            {answerText : " inherits" , iscorrect : false},
            {answerText : "delete" , iscorrect : false}
        ]

    },
    {
        questionText :"what is the default port number in which application run ?" ,
        answerOption :[
            {answerText : "3000" , iscorrect : true},
            {answerText : " 4000" , iscorrect : false},
            {answerText : " 4500" , iscorrect : false},
            {answerText : "3001" , iscorrect : false}
        ]
  
    },
    {
        questionText :"what is state in react ?" ,
        answerOption :[
            {answerText : " a permanent storage " , iscorrect : false},
            {answerText : " internal storage of the component" , iscorrect : true},
            {answerText : " external storage of component" , iscorrect : false},
            {answerText : "none of the above" , iscorrect : false}
        ]  
    },
    {
        questionText :"which of the following is used to pass data to a component from outside in react.js" ,
        answerOption :[
            {answerText : " setState " , iscorrect : false},
            {answerText : " Render with argumentt" , iscorrect : false},
            {answerText : " props" , iscorrect : true},
            {answerText : "prop types" , iscorrect : false}
        ]  
    },
    {
        questionText :"react is mainly for building -----? " ,
        answerOption :[
            {answerText : " database " , iscorrect : false},
            {answerText : " connectivity" , iscorrect : false},
            {answerText : " user interface" , iscorrect : true},
            {answerText : "design platform" , iscorrect : false}
        ]   
    }
]

export default questions;