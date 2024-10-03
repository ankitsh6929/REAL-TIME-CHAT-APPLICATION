const MyMessage = ({message}) => {
   
     if(message.attachments && message.attachments.length>0)
     {
         return(
     <img 
       src="message.attachment[0].file"
       alt="Message-attachment"
       className="Message-attachment"
        style={{float : 'right'}}
     />
  ) 
 }



     return(

         <div className="Message" style={{float : 'right',marginRight: '18px', color : "white" , backgroundColor : '#3B2A50'}} >
           {message.text}
         </div>
     );

};

export default MyMessage;