import React from "react";
import Card from "./Card";
import { SiGooglekeep } from 'react-icons/si';
import { useState,useEffect } from "react";

function Header() {
  const [cards, setCards] = useState([]);
  const [finalCards,setFinalCards] = useState([])
  const [lablesCollection,setLablesCollection] = useState([])
  


  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    lable:""
  });

  function addNote(newcard) {
    setCards((prevValue) => {
      return [...prevValue, newcard];
      
    });
    console.log(cards);
  }

  
 

  function deleteNotes(id) {
    setCards((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });


  }


  
  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    }) 
     ;
  }
  function handleExpanded() {
    setExpanded(true);
  }

  function submitButton(event) {
    // onAdd(note);
    addNote(note)
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  const handleLable1 = (id,text1)=>{
    // setCards(
    //   cards.map(item => 
    //     item.id === id 
    //     ? {...item, lable : text1 } 
    //     : item 
    // )

    // )

    console.log("card item"+cards[id].lable)
    // setCards(
    //   [...cards, cards[id].lable =text1]
    // )

    setCards(
      [...cards.slice(0,id),
      {
        ...cards[id],
        lable:text1
      },
    ...cards.slice(id+1)]
    )
    console.log("changeed the lable in cards",cards)
    console.log(text1,id)

  }

  const all = ()=>{
   setFinalCards([...cards])

  }

  const some = (e)=>{
     console.log(e)
    setFinalCards([...cards.filter((item)=>{
      // if (item.lable===e ){
      //   return item
      // }
      return item.lable===e

    })])


  }


  useEffect(() => {
    let distinctObjects = cards.filter((obj, index, self) =>
  index === self.findIndex((t) => (
    t.lable === obj.lable
  ))
)
setLablesCollection(distinctObjects.map(e=>e.lable))
setFinalCards([...cards])




}, [cards]);

  return (
    <>
    <header className="my-4 ">
      <div className="rounded-md bg-amber-300 inline py-3 px-2 mr-3 ml-8 "><SiGooglekeep color="white" className="inline "></SiGooglekeep></div>
      <span className="h-8 text-3xl px-0 py-2 mb-5 text-slate-600 font-medium ">
       IaMnEo Keep
        
      </span>
      <hr NOSHADE="noshade" className="mt-5 h-0.5 my-4"></hr>
    </header>

{/* main body starts */}

<div className=" grid grid-cols-5">

<div className="col-span-1 bg-gray-100 h-screen">
      <div className="bg-amber-300 py-3  pl-8"> <spam className='text-white text-xl font-medium'>Categories</spam> </div>
      <ui className='list-none'>
       <li onClick={all} className="pl-8 pt-5 hover:cursor-pointer text-lg font-medium text-slate-600"><span className="bg-white px-3 py-1 hover:text-amber-500 rounded-lg">All Cards</span> </li> 
       {lablesCollection.map((e)=>{
       if (e){
        return <li  onClick={()=>some(e)} className="hover:cursor-pointer pl-8 pt-5 "><span className="  bg-white px-3 py-1 hover:text-amber-500 rounded-lg text-lg font-medium text-slate-600"> {e}</span></li>
       }
       })}
      </ui>
      
    </div>

  <div className="col-span-4">
      <form>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button  onClick={submitButton}>
          {/* <IoIosAdd size={35} /> */}
          <span className="m-4">Add</span>
        </button>
      </form>

      {
        finalCards.map((x,index)=><Card 
        key={index}
          id={index}
          title={x.title}
          lable={x.lable}
          content={x.content}
          onDelete={deleteNotes}
          handleLable1={handleLable1}
          
        />)
      }

      

    </div>
</div>
   



  
    </>
  );
}

export default Header;
