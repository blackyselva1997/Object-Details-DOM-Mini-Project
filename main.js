let Names = document.querySelector("#name");
let detail = document.querySelector("#details");
let submit = document.querySelector("#submit");

let details = [
    {
    Name: "selva",
    Details: "I am Web Developer & Hardware Service Engineer. My native Thippanampatti in Tenkasi."
},
{
    Name: "kumar",
    Details: "I am Full Stack web Developer. My native in chennai."
},
{
    Name: "selvam",
    Details: "I am Civil Engineering Student for Last Year. My native in Kovai."
},
{
    Name: "Kayu",
    Details: "I am Web Developer. My native in Surandai."
},
{
    Name: "Aravindh",
    Details: "I am Web Developer & Car driver. My native Killapavor in Tenkasi."
},
{
    Name: "Kutti",
    Details: "I am Web Developer & Mechanical Engineering. My native in Tenkasi."
},
{
    Name: "Lingam",
    Details: "I am Web Developer & Designer. My native Ariyapuram in Tenkasi."
},
{
    Name: "Hari",
    Details: "I am Web Developer & Maths biology. My native in Surandai."
},
];

submit.addEventListener('click', function(){
    let randomIndex = Math.floor(Math.random() * details.length);
    let {Name, Details} = details[randomIndex];
    Names.textContent = Name;
    detail.textContent = Details;
});
document.write(Names.textContent);
document.write(detail.textContent);