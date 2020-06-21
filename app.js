//Assignment # 21-25
//task1
// first_name="ahmer";
// last_name="mahar";
// fullname=first_name+last_name;
// alert("greetings! "+fullname);

//task2
// var phone=prompt("My Favourite phone is")
// alert(phone.length)

//task3
// var letter=prompt();
// alert(letter.indexOf('n'));

//task4
// var str = "Hello planet earth, you are a great planet.";
// var n = str.lastIndexOf("planet");

//task5
// var string="pakistan"
// var index=+prompt();
// alert(string[index]);

//task6
// first_name="ahmer";
// last_name="mahar";
// fullname=first_name.concat(last_name);
// alert("greetings! "+fullname);

//task7
// var str = "hyderabad";
// alert("City "+str);
// var res = str.replace("hyder", "islam");
// alert("after replacement "+res);

//task8
// var message="Ali and Sami are best friends. They play cricket and football together.";
// var res = message.replace(/and/g, "&")
// alert(res);

//task9
// var num=463;
// alert(typeof(num));
// var ch='463';
// alert(typeof(ch));

//task10
// var letter=prompt();
// letter=letter.toUpperCase();
// alert(letter);

//task11
// var letter=prompt();
// letter=letter.charAt(0).toUpperCase()+letter.slice(1);
// alert(letter);

//task12
// var num=35.53
// var str=num.toString();
// str=str.replace(".","");
// alert(str);

//task13
// var name=prompt("Enter your name")
// var x;
// for(x=0;x<name.length;x++){
//     if (name[x].charCodeAt(0)==33 ||name[x].charCodeAt(0)==44 || name[x].charCodeAt(0)==46 || name[x].charCodeAt(0)==64){
//         alert("invalid username");
//         break;
//     }
// }

///task14
// var a=["cake","apple pie","patties"];
// var input=prompt("enter input to find item ");
// var x=0,y=-1;
// for(x=0;x<a.length;x++){
//     if (a[x]==input){
//         alert("item found");
//         y=0
//         break
//     }
// }
// if (y==-1){

//     alert("not found")
// }

//task15
// var password=prompt();

// if (password[0]>=0&&password[0]<10){
//     alert("password can not begin with number\nenter a valid  password")
// }
// else if (password.length<6){
//     alert("password must be 6 characters long\nenter a valid  password")
// }

//task16
// var a="university of karachi";
// var b=a.split("");
// var x;
// for(x=0;x<b.length;x++){
//     document.write(b[x]+"<br>");
// }

//task17
// var input=prompt();
// alert(input[input.length-1]);

//task18
// var a="the quick brown fox jumps over the lazy dog";
// var x=0,count=0;
// for(x=0;x<a.length-3;x++)
// {
//     var m=a.slice(x,x+3);
//     if(m=='the'){
//         count=count+1;
//     }

// }
// alert("number of occurence of the word "+count);


//Assignment26-30
//task1
// var integer=+prompt()
// document.write("Round off"+Math.round(integer))
// document.write("celi off"+Math.ceil(integer))
// document.write("floor off"Math.floor(integer))

//task2
// var integer=+prompt()
// document.write("Round off"+Math.round(integer))
// document.write("celi off"+Math.ceil(integer))
// document.write("floor off"Math.floor(integer))

//task3
// var integer=+prompt()
// document.write("absolute value: "+Math.abs(integer))

//task4
// var randomNumber =Math.floor(Math.random() * Math.floor(7));
// alert("random dice value "+randomNumber);

//task5
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 2) + 1;
// var numberOfStars = Math.floor(improvedNum);
// if (numberOfStars==1){
//     alert("random coin value:heads")
// }
// else if (numberOfStars==2){
//     alert("random coin value:tails")
// }

//task6
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 100) + 1;
// var numberOfStars = Math.floor(improvedNum);
//alert("random numbers between 1 and 100 is :"+numberOfStars)

//task7
//var a=+prompt()
//alert("the weight of the user is "+(a+8.3))

//task8
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 10) + 1;
// var secret_numbers = Math.floor(improvedNum);
// var num=+prompt("guess the secret nummber")
// if (num===secret_numbers){
//     alert("your guess about secret number is correct");
// }
//  else {
//     alert("your guess about secret number is incorrect ");
// }



