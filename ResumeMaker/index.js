var educButton = document.getElementById('addEducationButton');
var langButton = document.getElementById('addLanguageButton');
var skillButton = document.getElementById('addSkillButton');

let educationList = [];
let languageList = [];
let skillList = [];

function addEducation(event) {
    var itemDiv = document.createElement('div');
    itemDiv.className = 'form-item';
    itemDiv.id = `${educationList.length}`;

    var schoolLabel = document.createElement('label');
    schoolLabel.htmlFor = `schoolName+${educationList.length}`;
    schoolLabel.innerHTML = 'School Name :';

    var schoolInput = document.createElement('input');
    schoolInput.type = 'text';
    schoolInput.name = `schoolName+${educationList.length}`;
    schoolInput.id = `schoolName+${educationList.length}`;

    var diplomaLabel = document.createElement('label');
    diplomaLabel.htmlFor = `diploma+${educationList.length}`;
    diplomaLabel.innerHTML = 'Diploma :';

    var diplomaInput = document.createElement('input');
    diplomaInput.type = 'text';
    diplomaInput.name = `diploma+${educationList.length}`;
    diplomaInput.id = `diploma+${educationList.length}`;

    var startLabel = document.createElement('label');
    startLabel.htmlFor = `schoolStartData+${educationList.length}`;
    startLabel.innerHTML = 'Start Date :';

    var startInput = document.createElement('input');
    startInput.type = 'date';
    startInput.name = `schoolStartData+${educationList.length}`;
    startInput.id = `schoolStartData+${educationList.length}`;

    var endLabel = document.createElement('label');
    endLabel.htmlFor = `schoolEndData+${educationList.length}`;
    endLabel.innerHTML = 'End Date :';

    var endInput = document.createElement('input');
    endInput.type = 'date';
    endInput.name = `schoolEndData+${educationList.length}`;
    endInput.id = `schoolEndData+${educationList.length}`;

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => {
        if(educationList.includes(itemDiv.id)) {
            var index = educationList.indexOf(itemDiv.id);
            educationList.splice(index, 1);
        }

        document.getElementById('educations-container').removeChild(itemDiv);
    });

    itemDiv.appendChild(schoolLabel);
    itemDiv.appendChild(schoolInput);
    itemDiv.appendChild(diplomaLabel);
    itemDiv.appendChild(diplomaInput);
    itemDiv.appendChild(startLabel);
    itemDiv.appendChild(startInput);
    itemDiv.appendChild(endLabel);
    itemDiv.appendChild(endInput);
    itemDiv.appendChild(deleteButton);

    document.getElementById('educations-container').appendChild(itemDiv);

    educationList.push(itemDiv.id);
}

function addItem(isSkill) {
    var itemDiv = document.createElement('div');
    itemDiv.className = 'form-item';
    itemDiv.id = isSkill ? `${skillList.length}` : `${languageList.length}`;

    var nameLabel = document.createElement('label');
    nameLabel.htmlFor = isSkill ? `skill+${skillList.length}` : `language+${languageList.length}`;
    nameLabel.innerHTML = isSkill ? 'Skill :' : 'Language :';

    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = isSkill ? `skill+${skillList.length}` : `language+${languageList.length}`;
    nameInput.id = isSkill ? `skill+${skillList.length}` : `language+${languageList.length}`;

    var levelLabel = document.createElement('label');
    levelLabel.htmlFor = isSkill ? `skillLevel+${skillList.length}` : `languageLevel+${languageList.length}`;
    levelLabel.innerHTML = 'Level :';

    var levelInput = document.createElement('input');
    levelInput.type = 'text';
    levelInput.name = isSkill ? `skillLevel+${skillList.length}` : `languageLevel+${languageList.length}`;
    levelInput.id = isSkill ? `skillLevel+${skillList.length}` : `languageLevel+${languageList.length}`;

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => {
        if(isSkill) {
            if(skillList.includes(itemDiv.id)) {
                var index = skillList.indexOf(itemDiv.id);
                skillList.splice(index, 1);
            }
        } else {
            if(languageList.includes(itemDiv.id)) {
                var index = languageList.indexOf(itemDiv.id);
                languageList.splice(index, 1);
            }
        }

        var container = isSkill ? document.getElementById('skills-container') : document.getElementById('languages-container');
        container.removeChild(itemDiv);
    })

    itemDiv.appendChild(nameLabel);
    itemDiv.appendChild(nameInput);
    itemDiv.appendChild(levelLabel);
    itemDiv.appendChild(levelInput);
    itemDiv.appendChild(deleteButton);

    var container = isSkill ? document.getElementById('skills-container') : document.getElementById('languages-container');
    container.appendChild(itemDiv);

    if(isSkill) {
        skillList.push(itemDiv.id);
    } else {
        languageList.push(itemDiv.id);
    }
}

educButton.addEventListener("click", (event) => {
    event.preventDefault();
    addEducation();
});
langButton.addEventListener("click", (event) => {
    event.preventDefault();
    addItem(false);
});
skillButton.addEventListener("click", (event) => {
    event.preventDefault();
    addItem(true);
});

document.getElementById('top-button').addEventListener("click", (event) => {
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});