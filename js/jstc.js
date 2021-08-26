 // Get the modal
 var modal = document.getElementById('id01');
          
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }


 // Get the modal
 var modal = document.getElementById('id02');
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }


 // Get the modal
 var modal = document.getElementById('id03');
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
 
 function myFunction() {
   alert("Đăng ký thành công");
 }
 function myFunction2() {
   alert("Gửi mật khẩu mới thành công");
 }


 function  addToCart(item) {
    debugger;          
     item.quantity = 1;
     console.log(item.quantity);
     var list;
     if (localStorage.getItem('cart') == null) {
         list = [item];
     } else {
         list = JSON.parse(localStorage.getItem('cart')) || [];
     let ok = true;
     for (let x of list) {
         if (x.id == item.id) {
         x.quantity += 1;
         ok = false;
         break;
         }
     }
     if(ok){
         list.push(item); 
     } 
     }
     localStorage.setItem('cart', JSON.stringify(list));
     alert("Đã thêm giở hàng thành công");
 }

 function  addToCart(item) {
    debugger;          
     item.quantity = 1;
     console.log(item.quantity);
     var list;
     if (localStorage.getItem('cart') == null) {
         list = [item];
     } else {
         list = JSON.parse(localStorage.getItem('cart')) || [];
     let ok = true;
     for (let x of list) {
         if (x.id == item.id) {
         x.quantity += 1;
         ok = false;
         break;
         }
     }
     if(ok){
         list.push(item); 
     } 
     }
     localStorage.setItem('cart', JSON.stringify(list));
     alert("Đã thêm giở hàng thành công");
 }