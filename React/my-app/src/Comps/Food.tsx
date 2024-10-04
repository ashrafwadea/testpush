function Food(){
    const food1 ="Orange";
    const food2 ="Banana";

    let fruits: string[] =["apple","oragne","bannana"];

    fruits=fruits.sort((a ,b) => b.toString().localeCompare(a.toString()) )


    let listitems = fruits.map(x=><li key={x}>{x}</li>)

    const pp = <p>hellllllllllo</p>;

return (


<>
    <ul>
    {listitems}
    </ul> 
    {pp}
    </>
)


}

export default Food;