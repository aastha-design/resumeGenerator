function weAddField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder',"Type Here");

    let we=document.getElementById('we');
    let wEAddButton=document.getElementById('wEAddButton');

    we.insertBefore(newNode,wEAddButton);



}

function skillAddField(){
    let newNode=document.createElement('input');
    newNode.type="text";
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.classList.add('mt-2');   
    newNode.setAttribute('placeholder',"Type Here");

    let skill=document.getElementById('skills');
    let skillAddButton=document.getElementById('skillAddButton');

    skill.insertBefore(newNode,skillAddButton);



}


function aqAddField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder',"Type Here");

    let aq=document.getElementById('aq');
    let aQAddButton=document.getElementById('aQAddButton');

    aq.insertBefore(newNode,aQAddButton);

}

//generating cv

function generateCv(){
    let nameField = document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;

    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

    // skills
    // let skillFields=document.getElementsByClassName('skillField');
    // let skillsT=document.getElementById('skillsT');

    // for(let i=0;i<skillFields.length;i++){
    //     let ele=document.createElement('li');
    //     ele.innerHTML=skillFields[i].value;
    //     skillsT.appendChild(ele);
    // }

    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;

    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;

    document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;

    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;


    //we
    let weFields=document.getElementsByClassName('weField');
    let weT=document.getElementById('weT');

    for(let i=0;i<weFields.length;i++){
        let ele=document.createElement('li');
        ele.innerHTML=weFields[i].value;
        weT.appendChild(ele);
    }
    
    //aq
    let aqFields=document.getElementsByClassName('aqField');
    let aqT=document.getElementById('aqT');

    for(let i=0;i<aqFields.length;i++){
        let ele=document.createElement('li');
        ele.innerHTML=aqFields[i].value;
        aqT.appendChild(ele);
    }


    //code for setting image

    let file= document.getElementById('imgField').files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);

    //set the image to template image

    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
        
    }


    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";


    }
    
//print CV
function printCv(){
    window.print();
}
