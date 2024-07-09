// enable & disable button

function enbBtn(btnId)
{
    document.getElementById(btnId).disabled=false;
}

// window load functions applide

window.onload=()=>
{
    let addForm = document.querySelector("#addForm");
    let item = document.getElementById("item").value;
    let items = document.getElementById("items");

    // add item via user input creat a eventListener
    addForm.addEventListener("submit",addItem);

    // remove items via users create a event listeners
    items.addEventListener("click",removeItem);
    // edit Items
    let editItem = null;
}

// add item callback function
    function addItem(e)
    {
        // prevent redirection after submit on button
        e.preventDefault(); 
        let newItem = document.getElementById("item").value;
        // for update item data
        if(Add_Data.value!='Submit')
        {
            editItem.target.parentNode.childNodes[0].data=document.getElementById("item").value;
            Add_Data.value = "Submit";
            document.getElementById("item").value="";
            Swal.fire({
                title : "Success",
                text : "You Data successfully Updated",
                icon : "success"
            });
            return false;

        }
        
        // trim whitespace from start $ end
        if(newItem.trim()=="" || newItem.trim()=='null')
        {
            swal.fire({
                title : "Somthing wont wrong",
                text : "Please do not left blank input somthing do Add Items",
                icon : "error"
            });
        }

        else{
            // add items here
            let newItem = document.getElementById("item").value;
            let li = document.createElement("li");
            li.className = "list-group-item mt-2";
            // store data via createTaxtNode() and append
            li.appendChild(document.createTextNode(newItem));
            
            swal.fire({
                title : "Good job",
                text : "Data added successfully",
                icon : "success"
            });

            // console.log(newItem);

            // display data in items
            items.appendChild(li);
            // reset all data
            e.target.reset();

            // add delete button $ edit button via document.createElement
            // delete button
            let delBtn = document.createElement("button");
            delBtn.className = "btn btn-sm btn-danger bg-danger text-white float-end ms-2 delete";
            delBtn.appendChild(document.createTextNode("Delete"));

            // edit button
            let editBtn = document.createElement("button");
            editBtn.className = "btn btn-sm btn-primary bg-primary text-white float-end ms-0 edit";
            editBtn.appendChild(document.createTextNode("Edit"));

            // delete button add in items
            li.appendChild(delBtn);
            
            // edit button add in items
            li.appendChild(editBtn);
        }

    }

    // removed items callback function

    function removeItem(e)
    {
        e.preventDefault();
        if(e.target.classList.contains("delete"))
        {
            if(confirm('Are you sure to delete Items'))
            {
                let li=e.target.parentNode;
                items.removeChild(li);
                Swal.fire({
                    title : "Error",
                    text : "Data Deleted successfully",
                    icon : "error"
                });
            }
        }

        // edit data
        if(e.target.classList.contains("edit"))
        {
            document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
            Add_Data.value = "Update Data";
            editItem = e;
        }

    }
