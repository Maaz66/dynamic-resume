document.getElementById('Resume-form')?.addEventListener('submit', function(event) {
event?.preventDefault();

 //prevent page reload

    //collect input value
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

      const Name = nameElement.value;
      const Email= emailElement.value;
      const Phone = phoneElement.value;
      const Education = educationElement.value;
      const Experience = experienceElement.value;
      const Skills = skillsElement.value;
    
     const resumeHTML = `
      <h2>Resume</h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${Name}</p>
    <p><b>email:</b>${Email}</p>
    <p><b>phone:</b>${Phone}</p>

    <h3>Education</h3>
    <p>${Education}</p>

    <h3>Experience</h3>
    <p>${Experience}</p>

    <h3>skills</h3>
    <p>${Skills}</p>
    `;
  // display the generate resume

  const resumeHTMLelement = document.getElementById('resume-display')
  if(resumeHTMLelement){
     resumeHTMLelement.innerHTML = resumeHTML
  } else {
    console.error('the resume out put element are missing')
  } 
 }else {
    console.error('one or more put element are missing')
  } 


});
