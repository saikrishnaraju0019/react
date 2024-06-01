import React from "react";
    // const Teams=[
    //     {
    //         name:"RR",
    //         players:["buttler","samsom","jaiswal","parag"],
    //         trophies:[2011]
    //     },
    //     {
    //         name:"RCB",
    //         players:["virat","faf","topley","cahal"],
    //         trophies:[2011]
    //     }
    // ]
    //        return(
    //         <>{
    //             Teams.map((eachTeam,index)={
    //                 return(
    //                     <React.Fragment>

    //                     </React.Fragment>
    //                 )
    //             })
    //         }
    //         </>
    //        )



    function Hello() {
        // const isSubscibed = false;
      
        const employees = [
          {
            teamName:"RR",
            players:["samson","buttler","jaiswal","parag"],
            trophyes:[2010]
                     },
          {
            teamName:"Mumbai",
            players:["rohit","tilak"],
            trophyes:[2012,2014,2016]
           
          },
          {
            teamName:"Rcb",
            players:["Virat","Faf","siraj"],
            trophyes:[0]
           
          },
          {
            teamName:"Srh",
            players:["Dawan","kane","bhuvi"],
            trophyes:[2011,2016]
           
          },
      
      

      
        ];
      

        return (
          <>
      
          {
            employees.map((eachEmployee,index)=>{
              const{id,teamName,trophyes,players} =eachEmployee
                      return(
                <React.Fragment key={id} >
                
                    <table>
                    <tr>
                  <td>{index+1}</td>
                  <td>{teamName}</td>
                  <td>
                    <ul>
                      {players.map((player, playerIndex) => (
                        <li key={playerIndex}>{player}</li>
                      ))}
                    </ul>
                  </td>

                  <td>
                    <ul>
                      {trophyes.map((trophy, playerIndex) => (
                        < li key={playerIndex}>{trophy}</li >
                      ))}
                    </ul>
                  </td>
                  </tr>
                  </table>
                </React.Fragment>
              )
            })
          }
      
      
      
            
          </>
        )
      
      }
      
      export default Hello;
      
      
      
      
    