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


//Assignment31=34
//task1
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;
// document.write(dateTime);

//task2
// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// var d = new Date();
// alert("The current month is " + monthNames[d.getMonth()]);

//task3
// var dayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// alert("The current day is " + dayNames[d.getDay()]);

//task4
// var d = new Date();
// num=d.getDay();
//if (num==1 || num==0){
// alert("it's funday")}


//task5
// var d = new Date();
// num=d.getDate();
//if (num<16){
// alert("it's 1st fifteen days of month");}
//else{
// alert("last fifteen days of month");}

//task6
// var d = new Date();
// num=d.getTime();
// var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
// var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// var dateTime = date+' '+time;
// document.write(dateTime+"<br>estimmed milliseconds after 1970 "+num+"<br>estimmed mminutes after 1970 "+(num/60000));

//task7
// var d = new Date();
// num=d.getHours();
// if(num>=0&&num<12){
//     alert("it's am")
// }
// else{
//     alert("it's pm")
// }

//task8
// var d=new Date();
// Laterdate= new Date("Dec 31, 2020");
// document.write(Laterdate)

//task9
// var date1= new Date("May 23, 2020");
// var date2=new Date("June 22, 2020");
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
// document.write(Difference_In_Days+" days passed since ramzan");

//task10
// var date1= new Date("Jan 1, 2015");
// var date2=new Date("June 22, 2020");
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
// var Difference_In_seconds = Difference_In_Time / (1000 * 60 );
//document.write(date2); 
// document.write(Difference_In_seconds+"  seconds have passed since begining of 2015");

//task11
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var time1 = (today.getHours()-1) + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;
// document.write("current time "+dateTime);
// var dateTime1 = date+' '+time1;
// document.write("<br>1 hour ago "+dateTime1);

//task12
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var date1 = (today.getFullYear()-100)+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var dateTime = date+' '+time;
// document.write("current time "+dateTime);
// var dateTime1 = date+' '+time;
// document.write("<br>100 years ago "+dateTime1);

//task13
// var birth_year=+prompt("enter your birth year");
// var d= new Date();
// var y=d.getFullYear();
// document.write("you age "+(y-birth_year));

//task14
// document.write("K Electric Bill <br><br>".bold());
// var name="ahmer",month="june",no=410,c=16;
// document.write("<br>customer name"+name);
// document.write("<br>month"+month);
// document.write("<br>number of units "+no);
// document.write("<br>charges "+c);
// var late_charge=350;
// document.write("<br><br><br>within due date "+(no*c));
// document.write("<br>late charges "+late_charge);
// document.write("<br>within due date "+((no*c)+late_charge));


//Assignment35-38
//task1
// function telltime(){
// var d= new Date();
// document.write(d);
// }
// telltime();

//task2
// function greet(){
//     var first_name=prompt();
//     var last_name=prompt();
//     document.write("greetings "+(first_name+last_name));
// }
// greet();

//task3
// function sum(){
//     var first=+prompt();
//     var last=+prompt();
//     return first+last
// }
// document.write( sum());

//task4
// function perform(num1,num2,){
    
//     return (num1+num2);
// }
// document.write( perform(1,2));

//task5
// function square(num){
//     return (num*num);
// }
// document.write(square(9));

//task6
// function factorial(n){
//     var x;
//     var fact=1;
//     for(x=n;x>0;x--){
//         fact*=x;
//     }
//     return fact;
// }
// document.write(factorial(4));

//task7
// function count(){
//     var x;
//     var start=+prompt("input starting number");
//     var end=+prompt("input ending number"); 
//     for(x=start;x<end;x++){
//         document.write(x+"<br>")
//     }
// }
// count();

//task8
// function hyp(){
//     var base=+prompt("input base number");
//     var perp=+prompt("input perp number"); 
//     var hyp;
//     function square(b,c){
//         return ((b*b)+(c*c));

//     }
//     hyp=Math.sqrt(square(base,perp));
//     return hyp;
// }
// document.write(hyp());

//task9
// function A(width,height){
//     return  (width * height);
// }
// document.write(A(3,4));

///task10
// function palindrom(n){
//     length=n.length-1;
//     var x;
//     var str="";
//     for(x=length;x>=0;x--){
//         str+=n[x];
//     }
//     if (str==n){
//         document.write("it's palindrome");
//     }
//     else{
//         document.write("its not palindrome");
//     }


// }
// palindrom("madam");

//task11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// alert(uppercase("the quick brown fox"));

//task12
// function longestword(str)
// {
//   var array1 = str.split(' ');
//   var word=array1[0].length;
//   var letter=array1[0];
//   var x;
//   for(x=0;x<array1.length;x++){
//       if (word<array1[x].length){
//           word=array1[x].length;
//           letter=array1[x];
//       }
//   }
//   return letter;
  
// }
// document.write(longestword("Web Development Tutorial'"));

//task13
// function countletter(str,chr)
// {
//   var x;
//   var count=0;
//   for(x=0;x<str.length;x++){
//       if (str[x]==chr){
//           count++;
//       }
//   }
//   return count;
  
// }
// document.write(countletter('JsResources.com', 'o'));

//task14
// function circum(r){
//     return (2*3.141*r);
// }
// function circle(r){
//     return (3.141*r*r);
// }
// var a=circle(9);
// var b=circum(9);
// document.write("Area of cirle is :"+a)
// document.write("<br>circumference of circle is :"+b);