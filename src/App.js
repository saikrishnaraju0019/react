// function Hello() {
//   const employee={
//     name:"Krishna",
//     secondName:"upputuri"
//   }

//   const {name,secondName}=employee
//   return (

//   <div className="name">
//     <center>
//     <h1>sai{employee.name}</h1>
//     <h1>sai{employee.secondName}</h1>
//     <h1>who are you {name}</h1>
//     <p>iam fine krishna {secondName}</p>


//   {/* <img src="https://c.tadst.com/gfx/600x337/rainbow.jpg?1" alt=""/> */}
//   </center>
//   </div>
// )
// }
function Hello(){
  const isvoted=true
  if(isvoted){
    return <h1>thank you</h1>
  }
  else{
    return <p>please vote</p>
  }
}
export default Hello;

