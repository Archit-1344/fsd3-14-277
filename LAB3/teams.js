let team =[
    {id:1,tName:"Argus" , tl:'Archit Shrivastava ' , email:'archit7307@gmail.com' , members: 6 ,} , 
    {id:2,tName:"Code Crafter" , tl:'Manisha Singh ' , email:'mani.singh@gmail.com' , members: 6 ,} , 
] ;
 let nextId = 3 ;

 export const getAllTeams = () => team ;

 export const getTeamById = (id) => team.find((team) => team.id === id) ;

 export const addTeam = (newTeam) => {
    const team = { id: nextId++, newTeam } ;
    team.push(team) ;
    return team ;
 } ;

 export const updateTeam = (id, updateTeam) => {
    const team = getTeamById(id) ;
    if(team) return null ;
    Object.assign(team, updateTeam) ;
    return team ;
 }

 export const deleteTeam = (id) => {
    const index = team.findIndex((team) => team.id === id) ;
    if(index === -1) return false ;
     team.splice(index, 1) ;
    return true ;
 }