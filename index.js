document.getElementById('radio1').checked = true;


function addNames() {
    var i = document.getElementsByClassName("friend-name").length;
    var addFriends = document.getElementsByClassName("add-friends-name")[0];
    var addBtn = document.getElementsByClassName("add")[0];
    const friendNew = document.createElement("input");
    friendNew.setAttribute("class", "friend-name");
    friendNew.setAttribute("type", "text");
    friendNew.setAttribute("placeholder", "Enter Name " + (i+1));
    addFriends.insertBefore(friendNew, addBtn);
}

function goNext() {
    var grnDivider = document.getElementById("green-divider");
    var divider = document.getElementsByClassName("divider")[0];
    var form1 = document.getElementById("form-1");
    var form2 = document.getElementById("form-2");
    var form3 = document.getElementById("form-3");
    var backBtn = document.getElementById("back-btn-container");
    var grnDividerWidth = parseInt(getComputedStyle(grnDivider).width.replace("px", ''));
    var dividerWidth = parseInt(getComputedStyle(divider).width.replace("px", ''));


    if(getComputedStyle(form1).display == "flex")
    {
        var yourName = document.getElementById("your-name");
        if(yourName.value == "")
        {
            var popup = document.getElementById("myPopup1");
            popup.style.display = "block";
            console.log("give value");
        }

        else
        {
            sessionStorage.setItem("yourName", yourName.value);
            var popup = document.getElementById("myPopup1");
            popup.style.display = "none";
            grnDivider.style.width = 0.78 * dividerWidth + "px";
            form1.style.display = "none";
            form2.style.display = "flex";
            backBtn.style.display = "flex";
        }
    }

    else if(getComputedStyle(form2).display == "flex")
    {
        var elfName = document.getElementById("elf-name");
        var setDate = document.getElementById("set-date");
        var deadlineDate = document.getElementById("deadline-date");
        var givingEmail = document.getElementById("giving-email");
        var dropdownHeard = document.getElementById("dropdown-heard");

        // if(elfName.value == "") || setDate.value == "" || deadlineDate.value == "" || givingEmail.value == "")
        if(elfName.value == "")
        {
            console.log("give value");
            var popup = document.getElementById("myPopup2");
            popup.style.display = "block";
        }

        else
        {
            var popup = document.getElementById("myPopup2");
            popup.style.display = "none";
        }

        if(setDate.value == "")
        {
            console.log("give value");
            var popup = document.getElementById("myPopup3");
            popup.style.display = "block";
        }

        else
        {
            var popup = document.getElementById("myPopup3");
            popup.style.display = "none";
        }

        if(deadlineDate.value == "")
        {
            console.log("give value");
            var popup = document.getElementById("myPopup4");
            popup.style.display = "block";
        }

        else
        {
            var popup = document.getElementById("myPopup4");
            popup.style.display = "none";
        }

        if(givingEmail.value == "")
        {
            console.log("give value");
            var popup = document.getElementById("myPopup5");
            popup.style.display = "block";
        }

        else
        {
            var popup = document.getElementById("myPopup5");
            popup.style.display = "none";
        }

        if(elfName.value != "" && setDate.value != "" && deadlineDate.value != "" && givingEmail.value != "")
        {
            grnDivider.style.width = dividerWidth + "px";
            form2.style.display = "none";
            form3.style.display = "flex";
            var yourName = document.getElementById("your-name");
            document.getElementsByClassName("drawn-date-set")[0].innerHTML = deadlineDate.value;
            document.getElementsByClassName("drawn-date-set")[1].innerHTML = deadlineDate.value;
            document.getElementsByClassName("elf-name-set")[0].innerHTML = elfName.value;
            document.getElementsByClassName("guests-name-set")[0].innerHTML = yourName.value;
            document.getElementsByClassName("date-set")[0].innerHTML = setDate.value;
        }
    }
}

function goBack() {
    var grnDivider = document.getElementById("green-divider");
    var divider = document.getElementsByClassName("divider")[0];
    var form1 = document.getElementById("form-1");
    var form2 = document.getElementById("form-2");
    var form3 = document.getElementById("form-3");
    var backBtn = document.getElementById("back-btn-container");

    var grnDividerWidth = parseInt(getComputedStyle(grnDivider).width.replace("px", ''));
    var dividerWidth = parseInt(getComputedStyle(divider).width.replace("px", ''));

    if(parseInt(dividerWidth) == grnDividerWidth)
    {
        console.log("hi");
        grnDivider.style.width = 0.78 * dividerWidth + "px";
        form3.style.display = "none";
        form2.style.display = "flex";
    }

    else
    {
        console.log(parseInt(dividerWidth));
        console.log(grnDividerWidth);
        grnDivider.style.width = 0.3 * dividerWidth + "px";
        form2.style.display = "none";
        form1.style.display = "flex";
        backBtn.style.display = "none";
    }
}

function addImage() {
    var display = document.getElementById("add-image-all");

    console.log(getComputedStyle(display).display);

    if(getComputedStyle(display).display == "block")
    {
        display.style.display = "none";
    }

    else
    {
        display.style.display = "block";
    }
}