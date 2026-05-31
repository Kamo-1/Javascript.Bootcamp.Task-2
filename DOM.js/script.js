const nameInput = document.getElementById('studentName');
const markInput = document.getElementById('studentMark');

const resultArea = document.getElementById('resultArea');
const resultContent = document.getElementById('resultContent');

const studentList = document.getElementById('studentList');
const listSection = document.getElementById('listSection');

function checkGrade() {

    const name = nameInput.value.trim();
    const markValue = markInput.value.trim();
    const mark = parseInt(markValue);

    // Validation
    if (name === '') {
        showError('Please enter the name of the student.');
        return;
    }

    if (markValue === '') {
        showError('Please enter the mark.');
        return;
    }

    if (isNaN(mark) || mark < 0 || mark > 100) {
        showError('Please enter a valid mark between 0 and 100.');
        return;
    }

    let status;
    let grade;

    if (mark >= 80 && mark <= 100) {
        status = 'Pass';
        grade = 'Distinction';
    }
    else if (mark >= 65 && mark < 79) {
        status = 'Pass';
        grade = 'Merit';
    }
    else if (mark >= 50 && mark < 64) {
        status = 'Pass';
        grade = 'Pass';
    }
    else {
        status = 'Fail';
        grade = 'Fail';
    }

    const isPassing = status === 'Pass';

    resultArea.style.display = 'block';

    resultContent.innerHTML = `
        <div class="${isPassing ? 'pass' : 'fail'}">
            <h2>${name} - ${status}</h2>
            <p>Mark: ${mark}</p>
            <p>Grade: ${grade}</p>
        </div>
    `;

    listSection.style.display = 'block';

    addToList(name, mark);
}

function showError(message) {

    resultArea.style.display = 'block';

    resultContent.innerHTML = `
        <div class="error-message">
            ${message}
        </div>
    `;
}

function addToList(name, mark) {

    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <strong>${name}</strong> - Mark: ${mark}
    `;

    studentList.appendChild(listItem);

    // Clear inputs
    nameInput.value = '';
    markInput.value = '';
}

function clearList() {

    studentList.innerHTML = '';

    listSection.style.display = 'none';

    resultContent.innerHTML = '';
}