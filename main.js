    //convert from string to number.
    let x="1500";
    console.log(typeof +x);
    console.log(typeof Number(x));
    console.log(typeof parseInt(x));
    console.log(typeof parseFloat(x));

    //convert from number to string .
    let y=1500;
    console.log(typeof String (y));
    console.log(typeof y.toString());
    console.log(typeof 1500..toString());
    //function in string 
    let name="Yousef_al_ahmed ";
    console.log(name.repeat(4))
    console.log(name.length)
    console.log(name[2]);
    //console.log(name.CharAt(2))
    console.log(name.indexOf('u'));
    console.log(name.lastIndexOf('f'));
    console.log(name.slice(0,3));// the end index is not included ....
    console.log(name.slice(-6));//and take Negative indexs ....
    console.log(name.split('_'));
    console.log(name.substring(2,4));//he work same work function slice , but he don't take Negative indexs....
    console.log(name.substr(0,6));//the value_2  is counter he start from the value_1 ...

    //Search in String...

    let NAME="yousef al ahmed";
    console.log(name.includes('yousef'));//return true or false
    console.log(name.startsWith('y'));//this function checked for the first character in string ...
    console.log(name.endsWith('y',length));//this function checked for the end character in string ...\\


    //array...
    let names=['yousef','ali','ahmed'];
    console.log(names);
    console.log(names[1]);
    let objects=[1,2,3,[4,5,6]]
    console.log(objects[3]);
    console.log(objects[3][2]);

    //add elements in array. 
    names.push='yahya'//add element to last index.
    names.unshift='lele'//add element to first index.

    //delete elements in  array.
    names.shift();  //delete form first in array.
    names.pop(); //delete form late in array.

    names.splice(0,1); //(start,count )for delete.
    names.splice(0,1,"mohamd","mohsen");// (start,count,add,...) , we can delete elements and add elements for the same index

    //search in array.
    console.log(names.indexOf('ahmed',0));//(value,start search) ..return -1 if he doesn't find the value
    console.log(names.lastIndexOf('ali',3));
    console.log(names.includes(yahya,0));//(vlaue,start)... return true or false .

    //sort and reverse 
    console.log(names.sort()); //from a-->z and 1-->++
    console.log(names.reverse()); 

    //concat and join array.
    let arr1=['ahmed','ali','mazen'];
    let arr2=['gamal','karem','omar'];
    //-1-
    arr1=arr1+arr2;
    console.log(typeof arr1); //return string.. 
    //-2-
    arr1.concat(arr2);
    console.log(arr1);
    //we can concat for many arrays.
    console.log(arr1.join('-'));// but typeof (join) is string

    let askemail=prompt("enter your email :");
    let email="yousef2004alahmed@gmail.com";
    console.log(askemail==email);


    //convertion from lower to Upper and Upper to Lower.....
    let z="yousef";
    console.log(z.toUpperCase);
    console.log(z.toLowerCase);
    console.log(z.toLocaleUpperCase);
    console.log(z.toLocaleLowerCase);
    console.log(z.trim());//delete spaces from the start and the end.

    //== :values.
    //=== :values and datatypes.
    console.log(5=='5');    // return true
    console.log(5==='5');   // return false

    //shaps if
    //-1-
    let age=prompt("enter your age :");
    if(age>=18){
        document.write("young");
    }
    else{
        document.write("child");
    }

    //-2-   
    age>=18 ? 
    document.write("young")
    :document.write("child")

    //switch
    switch(age)
    {
        case 18:
            document.write('yes');
            break;
        default :
        document.write('No');
    }
    //end the basic....
    //function

    function hello()
    {
        console.log('hello world');
    }

    function CalcAge(Age)
    {
        let result=Age*365;
        console.log(result);
    }
    CalcAge(15);

    //hoisting
    //var : hoisting , let : no hoisting 
    //function decleration support hoisting ...
    // function expression don't suppport hoisting ...
    // example function expression :
    let hello=function()
    {
        console.log('hello world');
    }
    //example function don't need to call it .
    (function ()
    {
        console.log('hello wordl');
    }
    )();

    //alot of parameters.
    function Cala( ...numbers )
    {
        let sum=0;
        for (let i = 0; i < numbers.length; i++) {
            sum+=numbers[i];
        }
        console.log("The sum is : ${sum}");
    }
    Cala(4,5,8);//Calc(1,5,8,......)

    //test :
    console.log(   x()   );
    function x()
    {
        function y(){return 1;}
        return y();
        function y(){return 0;}
    }
    //arrow function ...
    let f=()=>{
        return 1;
    }
    console.log(f);

    let ff=()=>1; //if there one line statement , and with parameters.
    let fff=_=>1; //if there one line statement , and without parameters.

    // define Object :
    let car ={
        name:"BMW",
        price:500,
        color:["white","red","black"],
        model: 2022,

        hello:function(){
            return "hello";
        }
    };
    console.log(car.name);
    console.log(car.color[1]);
    console.log(car.hello());


    //DOM
    document.getElementById()
    document.getElementsByClassName()
    document.getElementsByTagName()
    document.querySelector()
    document.querySelectorAll()
    document.body
    document.title
    document.images
    document.links
    document.forms










    
