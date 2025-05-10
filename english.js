let devProfile={
    fullName: "Bobadilla Karina",
    age: 19,
    profession: "FullStack  developer",
    skills: ["javaScript", "Node.js", "React", "MongoDB" ],
    isEmployed: true,
    contact: {
        email : "kbobadilla021@gmail.com",
        location: "Misiones, Argentina"
    }
};

function profilePrese(profile){
    let presentation = `Hello :) My name is ${profile.fullName}. I am a ${profile.profession}. `;

presentation += `I work with ${profile.skills.slice(0, -1).join(', ')}`;
if (profile.skills.length > 1){
    presentation += ` and ${profile.skills.slice(-1)}`;
}
presentation += `. `;

presentation += `I live in ${profile.contact.location}. `;
presentation += `I am ${profile.age} yeas old. `;

if (profile.isEmployed){
    presentation += "I'm currenlty employed and ope to new opportunities.";

}

presentation += ` You can contact me at ${profile.contact.email}.`;
return presentation;
}

console.log(profilePrese(devProfile));