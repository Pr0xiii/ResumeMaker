var educButton = document.getElementById('addEducationButton');
var langButton = document.getElementById('addLanguageButton');
var skillButton = document.getElementById('addSkillButton');

let educationList = [];
let languageList = [];
let skillList = [];

function addEducation(event) {
    event.preventDefault();

    var itemDiv = document.createElement('div');
    itemDiv.className = 'form-item';
    itemDiv.id = `${educationList.length}`;

    var schoolLabel = document.createElement('label');
    schoolLabel.for = 'schoolName';
    schoolLabel.innerHTML = 'School Name :';

    var schoolInput = document.createElement('input');
    schoolInput.type = 'text';
    schoolInput.name = 'schoolName';
    schoolInput.id = 'schoolName';

    var diplomaLabel = document.createElement('label');
    diplomaLabel.for = 'diploma';
    diplomaLabel.innerHTML = 'Diploma :';

    var diplomaInput = document.createElement('input');
    diplomaInput.type = 'text';
    diplomaInput.name = 'diploma';
    diplomaInput.id = 'diploma';

    var startLabel = document.createElement('label');
    startLabel.for = 'schoolStartData';
    startLabel.innerHTML = 'Start Date :';

    var startInput = document.createElement('input');
    startInput.type = 'date';
    startInput.name = 'schoolStartData';
    startInput.id = 'schoolStartData';

    var endLabel = document.createElement('label');
    endLabel.for = 'schoolEndData';
    endLabel.innerHTML = 'End Date :';

    var endInput = document.createElement('input');
    endInput.type = 'date';
    endInput.name = 'schoolEndData';
    endInput.id = 'schoolEndData';

    var deleteButton = document.createElement('button');

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

function addItem(event, isSkill = true) {
    event.preventDefault();
    
    var itemDiv = document.createElement('div');
    itemDiv.className = 'form-item';
    itemDiv.id = isSkill ? `${skillList.length}` : `${languageList.length}`;

    var nameLabel = document.createElement('label');
    nameLabel.for = isSkill ? 'skill' : 'language';
    nameLabel.innerHTML = isSkill ? 'Skill :' : 'Language :';

    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = isSkill ? 'skill' : 'language';
    nameInput.id = isSkill ? 'skill' : 'language';

    var levelLabel = document.createElement('label');
    levelLabel.for = isSkill ? 'skillLevel' : 'languageLevel';
    levelLabel.innerHTML = 'Level :';

    var levelInput = document.createElement('input');
    levelInput.type = 'text';
    levelInput.name = isSkill ? 'skillLevel' : 'languageLevel';
    levelInput.id = isSkill ? 'skillLevel' : 'languageLevel';

    var deleteButton = document.createElement('button');

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

langButton.addEventListener("click", () => addItem(false));
skillButton.addEventListener("click", () => addItem(true));